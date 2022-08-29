import { useState } from 'react';
import PropTypes from 'prop-types';
import initialState from './initialState';
import s from '../Phonebook.module.css';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = e => {
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

  const { name, number } = state;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span className={s.txt}>Name</span>
        <input
          className={s.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.txt}>Number</span>
        <input
          className={s.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.defaultProps = {
  onSubmit: () => {},
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
