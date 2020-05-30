/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import '../assets/styles/containers/_administrator.scss';
import Header from '../components/Header.jsx';
import User from './User';
import UserItem from '../components/UserItem';
import csvIcon from '../assets/static/csv-file.png';
import useInitialState from '../hooks/useInitialState';

// import '../containers/Pagination'
const API = 'http://localhost:3000/initialState/';

const Administrator = () => {
  const initialState = useInitialState(API);

  return (
      <Fragment>
      <Header />
      <div className='Container-Admin'>

        <div className='searchBox'>
          <span className='searchbar'>
          <a href="/" className="searchIcon">
          <i className='fas fa-search'/></a>
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

        <span className='check-card'>Seleccionar registro</span>

        <span>
          <p>Usted esta viendo la lista de</p>
        </span>

        <div className='addUser'>
          <span>
            <p>Agregar nuevo usuario</p>
          </span>
          <span className="iconContainer">
              <a href="/" id='iconPlus'>           
              <i className='fas fa-plus-circle'/></a>
            </span>
        </div>

          <img src={csvIcon} alt='CSVIcon' className='csvIcon' />

        <button id='button-csv' type='button'>
          Importar archivo .csv
        </button>

        <User>
          {initialState.users.map((item) => (
            <UserItem key={item.id} {...item} />
          ))}
        </User>

        <div className='cardContainer'>
          <i className='fas fa-eye' />
          <i className='fas fa-edit' />
          <i className='fas fa-times-circle' />
        </div>
      </div>
      </Fragment>

  );
};

export default Administrator;
