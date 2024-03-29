import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async formData => {
  const { data } = await phonebookInstance.post('/users/signup', formData);
  setToken(data.token);

  return data;
};

export const requestLogin = async formData => {
  const { data } = await phonebookInstance.post('/users/login', formData);
  setToken(data.token);

  return data;
};

export const requestLogout = async () => {
  const { data } = await phonebookInstance.post('/users/logout');

  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');

  return data;
};

export const requestAllContacts = async () => {
  const { data } = await phonebookInstance.get('/contacts');

  return data;
};


export const requestAddContact = async newContact => {
  try {
    const { data } = await phonebookInstance.post('/contacts', newContact);
    return data;
  } catch (error) {
    console.error('Error adding contact:', error.response.data);
    throw error;
  }
};

export const requestDeleteContact = async contactId => {
  const { data } = await phonebookInstance.delete(`/contacts/${contactId}`);

  return data;
};