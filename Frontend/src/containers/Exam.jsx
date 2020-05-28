import React from 'react';

const Exam = ({ children }) => (
  <div className='margen'>
    <table className='tabla'>
      <thead>
        <tr>
          <th>Paciente-userId</th>
          <th>Fecha</th>
          <th>Nombre del exámen</th>
          <th>Status</th>
          <th>Icono1</th>
          <th>Icono2</th>
          <th>Icono3</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default Exam;
