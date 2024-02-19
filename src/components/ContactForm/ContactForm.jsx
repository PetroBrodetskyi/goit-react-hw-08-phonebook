import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactReducer';
import { selectContacts } from '../../redux/products.selectors';
import css from './ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^0-9]/g, '');

    if (phoneNumber.length < 4) {
      return phoneNumber;
    } else if (phoneNumber.length < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(formatPhoneNumber(value));
    }
  };

  const handleContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number ? number.replace(/[^0-9]/g, '') : '';

    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === normalizedName ||
          (contact.phone && contact.phone.replace(/[^0-9]/g, '') === normalizedNumber)
      )
    ) {
      Notify.failure(`${name} is already in the contacts list.`, {
        position: 'center-bottom',
        timeout: 3000,
        width: '320px',
        fontSize: '18px',
      });
      return;
    }

    const formattedNumber = formatPhoneNumber(normalizedNumber);

    const newOneContact = {
      id: nanoid(),
      name,
      phone: formattedNumber,
    };

    dispatch(addContact(newOneContact));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactsflex} onSubmit={handleSubmit}>
      <input
        className={css.contactinput}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <input
        className={css.contactinput}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Phone Number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />
      <button className={css.contactbutton} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
