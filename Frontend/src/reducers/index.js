const reducer = (state, action) => {

  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((items) => items.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
