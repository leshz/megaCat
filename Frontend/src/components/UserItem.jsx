import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({
  id,
  idNumber,
  firstName,
  lastName,
  username,
  email,
  contactNumber,
  address,
  medicalRecord,
  isDeleted,
  createdAt,
  updatedAt,
}) => (
  <tr key={id}>
    <td>{idNumber}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{username}</td>
    <td>{email}</td>
    <td>{contactNumber}</td>
    <td>{address}</td>
    <td>{medicalRecord}</td>
    <td>{isDeleted === true ? 'Inactivo' : 'Activo'}</td>
    <td>{createdAt}</td>
    <td>{updatedAt}</td>
  </tr>
);

UserItem.propTypes = {
  id: PropTypes.string,
  idNumber: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  contactNumber: PropTypes.string,
  address: PropTypes.string,
  medicalRecord: PropTypes.string,
  isDeleted: PropTypes.bool,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
};

export default UserItem;
