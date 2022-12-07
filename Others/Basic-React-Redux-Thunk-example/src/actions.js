// this is action file using Thunk

const fetchDataUsingThunk = (url) => {
  console.log("Url received", url);
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

export { fetchDataUsingThunk };
