import React from 'react';
import { examTypes } from '../mocks/ExamMock';
import '../assets/styles/components/SheduleExams.scss'
class SheduleExams extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="Container">
        {/* <div className="Add__exam--name--patient">
            <h3>/</h3>
          </div> */}
        <div className="Shedule__exam--list">
          <ul className="Shedule__exam--cards">
            {examTypes.map(({ id, name, description }) => {
              return (
                <li key={id} className="Shedule__exam--item">
                  <h3>Exámen</h3>
                  <p>{name}</p>
                  <h3>Descripción</h3>
                  <p>{description}</p>
                  <button
                    className="Shedule__add--button"
                    onSubmit={this.handleSubmit}
                  >
                    Añadir Exámen
                    <i className="fas fa-plus-circle"></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default SheduleExams;
