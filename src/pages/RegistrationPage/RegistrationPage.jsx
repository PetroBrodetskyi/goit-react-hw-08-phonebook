import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/authReducer';
import css from './RegistrationPage.module.css';


const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.registerform}>
        <div>
        <input placeholder='Email' {...register('email', { required: true })} />
        {errors.email && <p>Email is required.</p>}
        </div>

        <div>
        <input placeholder='Name' {...register('name', { required: true })} />
        {errors.name && <p>Name is required.</p>}
        </div>

        <div>
        <input type="password" placeholder='Password' {...register('password', { required: true })}
        />
        {errors.password && <p>Password is required.</p>}
        </div>

        <button type="submit">Реєстрація</button>
      </div>
    </form>
  );
};

export default RegistrationPage;
