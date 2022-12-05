import React from 'react';
import './style.css';

import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    // console.log('state', state?.value);
    return state;
  });

  const onClickHandler = (e) => {
    e.target.id === 'decr'
      ? dispatch({ type: 'DECREMENT' })
      : dispatch({ type: 'INCREMENT' });
  };

  // console.log('State', value);
  const count = 0;

  const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    console.log('Users', users);
    dispatch({ type: 'FETCHUSERS', payload: users });
  };

  return (
    <div>
      <h1>Basic React Redux example</h1>
      <p>Count {state.value}</p>
      <button onClick={onClickHandler}>Increment</button> &nbsp;
      <button id="decr" onClick={onClickHandler}>
        Decrement
      </button>{' '}
      &nbsp;
      <button onClick={fetchData}>Fetch Data</button>
      <p>Users {JSON.stringify(state.users)}</p>
    </div>
  );
}
