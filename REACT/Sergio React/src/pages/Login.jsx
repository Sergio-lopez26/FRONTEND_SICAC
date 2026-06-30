import { useRef } from "react"; //capturar datos de forma limpia
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/stylesLogin.css'
import logo from '../assets/logo.png'

function Login(){

    const navegar = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const validaContraseña = (e) =>{ //e => reemplaza a event
        e.preventDefault();
        const pass = passwordRef.current.value;
                
        if(pass.length < 8){
            alert("La contraseña debe tener mínimo 8 caractéres");
            passwordRef.current.style.border = "2px solid red";
            return;
        }
        else{
            alert("Credenciales Validadas \n Usted ha ingresado al sistema exitosamente");

            emailRef.current.value = "";
            passwordRef.current.value = "";

            navegar("/Usuarios");
        }
    };

    const cancelar = () =>{
        navegar("/");
    };

    return(
        <>
        <div className="login-page">
            <header>
                <img id="logo" src={logo} alt="Logo"/>
                <h1>Iniciar Sesión</h1>
                <p>Por favor completar los campos con sus respectivos datos</p>
            </header>

            <form id="formLogin" onSubmit={validaContraseña}> {/*en vez de action="" method="" */}
                <label htmlFor="email">Email 
                <input id="email" ref={emailRef} name="email" type="email" required />
                </label>
                <label htmlFor="password">Contraseña
                <input id="password" ref={passwordRef} name="password" type="password" placeholder="********" required />
                </label>

                <div className="botones">
                <button type="submit">Ingresar</button>
     <button
  type="button"
  onClick={() => navegar("/Registro")}
>
   Registrarse
</button>
                </div>

                <div className="enlace">
                    <Link to='/RecuperarPass'>¿Olvidó su contraseña?</Link>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login