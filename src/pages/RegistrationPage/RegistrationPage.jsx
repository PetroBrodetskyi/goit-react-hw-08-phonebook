import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/authReducer';
import css from './RegistrationPage.module.css';
import { AiFillPhone } from "react-icons/ai";

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.titleflex}><h1 className={css.sectiontitle}>Phonebook</h1><AiFillPhone className={css.iconphone}/></div>
      <div className={css.registerform}>
        <div>
          <input
            className={css.registerinput}
            placeholder='Email'
            {...register('email', { required: true })}
          />
          {errors.email && <p>Email is required.</p>}
        </div>

        <div>
          <input
            className={css.registerinput}
            placeholder='Name'
            {...register('name', { required: true })}
          />
          {errors.name && <p>Name is required.</p>}
        </div>

        <div>
          <input
            className={css.registerinput}
            type="password"
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {errors.password && <p>Password is required.</p>}
        </div>

        <button className={css.registerbutton} type="submit">
          Реєстрація
        </button>
      </div>
    </form>
  );
};

export default RegistrationPage;
