import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/ExamItem.scss'

const ExamItem = (props) => {

  const {
    id,
    userId,
    examDate,
    examName,
    examStatus,
  } = props;

  return (
    <tr key={id} className="exam">
      <td className="exam__id">{userId}</td>
      <td className="exam__date">{examDate}</td>
      <td className="exam__name">{examName}</td>
      <td className="exam__status">{examStatus}</td>
      <td className="exam__aviability">
        <i className="fas fa-check-square" />
      </td>
      <td className="exam__download">
        <i className="fas fa-file-pdf" />
      </td>
      <td className="exam__view">
        <i className="fas fa-eye" />
      </td>
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
