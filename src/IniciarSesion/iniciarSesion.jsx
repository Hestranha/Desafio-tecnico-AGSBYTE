import { useState } from "react";
import { ButtonSimple, ButtonImg } from "../components/button"
import InputSimple from "../components/input"
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../lib/validacion.js";
import { usuarios } from "../data/usuarios.js"

export default function IniciarSesion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let error;

        setPasswordError("");
        setEmailError("");

        error = email === "" ? "Ingrese su correo" : validateEmail(email);
        setEmailError(error);
        if (error !== "") return;

        error = password === "" ? "Ingrese su contraseña" : "";
        setPasswordError(error);
        if (error !== "") return;

        const usuarioEncontrado = usuarios.find(usuario => usuario.correo === email);

        if (usuarioEncontrado) {
            if (usuarioEncontrado.contraseña === password) {
                console.log("Inicio de sesión exitoso");
                history('/principal');
            } else {
                setPasswordError("Contraseña incorrecta");
            }
        } else {
            setEmailError("Correo no registrado");
        }
    }

    return (
        <form
            className="flex flex-col rounded-md bg-white text-black gap-2 px-5 py-8 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            onSubmit={handleSubmit}
            noValidate
        >
            <h2 className="font-bold text-center text-2xl mb-3">Iniciar Sesión</h2>
            <InputSimple
                nameInput="correo"
                maxLengthInput={50}
                textPlaceHolderInput="Correo"
                typeInput="email"
                onChange={setEmail}
                error={emailError}
            />
            <div className="mb-3 w-full">
                <InputSimple
                    nameInput="contrasenia"
                    maxLengthInput={15}
                    textPlaceHolderInput="Contraseña"
                    typeInput="password"
                    onChange={setPassword}
                    error={passwordError}
                />
                <Link
                    to="/recuperarContraseña"
                    className="flex justify-end cursor-pointer select-none underline text-gray-800 hover:text-gray-950 w-full text-sm transition-colors duration-300 ease-in-out"
                >
                    ¿Olvidaste tu contraseña?
                </Link>
            </div>
            <ButtonSimple
                typeButton="submit"
                textButton="Ingresar"
            />
            <ButtonImg
                typeButton="button"
                textButton="Ingresar con Google"
                srcButtonImg="/iniciar/google-icon.svg"
                altButtonImg="google-icon"
            />
            <ButtonImg
                typeButton="button"
                textButton="Ingresar con Github"
                srcButtonImg="/iniciar/github-icon.svg"
                altButtonImg="github-icon"
            />
            <div className="flex justify-center text-gray-800 text-sm gap-1 w-full">
                <p>¿Eres nuevo aquí?</p>
                <Link
                    to="/registrarCuenta"
                    className="cursor-pointer select-none underline hover:text-gray-950 transition-colors duration-300 ease-in-out"
                >
                    Registrarse
                </Link>
            </div>
        </form>
    )
}

