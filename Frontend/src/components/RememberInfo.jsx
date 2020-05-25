import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/static/logo.png'
import '../assets/styles/components/RememberInfo.scss'

const RememberInfo = () => {
  return (
    <section className="RememberInfo">
      <Link to="/">
        <figure className="Logo">
          <img src={logo} alt="Logo de Nextep" />
        </figure>
      </Link>
      <div className="RememberInfo__container">
        <h1>
          Digite su usuario, se enviará un link a su correo asociado para
          reestablecer la contraseña
        </h1>
        <form className="RememberInfo__container--form">
          <div className="RememberInfo__container--form--options">
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
          <button type="submit">Enviar correo</button>
        </form>
      </div>
    </section>
  );
}

export default RememberInfo