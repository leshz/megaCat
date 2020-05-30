import React from 'react';

const User = ({ children }) => (
  <div className='margen'>
    <table className='tabla'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Username</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Domicilio</th>
          <th>Registro Médico</th>
          <th>Borrado?</th>
          <th>Icon 01</th>
          <th>Icon 02</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default User;
