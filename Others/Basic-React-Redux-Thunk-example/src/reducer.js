// reducer function
const reducer = (stateInitial = { value: 0 }, action) => {
  console.log('Actions', action, ' and state', stateInitial);

  switch (action?.type) {
    case 'INCREMENT':
      return {
        ...stateInitial,
        value: stateInitial?.value + 1,
      };

    case 'DECREMENT':
      return {
        ...stateInitial,
        value: stateInitial?.value - 1,
      };

    case 'FETCHUSERS':
      return {
        ...stateInitial,
        users: action.payload,
      };

    default:
      return stateInitial;
  }
};

export { reducer };
