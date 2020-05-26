import React from 'react';
import { examTypes } from '../mocks/ExamMock'
import AddResultsModal from '../components/AddResultsModal'
// import Bacteriologist from './Bacteriologist';
import '../assets/styles/containers/AddExams.scss';

class AddExamsResults extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  //State Modal
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <section className="Container">
        <section className="Add__exam">
          <h1>Agregar resultados a exámenes</h1>
          <div className="Add__exam--name--patient">
            <h3></h3>
          </div>
          <div className="Add__exam--options">
            <h3>Exámen</h3>
            <h3>Descripción</h3>
            <h3>Añadir resultado</h3>
          </div>
          <ul className="Add__exam--list--cards">
            {examTypes.map(({ id, name, description }) => {
              return (
                <li key={id} className="Exam__card">
                  <p>{name}</p>
                  <p>{description}</p>
                  <button
                    className="Exam__watch--icon"
                    title="Añadir resultado"
                    onClick={this.handleOpenModal}
                  >
                    <i className="fas fa-file-medical"></i>
                  </button>
                </li>
              );
            })}
          </ul>
          <AddResultsModal
            isOpen={this.state.modalIsOpen}
            onClose={this.handleCloseModal}
            onHandleChange={this.handleChange}
            onHandleSubmit={this.handleSubmit}
          />
        </section>
      </section>
    );
  }
}

export default AddExamsResults;
