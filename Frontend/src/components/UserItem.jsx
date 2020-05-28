import React from 'react';

const UserItem = ({
  id,
  firstName,
  lastName,
  username,
  email,
  contactNumber,
  address,
}) => (
  <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{username}</td>
    <td>{email}</td>
    <td>{contactNumber}</td>
    <td>{address}</td>
  </tr>
);

export default UserItem;
