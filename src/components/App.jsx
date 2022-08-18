import { Component } from 'react';
import s from './Phonebook/Phonebook.module.css';

import ContactForm from './Phonebook/Form-elements/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/Form-elements/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getfilterContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter.toLowerCase())
    );
  };

  submitContact = data => {
    if (this.isDublicate(data)) {
      return alert(`${data.name} : ${data.number} is already in list`);
    }

    const newContact = {
      id: data.id,
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  isDublicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  }
  render() {
    const { contacts, filter } = this;
    const filterContacts = this.getfilterContacts();

    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.submitContact} contacts={contacts} />

        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
