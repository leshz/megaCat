import React from 'react';
import { connect } from 'react-redux';
import PatientList from '../components/PatientList';
import '../assets/styles/containers/PatientList.scss';

const Doctor = ({ users }) => {
  // state = {
  //   search: '',
  // };

  // onChange = (e) => {
  //   this.setState({ search: e.target.value });
  // };
  // const { search } = this.state;

  // const filteredUsers = usersMock.filter((item) => {
  //   return (
  //     `${item.id_number} ${item.first_name} ${item.last_name}`
  //       .toLowerCase()
  //       .indexOf(search.toLowerCase()) !== -1
  //   );
  // });

  return (
    <>
      <section className="Container">
        <div className="Name--template">
          <h1>Listado de Pacientes</h1>
        </div>
        <div className="Patient--search">
          <input
            type="text"
            placeholder="Buscar"
            // onChange={handleChange}
            // onChange={this.onChange}
          />
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
            {users.map((item) => {
              return <PatientList key={item.id} {...item} />;
            })}
          </ul>
        </section>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(Doctor);
