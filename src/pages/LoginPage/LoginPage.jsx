import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/authReducer';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.loginform}>
            <input placeholder='Email' {...register('email', { required: true })} type="email"/>
            {errors.email && (<p>Email is required.</p>)}

            <input placeholder='Password' {...register('password', { required: true, minLength: 7 })} type="password"/>
            {errors.password && (<p>This field is required</p>)}

            <button type="submit">Sign In</button>
        </div>
      </form>
  );
};

export default LoginPage;