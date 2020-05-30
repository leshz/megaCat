import React from 'react';
import '../assets/styles/components/User.scss';

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
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default User;
