import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import '../assets/styles/containers/AddUser.scss';

const AddUser = () => {
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/administrator');
    switch (form.email.toLowerCase()) {
      case 'fertorresmx@gmail.com': {
        props.history.push('/administrator');
        break;
      }

      case 'PATIENT': {
        props.history.push('/patient');
        break;
      }

      default:
        props.history.push('/patient');
    }
  };

  return (
    <section className='Container'>
      <Header setRoleType='Administrador - Añadir Usuario' />
      <section className='addUser__container'>
        <form className='addUser__container__form' onSubmit={handleSubmit}>
          <div className='addUser__container__form__input'>
            <span className='selectTypeUser'>
              <p>
                Seleccionar rol del usuario
                {' '}
                {/* Traer estos valores de la BD */}
                <select name='rolName' onChange={handleInput}>
                  <option value='idRolPaciente'>Paciente</option>
                  <option value='idRolMedico'>Médico</option>
                  <option value='idRolBacteriologo'>Bacteriólogo</option>
                  <option value='idRolAdministrador'>Administrador</option>
                </select>
              </p>
            </span>

            <input
              name='idNumber'
              className='input'
              type='text'
              placeholder='No. Identificación'
              onChange={handleInput}
            />

            <input
              name='firstName'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              name='lastName'
              className='input'
              type='text'
              placeholder='Apellido'
              onChange={handleInput}
            />
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Email'
              onChange={handleInput}
            />
            <input
              name='contactNumber'
              className='input'
              type='text'
              placeholder='Núm. de contacto'
              onChange={handleInput}
            />
            <input
              name='Domicilio'
              className='input'
              type='text'
              placeholder='address'
              onChange={handleInput}
            />

            <button className='button--send' type='submit'>
              Crear Usuario
            </button>
            <Link to='/administrator'>
              <button className='button--send' type='button'>
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddUser;
