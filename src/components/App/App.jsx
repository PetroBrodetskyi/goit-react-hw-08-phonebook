import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Suspense, lazy, useEffect } from 'react';
import RestictedRoute from '../RestictedRoute/RestictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Navigation from '../Navigation/Navigation';
import { useDispatch } from "react-redux";
import { refreshThunk } from '../../redux/auth/authReducer';
import css from "./App.module.css";


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));


const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegistrationPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },

  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  
  return (
    <div className={css.sectionapp}>
      <div className={css.navlink}>
        <Navigation />
      </div>

      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

// const App = () => {
  
//   return (
//     <div className={css.sectionapp}>
//       {/* <div className={css.titleflex}><h1 className={css.sectiontitle}>Phonebook</h1><AiFillPhone className={css.iconphone}/></div>
//       <ContactForm />

//       <div className={css.titleflex}><h2>Contacts</h2><AiFillContacts className={css.iconcontacts}/></div>
//       <Filter />
//       <ContactList /> */}
//     </div>
//   );
// };

// export default App;

