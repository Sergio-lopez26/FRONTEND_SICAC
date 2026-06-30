import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/stylesRegistro.css'
import logo from '../assets/logo.png'

function Registro(){

    const navegar = useNavigate();

    const passwordRef = useRef();
    const validaPassRef = useRef();

    const validaContraseña = (e) =>{ //e => reemplaza a event
        e.preventDefault();
        const pass = passwordRef.current.value;
        const valida = validaPassRef.current.value;
                
        if(pass.length < 8){
            alert("La contraseña debe tener mínimo 8 caractéres");
            passwordRef.current.style.border = "2px solid red";
            return;
        }
        if (pass !== valida){
            alert("La contraseña no coincide");
            passwordRef.current.value = "";
            validaPassRef.current.value = "";
            passwordRef.current.style.border = "2px solid yellow";
            validaPassRef.current.style.border = "2px solid yellow";

            passwordRef.current.focus(); //Enfoca este input
        }
        else{
            alert("Registrado \n Usted ha sido registrado en el sistema exitosamente");
            navegar("/Login")
        }
    };

    const cancelar = () =>{
        navegar("/");
    };

    return(
        <>
        <div className="registro-page">
            <header>
                <img id="logo" src={logo} alt="Logo"/>
                <h1>Registro de Usuarios</h1>
                <p>Por favor completar los campos con sus respectivos datos</p>
            </header>

            <form id="formRegistro" onSubmit={validaContraseña}>
                <label htmlFor="tipoDocumento">Tipo de Documento
                <select id="tipoDocumento" name="tipoDocumento" required >
                    <option value="CC" selected>Cédula de Ciudadanía</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CE">Cédula de Extranjería</option>
                </select>
                </label>

                <label htmlFor="numDocumento">Número de Documento 
                <input id="numDocumento" name="numDocumento" type="text" required />
                </label>

                <label htmlFor="correo">Email
                <input type="email" name="correo" id="correo" className="form-control" style={{ border: "2px solid #d0e2ff", borderRadius: "12px" }} required/>
                </label>

                <label htmlFor="fechaNto">Fecha de Nacimiento
                <input id="fechaNto" name="fechaNto" type="date" required />
                </label>

                <label htmlFor="primerNombre">Primer Nombre 
                <input id="primerNombre" name="primerNombre" type="text" required />
                </label>

                <label htmlFor="segundoNombre">Segundo Nombre 
                <input id="segundoNombre" name="segundoNombre" type="text"/>
                </label>

                <label htmlFor="primerApellido">Primer Apellido 
                <input id="primerApellido" name="primerApellido" type="text" required />
                </label>

                <label htmlFor="segundoApellido">Segundo Apellido 
                <input id="segundoApellido" name="segundoApellido" type="text"/>
                </label>

                <label htmlFor="numCel">Número de Celular 
                <input id="numCel" name="numCel" type="tel" pattern="3[0-9]{9}" placeholder="3xxxxxxxxx" required />
                </label>

                <label htmlFor="RH">Tipo de Sangre (RH)
                <select id="RH" name="RH" required >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+" selected>O+</option>
                    <option value="O-">O-</option>
                </select>
                </label>

                {/*<label htmlFor="nombreAcudiente" className="d-block mb-3">Nombre del Acudiente
                <input type="text" name="nombreAcudiente" id="nombreAcudiente" className="form-control" style={{ border: "2px solid #d0e2ff", borderRadius: "12px" }} >
                </label>

                <label htmlFor="documentoAcudiente" className="d-block mb-3">Documento del Acudiente
                <input type="text" name="documentoAcudiente" id="documentoAcudiente" className="form-control" style={{ border: "2px solid #d0e2ff", borderRadius: "12px" }} >
                </label>*/}

                <label htmlFor="password">Contraseña
                <input id="password" ref={passwordRef} name="password" type="password" placeholder="********" required />
                </label>

                <label htmlFor="confirmarPassword">Confirmar Contraseña 
                <input id="confirmarPassword" ref={validaPassRef} name="confirmarPassword" type="password" placeholder="********" required />
                </label>

                <div className="botones">
                    <button className="btn btn-primary" type="submit" >Registrarse</button>
                    <button className="btn btn-secondary" type="button" onClick={cancelar}>Cancelar</button>
                </div>
                <div className="enlace">
                    <Link to='/Login'>¿Ya tienes cuenta?</Link>
                </div>
            </form>
        </div>
        </>
    );
}

export default Registro