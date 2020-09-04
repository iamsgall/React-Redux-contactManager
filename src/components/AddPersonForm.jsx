import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addPerson} from '../redux/actions';

export const AddPersonForm = props => {
  const {addPerson} = props;
  const [person, setPerson] = useState('');

  const handleSubmit = e => {
    if (person !== '') {
      addPerson(person);
      setPerson('');
    }
    e.preventDefault();
  };

  const hadleChange = e => {
    setPerson(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Manager</h1>
      <input
        type='text'
        value={person}
        placeholder='Add new contact'
        onChange={hadleChange}
      />
      <input type='submit' value='Add' />
    </form>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addPerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonForm);
