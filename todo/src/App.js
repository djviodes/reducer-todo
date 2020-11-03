import React, { useReducer } from 'react';

import logo from './logo.svg';
import './App.css';
import reducer from './reducers/reducers';
import { setItem, setCompleted, setId } from './actions/actions';

function App() {
  const initialState = {
    item: '',
    completed: false,
    id: 0
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = event => {
    dispatch(setItem(event.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input  
          id='todo'
          type='text'
          name='todo'
          value={state.item}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch(setItem(state.item));
            dispatch(setCompleted(state.completed));
            dispatch(setId(state.id));
          }}
        >
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
