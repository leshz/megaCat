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
          <th>Disponibilidad</th>
          <th>Descargar</th>
          <th>Visualizar</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default Exam;
