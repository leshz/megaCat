import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/NavbarDoctor.scss';

const NavbarDoctor = (props) => {
  return (
    <nav>
      <ul className="Patient__menu">
        <li>
          <h3>
            <NavLink to={'/personalInfo'} activeStyle={{ color: 'blue' }}>
              Datos Personales
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink to={'/medicalHistory'} activeStyle={{ color: 'green' }}>
              Historial Clínico
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink to={'/sheduleExams'} activeStyle={{ color: 'blue' }}>
              Programar estudios
            </NavLink>
          </h3>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDoctor;
