import React from 'react';
import PropTypes from 'prop-types';

const ExamItem = ({
  id,
  userId,
  examDate,
  examName,
  examStatus,
}) => (
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

ExamItem.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.string,
  examDate: PropTypes.string,
  examName: PropTypes.string,
  examStatus: PropTypes.string
};

export default ExamItem;
