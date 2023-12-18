import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;

