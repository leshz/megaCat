export const editUser = (payload) => ({
  type: 'EDIT_USER',
  payload,
});

export const deleteUser = payload => ({
  type: 'DELETE_USER',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});
