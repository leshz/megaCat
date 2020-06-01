import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/NavbarDoctor.scss';

const NavbarDoctor = () => {
  return (
    <nav>
      <ul className="Patient__menu">
        <li>
          <h3>
            <NavLink
              to={`/personalInfo`}
              activeStyle={{ color: '#FF5C00' }}
            >
              Datos Personales
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink
              to={`/medicalHistory`}
              activeStyle={{ color: '#FF5C00' }}
            >
              Historial Clínico
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink
              to={`/sheduleExams`}
              activeStyle={{ color: '#FF5C00' }}
            >
              Programar estudios
            </NavLink>
          </h3>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDoctor;
