import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';

import Header from '../components/Header';
import '../assets/styles/containers/AddUser.scss';

const AddUser = (props) => {

  const [form, setForm] = useState({
    rolName: '',
    idNumber: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    email: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    props.addUser(form);
    props.history.push('/administrator');
  };

  const handleChange = (event) => {
    setForm({ rolName: event.target.value });
  }

  return (
    <section className="Container">
      <Header setRoleType="Administrador - Añadir Usuario" />
      <section className="addUser__container">
        <form className="addUser__container__form" onSubmit={handleSubmit}>
          <div className="addUser__container__form__input">
            <span className="selectTypeUser">
              <p>
                Seleccionar rol del usuario
                {' '}
                {/* Traer estos valores de la BD */}
                <select name="rolName" onChange={handleChange}>
                  <option value="idRolPaciente">Paciente</option>
                  <option value="idRolMedico">Médico</option>
                  <option value="idRolBacteriologo">Bacteriólogo</option>
                  <option value="idRolAdministrador">Administrador</option>
                </select>
              </p>
            </span>

            <input
              name="idNumber"
              className="input"
              type="text"
              placeholder="No. Identificación"
              onChange={handleInput}
            />

            <input
              name="firstName"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <input
              name="lastName"
              className="input"
              type="text"
              placeholder="Apellido"
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Email"
              onChange={handleInput}
            />
            <input
              name="contactNumber"
              className="input"
              type="text"
              placeholder="Núm. de contacto"
              onChange={handleInput}
            />
            <input
              name="address"
              className="input"
              type="text"
              placeholder="address"
              onChange={handleInput}
            />

            <button className="addUser__container__button" type="button" onClick={handleSubmit}>
              Crear Usuario
            </button>
            <Link to="/administrator">
              <button className="button--send" type="button">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(AddUser);
