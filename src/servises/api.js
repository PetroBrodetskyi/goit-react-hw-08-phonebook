import axios from 'axios';

const BASE_URL = 'https://65c7bc59e7c384aada6ee4a8.mockapi.io/contacts';

export const requestContacts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const requestAddContact = async (newContact) => {
  const { data } = await axios.post(BASE_URL, newContact);
  return data;
};

export const requestDeleteContact = async (contactId) => {
  const { data } = await axios.delete(`${BASE_URL}/${contactId}`);
  return data;
};
