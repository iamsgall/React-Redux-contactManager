import React from 'react';
import {connect} from 'react-redux';

export const PeopleList = props => {
  const {contacts} = props;
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>{contact}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
