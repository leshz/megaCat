import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ExamList = (props) => {
  const { id, examName, examDescription } = props;

  return (
    <>
      <li key={id} className="Shedule__exam--item">
        <h3>Exámen</h3>
        <p>{examName}</p>
        <h3>Descripción</h3>
        <p>{examDescription}</p>
        <button className="Shedule__add--button" onSubmit={props.handleSubmit}>
          Añadir Exámen
          <i className="fas fa-plus-circle"></i>
        </button>
      </li>
    </>
  );
};

ExamList.propTypes = {
  id: PropTypes.number,
  examName: PropTypes.string,
  examDescription: PropTypes.string,
};

export default connect(null, null)(ExamList);
