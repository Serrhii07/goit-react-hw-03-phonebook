import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <p className={styles.form_text}>Name</p>
          <input
            className={styles.form_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p className={styles.form_text}>Number</p>
          <input
            className={styles.form_input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button className={styles.form_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
