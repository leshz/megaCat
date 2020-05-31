import React from 'react';
import { connect } from 'react-redux';
import ExamList from '../components/ExamList';
// import { addExam } from '../actions'
import '../assets/styles/components/SheduleExams.scss';
const SheduleExams = ({ exams }) => {
  // onHandleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <section className="Container">
      {/* <div className="Add__exam--name--patient">
            <h3>/</h3>
          </div> */}
      <div className="Shedule__exam--list">
        <ul className="Shedule__exam--cards">
          {exams.map((item) => {
            return (
              <ExamList
                key={item.id}
                {...item}
                // handleSubmit={this.onHandleSubmit}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    exams: state.exams,
  };
};

export default connect(mapStateToProps, null)(SheduleExams);
