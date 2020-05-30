import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ExamItem = (props) => {

  const {
    id,
    userId,
    examDate,
    examName,
    examStatus,
  } = props;

  return (
    <tr key={id}>
      <td>{userId}</td>
      <td>{examDate}</td>
      <td>{examName}</td>
      <td>{examStatus}</td>
      <td>icono1</td>
      <td>icono2</td>
      <td>icono3</td>
    </tr>
  );
};

ExamItem.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.string,
  examDate: PropTypes.string,
  examName: PropTypes.string,
  examStatus: PropTypes.string
};

export default connect(null, null)(ExamItem);
