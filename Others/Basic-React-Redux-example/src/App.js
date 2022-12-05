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
    const url = 'https://jsonplaceholder.typicode.com/users';
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
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
      <div>
        Users{' '}
        {state?.users?.map((user) => {
          return <h5>{user.name}</h5>;
        })}
      </div>
    </div>
  );
}
