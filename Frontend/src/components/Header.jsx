import React from 'react';
import { Link } from 'react-router-dom';
import iconotipo from '../assets/static/iconotipo.png';
import logotipo from '../assets/static/logotipo.png';
import usericon from '../assets/static/circle-regular.png';
import '../assets/styles/components/_header.scss';

const Header = () => {
  return (
    <div className="main-container">
      <Link to="/">
        <figure className="imagotipo">
          <img
            className="iconotipo"
            src={iconotipo}
            alt="Iconotipo de Nextep"
          />
          <img className="logotipo" src={logotipo} />
        </figure>
      </Link>
      <span className="tittle-container">
        <h1 className="tittle"></h1>
      </span>
      <span className="user-container">
        <a href="usersesion">
          <img className="user-icon" src={usericon} alt="User" />
        </a>
      </span>
      <span>
        <p className="patient-indication"></p>
      </span>
      {/* <span className="namebar">
          <p></p>
        </span> */}
    </div>
  );
};

export default Header;
