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
    address
  } = props;

  const handleDeleteUser = (itemId) => {
    props.deleteUser(itemId);
  };

  return (
    <tr key={id}>
      <td>{idNumber}</td>
      <td>
        {firstName}
        {lastName}
      </td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{contactNumber}</td>
      <td>{address}</td>
      <td>
        <img
          className="user-item__details--img"
          src={editIcon}
          alt='Edit user'
        />
      </td>
      <td>
        <img
          className="user-item__details--img"
          src={deleteIcon}
          alt="Delete user"
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
};

const mapDispatchToProps = {
  editUser,
  deleteUser,
};

export default connect(null, mapDispatchToProps)(UserItem);
