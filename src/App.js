import React from 'react';
import './App.css';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';
import store from './redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AddPersonForm />
        <PeopleList />
      </div>
    </Provider>
  );
}

export default App;
