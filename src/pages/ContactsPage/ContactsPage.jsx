import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contactReducer';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
} from '../../redux/products.selectors';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/Error/ErrorMassege';
import { Filter } from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import css from "./ContactsPage.module.css";
import { AiFillCloseSquare } from "react-icons/ai";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const error = useSelector(selectContactsError);
  const isLoading = useSelector(selectContactsIsLoading);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const contFilter = getFilteredContacts();
  
  return (
  <div className={css.contactlistform}>
    <p>Phonebook</p>
    <ContactForm />

    <p>Contacts list</p>
    <Filter />
    {isLoading && <Loader />}
    {error && <ErrorMessage message={error} />}

    <ul className={css.linone}>
      {Array.isArray(contFilter) &&
        contFilter.map((contact) => (
          <li className={css.liflex} key={contact.id}>
            <div className={css.divflex}>{contact.name}: {contact.phone}</div>
            <div className={css.contactlistbutton} onClick={() => handleDelete(contact.id)}>
              <AiFillCloseSquare className={css.iconcontacts}/>
            </div>
          </li>
        ))}
    </ul>
  </div>
);
  };

  // return (
  //   <div className={css.contactlistform}>
  //     {isLoading && <Loader />}
  //     {error && <ErrorMessage message={error} />}
  
  //     <ul className={css.linone}>
  //       {sortedContacts.map((contact) => (
  //         <li className={css.liflex} key={contact.id}>
  //           <div className={css.divflex}>{contact.name}: {contact.phone}</div>
  //           <div className={css.contactlistbutton} onClick={() => handleDelete(contact.id)}><AiFillCloseSquare className={css.iconcontacts}/></div>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );


export default ContactList;
