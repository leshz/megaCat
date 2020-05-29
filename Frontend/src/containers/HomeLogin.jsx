import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import logo from '../assets/static/logo.png';
import '../assets/styles/containers/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    props.loginRequest(form);
    props.history.push('/administrator');
  };

  return (
    <section className='Login'>
      <Link to='/'>
        <figure className='Logo'>
          <img src={logo} alt='Logo de Nextep' />
        </figure>
      </Link>
      <div className='Login__container'>
        <h1>Bienvenidos a Nextep</h1>

        <form className='Login__container--form' onSubmit={handleSubmit}>
          <div className='Login__container--form--options'>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Usuario'
              onChange={handleInput}
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
              onChange={handleInput}
            />
            <span>
              <i className='fas fa-lock' />
            </span>
          </div>
          <button className='button--send' type='submit'>Iniciar sesión</button>
          <Link to='/administrator' className='button--send' type='submit'>
            Ingresar como admin
          </Link>
          <Link to='/patient' className='button--send' type='submit'>
            Ingresar como paciente
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

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
