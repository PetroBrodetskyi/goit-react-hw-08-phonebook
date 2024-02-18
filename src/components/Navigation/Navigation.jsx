import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated, selectAuthUserData } from '../../redux/auth/auth.selectors';
import { logOutThunk } from '../../redux/auth/authReducer';
import { Link } from 'react-router-dom';
import css from './Navigation.module.css'

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
        <Link to="/"><p>Home</p></Link>

        {authenticated ? (
          <div>
            <p>{userName.name}</p>
            <Link to="/" onClick={onLogOut}><p>Log out</p></Link>
            <Link to="/contacts"><p>Contacts</p></Link>
          </div>
        ) : (
          <div>
            <Link to="/login"><p>Login</p></Link>
            <Link to="/register"><p>Register</p></Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
