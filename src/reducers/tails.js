const tailsReducerDefaultState = {
  changedRouting: false
};

export default (state = tailsReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHANGED_ROUTING':
      return {
        ...state,
        changedRouting: true
      };
    default:
      return state;
  }
};
