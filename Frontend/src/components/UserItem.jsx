import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import deleteIcon from '../assets/static/delete-user.png';
import editIcon from '../assets/static/edit-user.png';
import { editUser, deleteUser } from '../actions/index';

const UserItem = (props) => {

  const {
    id,
    idNumber,
    firstName,
    lastName,
    username,
    email,
    contactNumber,
    address,
    medicalRecord,
    isDeleted
  } = props;

  const handleEditUser = (itemId) => {
    props.editUser({
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
    });
  };

  const handleDeleteUser = (itemId) => {
    props.deleteUser(itemId);
  };

  return (
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
      <td>
        <img
          className='user-item__details--img'
          src={editIcon}
          alt='Edit user'
          onClick={handleEditUser(id)}
        />
      </td>
      <td>
        <img
          className='user-item__details--img'
          src={deleteIcon}
          alt='Delete user'
          onClick={() => handleDeleteUser(id)}
        />
      </td>
    </tr>
  );
};

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
};

const mapDispatchToProps = {
  editUser,
  deleteUser,
};

export default connect(null, mapDispatchToProps)(UserItem);
