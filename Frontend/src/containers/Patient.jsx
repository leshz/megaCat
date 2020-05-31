/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Patient.scss';
import Header from '../components/Header';
import Exam from './Exam';
import ExamItem from '../components/ExamItem';

const Patient = ({ exams }) => {

  return (
    <div>
      <Header setRoleType='Paciente' />
      <main className='mainContainer'>

        <span className='tittle__tipeuser'>
          <h2>Mis Resultados de Laboratorio</h2>
        </span>

        <span className='check-item'>Seleccionar registro</span>

        <p className='selectrOderList'>
          Ordenar por
          <select name='Ordenar por'>
            <option value='11'>Más reciente</option>
            <option value='12'>Más antiguo</option>
          </select>
        </p>

        <span className='pagination'>
          <p> 1,2,3,4,5 </p>
        </span>

        <button id='button-download' type='button'>
          <i className='fas fa-file-pdf' />
          Descargar todos los seleccionados
        </button>

        <div className='exam-container'>
          <Exam>
            {exams.map((item) => (
              <ExamItem key={item.id} {...item} />
            ))}
          </Exam>
        </div>

      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exams: state.exams,
  };
};

export default connect(mapStateToProps, null)(Patient);
