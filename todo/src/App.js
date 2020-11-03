import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './reducers/reducers';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import logo from './logo.svg';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState('');

  const toggleComplete = (event) => {
    for(let i in state) {
      if (state[i].item === event.target.textContent) {
        dispatch({type: 'TOGGLE_COMPLETED', payload: i});
      }
    }
  }

  const addTodo = (todo) => {
    dispatch({type: 'ADD_TODO', payload: todo})
    setItem('');
  }

  const clearCompleted = (event) => {
    dispatch({type: 'CLEAR_COMPLETED'});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoForm 
          value={item}
          setItem={setItem}
          add={addTodo}
          clear={clearCompleted}
        />
        <TodoList 
          toggle={toggleComplete}
          state={state}
        />
      </header>
    </div>
  );
}

export default App;
