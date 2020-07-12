import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const duplicate = this.state.contacts.find(
      contact => contact.name === name,
    );

    if (duplicate) {
      toast.info(`${name} is already in contacts.`);
      return;
    }

    if (!name) {
      toast.info('Please, fill the form');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredNames = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const filteredNames = this.getFilteredNames();
    const { filter } = this.state;

    return (
      <div>
        <h1 className={styles.header}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <ToastContainer />
        <h2 className={styles.header}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          data={filteredNames}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
