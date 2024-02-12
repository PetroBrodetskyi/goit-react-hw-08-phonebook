import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from "./App.module.css";
import { AiFillPhone, AiFillContacts } from "react-icons/ai";

const App = () => {
  
  return (
    <div className={css.sectionapp}>
      <div className={css.titleflex}><h1 className={css.sectiontitle}>Phonebook</h1><AiFillPhone className={css.iconphone}/></div>
      <ContactForm />

      <div className={css.titleflex}><h2>Contacts</h2><AiFillContacts className={css.iconcontacts}/></div>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
