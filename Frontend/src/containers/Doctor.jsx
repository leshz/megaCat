import React from 'react';
import { Link } from 'react-router-dom';
import usersMock from '../mocks/UsersMock.json';
import '../assets/styles/containers/PatientList.scss';

class Doctor extends React.Component {
  state = {
    search: '',
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;

    const filteredUsers = usersMock.filter((item) => {
      return (
        `${item.id_number} ${item.first_name} ${item.last_name}`
          .toLowerCase()
          .indexOf(search.toLowerCase()) !== -1
      );
    });


    return (
      <section className="Container">
        <div className="Name--template">
          <h1>Listado de Pacientes</h1>
        </div>
        <div className="Patient--search">
          <input type="text" placeholder="Buscar" onChange={this.onChange} />
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
        <section className="Patient__list">
          <div className="Patient__list--options">
            <h3>No. Identificación</h3>
            <h3>Nombres y Apellidos</h3>
            <h3>Ver registro de paciente</h3>
          </div>
          <ul className="Patient__list--cards">
            {filteredUsers.map((item) => {
              return (
                <li key={item.id} className="Patient__card">
                  <p>{item.id_number}</p>
                  <p>
                    {item.first_name} {item.last_name}
                  </p>
                  <Link
                    to={`/personalInfo/${item.id}`}
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
    );
  }
}

export default Doctor;
