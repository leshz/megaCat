import React from 'react';
import '../assets/styles/components/User.scss';

const User = ({ children }) => (
  <div className="margen">
    <table className="tabla">
      <thead>
        <tr>
          <th>No. Identificación</th>
          <th>Nombre y Apellidos</th>
          <th>Username</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Domicilio</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default User;
