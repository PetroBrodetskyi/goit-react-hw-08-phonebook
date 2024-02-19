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
import { AiFillCloseSquare, AiFillPhone, AiFillContacts } from "react-icons/ai";

const ContactsPage = () => {
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

  const sortedContacts = Array.isArray(contFilter)
  ? [...contFilter].sort((a, b) => a.name.localeCompare(b.name))
  : [];

  return (
    <div>
      <div className={css.titleflex}><h1 className={css.sectiontitle}>Phonebook</h1><AiFillPhone className={css.iconphone}/></div>
      <ContactForm />

      <div className={css.titleflex}><h2>Contacts</h2><AiFillContacts className={css.iconcontacts} /></div>
      <div className={css.filterinputflex}>
        <Filter />
      </div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className={css.contactlistform}>
        <ul className={css.linone}>
          {Array.isArray(sortedContacts) &&
            sortedContacts.map((contact) => (
              <li className={css.liflex} key={contact.id}>
                <div className={css.divflex}>{contact.name}: {contact.number}</div>
                <div className={css.contactlistbutton} onClick={() => handleDelete(contact.id)}>
                  <AiFillCloseSquare className={css.iconcontacts}/>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
