import React, { Fragment } from 'react';
import iconotipo from '../assets/static/iconotipo.png'
import logotipo from '../assets/static/logotipo.png'
import usericon from '../assets/static/circle-regular.png'
import '../assets/styles/containers/_header.scss';

const Header = () => {
    return (
    <>
        <main>
            <figure className="imagotipo">
                <img className="imagotipo__iconotipo" src={iconotipo} alt="Iconotipo de Nextep" />
                <img className="imagotipo__logotipo" src={logotipo} />      
            </figure>  
            <span className="tittle">
                <h1>Mis Resultados de Laboratorio</h1>
            </span> 
            <figure className="user-container">
                <a href="userSesion"><img className="userIcon" src={usericon} alt="User"/></a>
            </figure>      
            <span>
                <p className="patient-indication">Panel del paciente</p>
            </span>   
            <figure className="namebar">
                <p>Name user/ ID Code</p>
            </figure>  
        </main>
    </>
    );
};

export default Header;