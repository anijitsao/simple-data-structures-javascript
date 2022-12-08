// this is action creator using Thunk
const fetchDataUsingThunk = (url) => {
  return async (dispatch) => {
    dispatch({ type: "fetching/started" });

    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const posts = await data.json();
    console.log("Posts received", posts);
    posts ? dispatch(savePostsToStore(posts)) : dispatch(unableToGet());
  };
};

const savePostsToStore = (posts) => {
  return {
    type: "fetch/posts/thunk",
    payload: posts,
  };
};

const unableToGet = () => {
  return {
    type: "fetching/error",
  };
};

// fetch data without using Thunks
// this call can be done inside the Component i.e. App.js file
const fetchDataSimple = async (url, dispatch) => {
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const users = await data.json();
  console.log("Users", users);
  dispatch({ type: "fetch/users", payload: users });
};

export { fetchDataUsingThunk, fetchDataSimple };
