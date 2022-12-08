// import from libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// css
import './style.css';

// local imports
import { fetchDataUsingThunk, fetchDataSimple } from './actions';

export default function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    // console.log('state', state?.value);
    return state;
  });

  const onClickHandler = (e) => {
    e.target.id === 'decr'
      ? dispatch({ type: 'counter/decrement' })
      : dispatch({ type: 'counter/increment' });
  };

  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    // calling the action with the url and dispatch
    fetchDataSimple(url, dispatch);
  };

  const fetchDataWithThunk = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    dispatch(fetchDataUsingThunk(url));
  };

  return (
    <div>
      <h1>Basic React Redux example</h1>
      <p>Count {state.value}</p>
      <button className="button-up" onClick={onClickHandler}>
        Increment
      </button>{' '}
      &nbsp;
      <button className="button-down" id="decr" onClick={onClickHandler}>
        Decrement
      </button>{' '}
      &nbsp;
      <button onClick={fetchData}>Fetch Data</button> &nbsp;
      <button className="button-thunk" onClick={fetchDataWithThunk}>
        Fetch Data Using Thunk
      </button>
      <div>
        <span className="users-span">Users</span>
        <ol>
          {state?.users?.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ol>
      </div>
      <div>
        <span className="posts-span">Posts</span>
        <ul>
          {state?.posts?.map((post) => {
            return (
              <li key={post.id}>
                <span className="post-header">{post.title}</span>
                <br />
                {post.body}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
