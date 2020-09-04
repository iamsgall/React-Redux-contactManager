import {createStore} from 'redux';

const initialState = {
  contacts: ['Ulises Bailey', "Laurence O'Kon", 'Aniyah Beahan'],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_PERSON':
      return {...state, contacts: [...state.contacts, payload.person]};

    default:
      return state;
  }
  //   return state;
};

export default createStore(reducer);
