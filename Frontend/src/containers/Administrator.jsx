/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/_administrator.scss';
import Header from '../components/Header';
import User from './User';
import UserItem from '../components/UserItem';
import csvIcon from '../assets/static/csv-file.png';

// import '../containers/Pagination'

const Administrator = ({ users }) => {
  return (
    <div>
      <Header setRoleType='Administrador' />
      <div className='Container-Admin'>
        <div className='searchBox'>
          <span className='searchbar'>
            <a href='/' className='searchIcon'>
              <i className='fas fa-search' />
            </a>
            <input
              className='searchBusqueda'
              type='text'
              placeholder='Busqueda por nombre o ID'
            />
          </span>
        </div>

        <span className='sideBar'>
          <p className='tittle-SideBar'>Cargar información de grupo</p>
        </span>

        <span className='selectTypeUser'>
          <p>
            Seleccionar tipo de usuario
            <select name='Seleccionar tipo de usuario'>
              <option value='Vista general'>Vista general</option>
              <option value='Paciente<'>Paciente</option>
              <option value='Médico'>Médico</option>
              <option value='Bacteriólogo'>Bacteriólogo</option>
              <option value='Administrador'>Administrador</option>
            </select>
          </p>
        </span>

        <span className='selectrOderList'>
          <p>
            Ordenar por:
            <select name='Ordenar por'>
              <option value='11'>Más reciente</option>
              <option value='12'>Más antiguo</option>
            </select>
          </p>
        </span>

        <span className='pagination'>
          <p>Paginación</p>
        </span>

        <span className='check-card'>
          <p>
            Seleccionar registro
          </p>
          <input type='checkbox' name='chec[]' id='checkbox1' checked='' />
        </span>

        <span>
          <p>Usted esta viendo la lista de</p>
        </span>

        <div className='addUser'>
          <p>Agregar nuevo usuario</p>
          <a href='/' id='iconPlus'>
            <i className='fas fa-plus-circle' />
          </a>
        </div>

        <div className='cvsIcon__container'>
          <img src={csvIcon} alt='CSVIcon' className='csvIcon' />
        </div>

        <button id='button-csv' type='button'>
          Importar archivo .csv
        </button>

        <div className='user__section'>
          <User>
            {users.map((item) => (
              <UserItem key={item.id} {...item} />
            ))}
          </User>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(Administrator);
