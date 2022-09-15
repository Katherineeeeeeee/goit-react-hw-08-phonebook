import s from './Login.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { initialState } from './initialState';

import TextField from '../TextField/TextField';
import { field } from '../TextField/field';

import avatar from '../../images/avatar.jpeg';

const LoginForm = ({ onSubmit }) => {
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

  const { email, password } = state;

  return (
    <div className="container">
      <div className={s.wrap}>
        <div>
          <img className={s.img} src={avatar} alt="avatar" />
        </div>
        <h3>HELLO</h3>
        <p>Sign in by entering the information below</p>
        <form className={s.form} onSubmit={handleSubmit}>
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
              Sign in
            </button>
          </div>
        </form>
        <div className={s.wrapTxt}>
          <p className={s.wrapP}>Don't have an account?</p>

          <NavLink to="/register">SIGN UP</NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
