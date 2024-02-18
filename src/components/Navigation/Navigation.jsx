import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated, selectAuthUserData } from '../../redux/auth/auth.selectors';
import { logOutThunk } from '../../redux/auth/authReducer';
import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const userName = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <header>
      <nav className={css.navflex}>
        <div className={css.navflex}>
          <div>
            <Link to="/"><p className={css.homelink}>Home</p></Link>
          </div>
          <div>
            {authenticated ? (
              <div className={css.navflex}>
                <p className={css.userlink}>{userName.name}</p>
                <Link to="/" onClick={onLogOut}><p className={css.logoutlink}>Log out</p></Link>
                <Link to="/contacts"><p className={css.contactslink}>Contacts</p></Link>
              </div>
            ) : (
              <div className={css.navflex}>
                <Link to="/login"><p className={css.loginlink}>Login</p></Link>
                <Link to="/register"><p className={css.registerlink}>Register</p></Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
