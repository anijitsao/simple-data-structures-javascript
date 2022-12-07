// reducer function
const reducer = (stateInitial = { value: 0 }, action) => {
  console.log("Actions", action, " and state", stateInitial);

  switch (action?.type) {
    case "counter/increment":
      return {
        ...stateInitial,
        value: stateInitial?.value + 1,
      };

    case "counter/decrement":
      return {
        ...stateInitial,
        value: stateInitial?.value - 1,
      };

    case "fetch/users":
      return {
        ...stateInitial,
        users: action.payload,
      };

    case "fetch/posts/thunk":
      return {
        ...stateInitial,
        posts: action.payload,
      };
    default:
      return stateInitial;
  }
};

export { reducer };
