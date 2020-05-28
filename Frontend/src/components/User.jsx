import React from 'react';

const User = ({ children }) => (
  <div className='margen'>
    <table className='tabla'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Username</th>
          <th>Email</th>
          <th>Tel</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default User;
