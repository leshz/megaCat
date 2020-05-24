import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png'
import '../assets/styles/containers/Login.scss';

const Login = () => {
  return (
    <section className="Login">
      <figure className="Logo">
        <img
          src={logo}
          alt="Logo de Nextep"
        />
      </figure>
      <div className="Login__container">
        <h1>Bienvenidos a Nextep</h1>
        <form className="Login__container--form">
          <div className="Login__container--form--options">
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Usuario"
            />
            <span>
              <i className="fas fa-user"></i>
            </span>
          </div>
          <div className="Login__container--form--options">
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
            />
            <span>
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <button className="button--send" type="submit">
            Ingresar
          </button>
          <Link to="/remember">¿Has olvidado tu Usuario/Contraseña?</Link>
        </form>
        <div className="Login__container--info">
        <Link to="/remember">
          <span>
            <i className="fas fa-comment-alt"></i>
          </span>
        </Link>
          <Link to="/">Aviso de privacidad</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;