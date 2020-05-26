import React, { Fragment } from 'react';
import iconotipo from '../assets/static/iconotipo.png'
import logotipo from '../assets/static/logotipo.png'
import usericon from '../assets/static/circle-regular.png'
import '../assets/styles/containers/_header.scss';

const Header = () => {
    return (
    <Fragment>
        <div className="main-container">
            <figure className="imagotipo">
                <img className="iconotipo" src={iconotipo} alt="Iconotipo de Nextep" />
                <img className="logotipo" src={logotipo} />      
            </figure>  
            <span className="tittle-container">
                <h1 className="tittle">Mis Resultados de Laboratorio</h1>
            </span> 
            <span className="user-container">
                <a href="usersesion"><img className="user-icon" src={usericon} alt="User"/></a>
            </span>      
            <span>
                <p className="patient-indication">Panel del paciente</p>
            </span>   
            <span className="namebar">
            <p>Name user/ ID Code</p>
            </span>  
        </div>
    </Fragment>
    );
};

export default Header;