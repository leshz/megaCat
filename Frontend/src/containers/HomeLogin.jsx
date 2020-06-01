/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios"
import { loginRequest } from "../actions";
import messaging from "../conf/firebase";

import logo from "../assets/static/logo.png";
import "../assets/styles/containers/Login.scss";

const Login = (props) => {

  const [form, setValues] = useState({
    username: "",
    password: ""
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://megacat-backend.herokuapp.com/api/auth/login", {}, {

      auth: {
        username: form.username,
        password: form.password
      }
    }).then(response => {
      const roles = response.data.body.user.roles || [{ name: "None" }]
      props.loginRequest({ ...response.data.body.user, token: response.data.body.token });
      if (roles[0].name !== "None") {
        props.history.push(`/${roles[0].name}`)
      }
    })
  };
  messaging.requestPermission()
    .then(() =>{
      return messaging.getToken();
    })
    .then(e => {
      console.log(e);
    })
    .catch(function (err) {
      console.log("Unable to get permission to notify.", err);
    });
  navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

  return (
    <section className="Login">
      <Link to="/">
        <figure className="Logo">
          <img src={logo} alt="Logo de Nextep" />
        </figure>
      </Link>
      <div className="Login__container">
        <h1>Bienvenidos a Nextep</h1>

        <form className="Login__container--form" onSubmit={handleSubmit}>
          <div className="Login__container--form--options">
            <input
              name="username"
              className="input"
              type="text"
              placeholder="Usuario"
              value={form.username}
              onChange={handleInput}
            />
            <span>
              <i className="fas fa-user" />
            </span>
          </div>
          <div className="Login__container--form--options">
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleInput}
            />
            <span>
              <i className="fas fa-lock" />
            </span>
          </div>
          <button className="button--send">Iniciar sesión</button>
          {/* <Link to='/administrator' className='button--send' type='submit'>
            Ingresar como admin
          </Link>
          <Link to='/patient' className='button--send' type='submit'>
            Ingresar como paciente
          </Link> */}
          <Link to="/remember">¿Has olvidado tu Usuario/Contraseña?</Link>
        </form>
        <div className="Login__container--info">
          <Link to="/">
            <span>
              <i className="fas fa-comment-alt" />
            </span>
          </Link>
          <Link to="/" className="button--send" type="submit">
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
