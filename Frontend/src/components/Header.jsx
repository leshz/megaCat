import React from 'react';
import iconType from '../assets/static/iconotipo.png';
import logo from '../assets/static/logotipo.png';
import userIcon from '../assets/static/circle-regular.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <div className='main-container'>
      <figure className='imagotipo'>
        <img className='iconotipo' src={iconType} alt='Iconotipo de Nextep' />
        <img className='logotipo' src={logo} alt='logotipo' />
      </figure>
      <span className='tittle-container'>
        <h1 className='tittle'>Mis Resultados de Laboratorio</h1>
      </span>
      <span className='user-container'>
        <a href='usersesion'>
          <img className='user-icon' src={userIcon} alt='User' />
        </a>
      </span>
      <span>
        <p className='patient-indication'>Panel del paciente</p>
      </span>
      <span className='namebar'>
        <p>Name user/ ID Code</p>
      </span>
    </div>
  </header>
);

export default Header;
