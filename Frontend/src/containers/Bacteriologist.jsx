import React from 'react';
import usersMock from '../mocks/UsersMock.json';
import '../assets/styles/containers/Bacteriologist.scss';
import { Link } from 'react-router-dom';

const Bacteriologist = () => {

  const [ query, setQuery ] = React.useState('');

  return (
    <section className="Container">
      <div className="Patient--search">
        <input 
        type="text" 
        placeholder="Buscar" 
        value={query} 
        onChange={(e) => {
          setQuery(e.target.value)
        }} 
        />
        <span>
          <i className="fas fa-search"></i>
        </span>
      </div>
      <section className="Patient__list">
        <div className="Patient__list--options">
          <h3>No. Identificación</h3>
          <h3>Nombres y Apellidos</h3>
          <h3>Ver Registro</h3>
        </div>
        <div className="Patient__list--cards">
          {usersMock.map((item) => {
            return (
              <div key={item.id} className="Patient__card">
                <p>{item.id_number}</p>
                <p>
                  {item.first_name} {item.last_name}
                </p>
                <Link to="" className="Patient__watch--icon" title="Ver Registro">
                  <span>
                    <i className="fas fa-eye"></i>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Bacteriologist;
