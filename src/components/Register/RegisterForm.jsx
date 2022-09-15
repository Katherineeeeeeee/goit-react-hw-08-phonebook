import s from './Register.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { initialState } from './initialState';

import TextField from 'components/TextField/TextField';
import { field } from 'components/TextField/field';

import avatar from '../../images/avatar-register.JPG';

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const onChange = e => {
    const { name, value } = e.currentTarget;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, email, password } = state;

  return (
    <div className="container">
      <div className={s.wrap}>
        <div>
          <img className={s.img} src={avatar} alt="avatar" />
        </div>
        <h3>WELCOME</h3>
        <p>Sign up by entering your information below</p>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.formGroup}>
            <TextField value={name} onChange={onChange} {...field.name} />
          </div>
          <div className={s.formGroup}>
            <TextField value={email} onChange={onChange} {...field.email} />
          </div>
          <div className={s.formGroup}>
            <TextField
              value={password}
              onChange={onChange}
              {...field.password}
            />
          </div>

          <div className={s.formGroup}>
            <button className={s.btn} type="submit">
              Sign Up
            </button>
          </div>
        </form>

        <div className={s.wrapTxt}>
          <p className={s.wrapP}>Have an account?</p>

          <NavLink to="/login">SIGN IN</NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

RegisterForm.defaultProps = {
  onSubmit: () => {},
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
