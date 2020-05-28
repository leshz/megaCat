import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import '../assets/styles/containers/Login.scss';

const Login = () => {
  return (
    <section className='Login'>
      <Link to='/'>
        <figure className='Logo'>
          <img src={logo} alt='Logo de Nextep' />
        </figure>
      </Link>
      <div className='Login__container'>
        <h1>Bienvenidos a Nextep</h1>
        <form className='Login__container--form'>
          <div className='Login__container--form--options'>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Usuario'
            />
            <span>
              <i className='fas fa-user' />
            </span>
          </div>
          <div className='Login__container--form--options'>
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
            />
            <span>
              <i className='fas fa-lock' />
            </span>
          </div>
          <Link to='/administrator' className='button--send' type='submit'>
            Ingresar
          </Link>
          <Link to='/remember'>¿Has olvidado tu Usuario/Contraseña?</Link>
        </form>
        <div className='Login__container--info'>
          <Link to='/administrator'>
            <span>
              <i className='fas fa-comment-alt' />
            </span>
          </Link>
          <Link to='/header' className='button--send' type='submit'>
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
