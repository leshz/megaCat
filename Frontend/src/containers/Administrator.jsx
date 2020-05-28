import React, { Fragment } from 'react';
import '../assets/styles/containers/_administrator.scss';
import csvIcon from  "../assets/static/csv-file.png";
// import '../containers/Pagination'
const Administrator = () => {

    // const [ query, setQuery ] = React.useState('');
    return (
        <Fragment>
        <main className="mainContainer">
                <div className="searchBox">
                        <input className="searchBar"
                        type="text" 
                        placeholder="Search" 
                // Me falto la interactividad de la barra de busqueda
                // value={query} 
                // onChange={(e) => {
                //   setQuery(e.target.value)
                // }} 
                        />
                        <i className="fas fa-search"></i>
                </div>
                <span className="sideBar">
                    <p className="tittle-SideBar">Cargar información de grupo</p>
                </span>
                        <div>
                            <label htmlfor="checkbox">Seleccionar registro</label>
                        </div>
                        <span className="selectTypeUser">
                            <p>Selecciona tipo de usuario
                            <select name="Selecciona tipo de usuario">
                                {/* La vista general es la vista por defecto
                                y se muestran los últimos registros sin importar el rol */}
                                <option value="Vista general">Vista general</option> 
                                <option value="Paciente<">Paciente</option> 
                                <option value="Médico">Médico</option>
                                <option value="Bacteriólogo">Bacteriólogo</option>  
                                <option value="Administrador">Administrador</option>
                            </select>
                            </p>
                            <p className="selectrOderList">Ordenar por
                        {/* Este menú da la opción de visualizar resultados 
                        se puede precindir de esta opción, si nos da tiempo la hacemos */}
                            <select name="Ordenar por">
                                <option value="11">Más reciente</option> 
                                <option value="12">Más antiguo</option> 
                            </select>
                        </p>
                        </span>

                        <span className="pagination">
                                {/* El cógigo de Paginación funciona y esta importado, llarmarlo*/}
                            <p className="addUser">Agregar nuevo usuario</p>
                            <i class="fas fa-plus-circle"></i>
                        </span>
                            {/* <script>
                                <strong>Usted esta viendo la lita de {props.roldeusuario} </strong>
                                Seguro que existe una mejor forma que 
                                document.write(document.getElementById(roldeusuario).innerHTML...
                                para indicar que tipo de listas se muestran pero si no es algo sencillo lo quitamos
                            </script> */}
                    <div className="csvIcon">
                    <img src={csvIcon} />
                    </div>
                    <button className="button-csv" type="button" >Importar archivo .csv</button>
                {/* zona de la lista de registros */}
                <div className ="cardContainer" >
                    {/* <input type="checkbox" id="cbox1" value="checkbox">  */}
                    <i class="fas fa-eye"></i>
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-times-circle"></i>
                </div>
        </main>
        </Fragment>
        );
    };

export default Administrator;