import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/authReducer';
import css from './LoginPage.module.css';
import { AiFillPhone } from "react-icons/ai";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
    reset();
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.titleflex}><h1 className={css.sectiontitle}>Phonebook</h1><AiFillPhone className={css.iconphone}/></div>
      <div className={css.loginform}>
        <input
          className={css.logininput}
          placeholder='Email'
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && <p>Email is required.</p>}

        <input
          className={css.logininput}
          placeholder='Password'
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <p>This field is required</p>}

        <button className={css.loginbutton} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
