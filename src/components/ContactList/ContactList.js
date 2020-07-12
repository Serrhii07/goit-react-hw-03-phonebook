import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({ data, onDeleteContact }) => (
  <ul>
    {data.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        deleteContact={() => onDeleteContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
