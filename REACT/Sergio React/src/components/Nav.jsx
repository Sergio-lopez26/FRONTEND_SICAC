 import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import * as bootstrap from 'bootstrap'



function Nav(){
    //Se inicializa el hook de navegación
    const navegar = useNavigate();

    const confirmar = (e) =>{
        e.preventDefault();
        const modalCerrar = document.getElementById('cSesion');
        const modalBootstrap = new bootstrap.Modal(modalCerrar);
        modalBootstrap.show();
    };

    //const => funcion adaptada a React
    const modalSalir = () =>{
            const modalCerrar = document.getElementById('cSesion');
            const modalExiste = bootstrap.Modal.getInstance(modalCerrar);
    
            if(modalExiste){
                modalExiste.hide();
            }

            navegar('/Login')
        }

    const modalNo = () =>{
        const modalCerrar = document.getElementById('cSesion');
        const modalExiste = bootstrap.Modal.getInstance(modalCerrar);

        if(modalExiste){
            modalExiste.hide();
        }
    };

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark h-lg-60" style={{ minHeight: "60px" }}>
            <div className="container-fluid h-100">
                
                <div className="navbar-brand d-flex align-items-center m-8">
                    <img id="logo" src={logo} alt="logo" style={{ maxHeight: "40px", marginRight: "10px" }}/>
                    <span className="fw-bold">SICAC</span>
                </div>
        
                 <Link to="/RegistroOdon" className="nav-link active" ><button className="btn btn-primary">Registrar Odontólogo</button></Link>
                 <Link to="/EditarOdon" className="nav-link active"><button className="btn btn-pimary">Actualizar Odontologo</button></Link>
    

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse align-items-center" id="navbarColor01">

                <ul className="navbar-nav me-auto mb-0">
                    <li className="nav-item">
                        <Link to='/Usuarios' className="nav-link active">Usuarios</Link>
                    </li>
                </ul>
                
                <form className="d-flex mb-0">
                    <input className="form-control me-2" type="search" placeholder="Buscar" style={{ backgroundColor: "rgb(248, 248, 250)", height: "38px", width: "180px" }} readOnly/>
                    <button className="btn btn-secondary text-nowrap" type="button" style={{ height: "38px", display: "flex", alignItems: "center" }}>Buscar</button>
                </form>

                <button className="btn btn-primary ms-lg-3 my-2 my-lg-0 text-nowrap border-light" style={{ height: "38px", display: "inline-flex", alignItems: "center" }} 
                onClick={confirmar}>
                Cerrar Sesión
                </button>

                </div>
            </div>
        </nav>

        <div className="modal fade" id="cSesion" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "380px"}}>
                <div className="modal-content text-center border-0 p-4" style={{borderRadius: "16px"}}>
                
                <h4 className="text-danger fw-bold mb-3">¡Cerrar Sesión!</h4>
                
                <p className="text-muted mb-4">Estimado Usuarios. ¿Desea cerrar sesión?</p>
                
                <div className="d-flex w-100 gap-3 mt-4">
                <button type="button" className="btn btn-danger w-50 py-2" id="btnSalir" style={{borderRadius: "12px"}} 
                onClick={modalSalir}>
                    Si
                </button>
                    <button type="button" className="btn btn-primary w-50 py-2" id="btnCerrar" style={{borderRadius: "12px"}} 
                    onClick={modalNo}>
                        No
                    </button>
                
                </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Nav