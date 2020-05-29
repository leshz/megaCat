const reducer = (state, action) => {

  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((items) => items.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
