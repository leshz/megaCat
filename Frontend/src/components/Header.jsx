import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import iconotipo from '../assets/static/iconotipo.png'
import logotipo from '../assets/static/logotype.png'
import userIcon from '../assets/static/circle-regular.png'
import '../assets/styles/components/Header.scss'
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

// const Header = () => {
//     return (
//     <Fragment>
//         <main className= "header-container">
//             <figure className="imagotipo">
//                 <img className="imagotipo__iconotipo" src={iconotipo} alt="Iconotipo de Nextep" />
//                 <img className="imagotipo__logotipo" src={logotipo} />
//             </figure>
//             <span className="tittle">
//                 <h1>Mis Resultados de Laboratorio</h1>
//             </span>
//             <figure className="user-container">
//                 <a href="userSesion"><img className="userIcon" src={usericon} alt="User"/></a>
//             </figure>
//             <span>
//                 <p className="patient-indication">Panel del paciente</p>
//             </span>
//             <figure className="namebar">
//                 <p>Name user/ ID Code</p>
//             </figure>
//         </main>
//     </Fragment>
//     );
// };

const Header = (props) => {

  const { user, setRoleType } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <div className='main-container'>

        <figure className='imagotipo'>
          <Link to='/'>
            <img
              className='iconotipo'
              src={iconotipo}
              alt='Iconotipo de Netxtep'
            />
            <img
              className='logotipo'
              src={logotipo}
              alt='logotipo'
            />
          </Link>
        </figure>

        <span className='tittle-container'>
          <h1 className='tittle'>Mis Resultados de Laboratorio</h1>
        </span>

        <div className='header__menu'>
          <div className='header__menu--profile'>
            {hasUser ?
              (
                <img
                  className='user-icon'
                  src={gravatar(user.email)}
                  alt={user.email}
                />
              ) :
              (
                <img
                  className='user-icon'
                  src={userIcon}
                  alt='User Profile'
                />
              )}
            <p>Perfil</p>
          </div>

          <ul>
            {hasUser ?
              <li><a href='/'>{user.name}</a></li> :
              null }

            {hasUser ?
              (
                <li>
                  <Link to='/' onClick={handleLogout}>
                    Cerrar Sesión
                  </Link>
                </li>
              ) :
              (
                <li>
                  <Link to='/login'>
                    Iniciar Sesión
                  </Link>
                </li>
              ) }
          </ul>
        </div>

        <span>
          <p className='patient-indication'>
            Panel del
            {' '}
            {setRoleType}
          </p>
        </span>
        <span className='namebar'>
          <p>Name user/ ID Code</p>
        </span>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
