import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import usersMock from '../mocks/UsersMock.json';
import '../assets/styles/containers/PatientList.scss';

class Bacteriologist extends React.Component {
  state = {
    search: '',
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;

    const filteredUsersMock = usersMock.filter(item => {
      return (
        `${item.id_number} ${item.first_name} ${item.last_name}`
          .toLowerCase()
          .indexOf(search.toLowerCase()) !== -1
      );
    });

      return (
        <>
        <Header/>
        <section className="Container">
          <div className="Patient--search">
            <input 
            type="text" 
            placeholder="Buscar" 
            onChange={this.onChange} />
            <span>
              <i className="fas fa-search"></i>
            </span>
          </div>
          <section className="Patient__list">
            <div className="Patient__list--options">
              <h3>No. Identificación</h3>
              <h3>Nombres y Apellidos</h3>
              <h3>Ver Registro de Exámenes</h3>
            </div>
            <ul className="Patient__list--cards">
              {filteredUsersMock.map((item) => {
                return (
                  <li key={item.id} className="Patient__card">
                    <p>{item.id_number}</p>
                    <p>
                      {item.first_name} {item.last_name}
                    </p>
                    <Link
                      to="/addExamResults"
                      className="Patient__watch--icon"
                      title="Ver Registro"
                    >
                      <span>
                        <i className="fas fa-eye"></i>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </section>
        </> 
      );
  }
}

export default Bacteriologist;
