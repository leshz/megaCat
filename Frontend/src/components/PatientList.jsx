import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PatientList = (props) => {
  const { id, idNumber, firstName, lastName } = props;

  return (
    <>
      <li key={id} className="Patient__card">
        <p>{idNumber}</p>
        <p>
          {firstName} {lastName}
        </p>
        <Link
          to="/personalInfo"
          className="Patient__watch--icon"
          title="Ver Registro"
        >
          <span>
            <i className="fas fa-eye"></i>
          </span>
        </Link>
      </li>
    </>
  );
};

PatientList.propTypes = {
  // id: PropTypes.number,
  idNumber: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default connect(null, null)(PatientList);
