import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';

import iconType from '../assets/static/iconotipo.png';
import logo from '../assets/static/logotipo.png';
import userIcon from '../assets/static/circle-regular.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <header className='header'>
      <div className='main-container'>

        <figure className='imagotipo'>
          <Link to='/'>
            <img
              className='iconotipo'
              src={iconType}
              alt='Iconotipo de Netxtep'
            />
            <img
              className='logotipo'
              src={logo}
              alt='logotipo'
            />
          </Link>
        </figure>

        <span className='tittle-container'>
          <h1 className='tittle'>Mis Resultados de Laboratorio</h1>
        </span>

        <div className='header__menu'>
          <div className='header__menu--profile'>
            {hasUser ?
              (
                <img
                  className='user-icon'
                  src={gravatar(user.email)}
                  alt={user.email}
                />
              ) :
              (
                <img
                  className='user-icon'
                  src={userIcon}
                  alt='User Profile'
                />
              )}
            <p>Perfil</p>
          </div>

          <ul>
            <li>
              <Link to='/login'>
                Cuenta
              </Link>
            </li>
            <li>
              <Link to='/login'>
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>

        <span>
          <p className='patient-indication'>Panel del ?</p>
        </span>
        <span className='namebar'>
          <p>Name user/ ID Code</p>
        </span>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
