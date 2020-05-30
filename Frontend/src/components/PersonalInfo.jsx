import React from 'react'
import UsersMock from '../mocks/UsersMock.json'
import '../assets/styles/components/PatientData.scss'

const PersonalInfo = () => {
  return (
    <div className="Container">
    {UsersMock.map((item) => {
      return (
        <div key={item.id} className="Patient__personal_data">
          <h3>Nombres:</h3>
          <p>{item.first_name}</p>
          <h3>Apellidos:</h3>
          <p>{item.last_name}</p>
          <h3>Número de Identificación:</h3>
          <p>{item.id_number}</p>
          <h3>Usuario:</h3>
          <p>{item.username}</p>
          <h3>Correo electrónico:</h3>
          <p>{item.email}</p>
          <h3>Dirección:</h3>
          <p>{item.address}</p>
          <h3>Teléfono</h3>
          <p>{item.contact_number}</p>
        </div>
      );
    })}
    </div>
  );
}

export default PersonalInfo