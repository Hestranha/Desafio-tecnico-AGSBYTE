import React, { useState } from "react";
import { ButtonSimple, ButtonImg } from "../components/button"
import InputSimple from "../components/input"
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../lib/validacion.js";
import { usuarios } from "../data/usuarios.js"

export default function IniciarSesion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordErrorConfirmation, setPasswordErrorConfirmation] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let error;

        setPasswordError("");
        setEmailError("");
        setPasswordErrorConfirmation("");

        error = email === "" ? "Ingrese su correo" : validateEmail(email);
        setEmailError(error);
        if (error !== "") return;

        const usuarioEncontrado = usuarios.find(usuario => usuario.correo === email);
        error = usuarioEncontrado ? "El correo ya esta registrado" : "";
        setEmailError(error);
        if (error !== "") return;

        error = password === "" ? "Ingrese su contraseña" : validatePassword(password);
        setPasswordError(error);
        if (error !== "") return;

        error = password !== passwordConfirmation ? "Las contraseñas no coinciden" : "";
        setPasswordError(error);
        setPasswordErrorConfirmation(error);
        if (error !== "") return;

        const nuevoUsuario = {
            correo: email,
            contraseña: password
        };

        usuarios.push(nuevoUsuario);
        setIsSuccess(true);
    }

    return (
        <React.Fragment>
            {!isSuccess ? (
                <form
                    className="flex flex-col rounded-md bg-white text-black gap-2 px-5 py-8 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <h2 className="font-bold text-center text-2xl mb-3">Registrarse</h2>
                    <InputSimple
                        nameInput="correo"
                        maxLengthInput={50}
                        textPlaceHolderInput="Correo"
                        typeInput="email"
                        onChange={setEmail}
                        error={emailError}
                    />
                    <div className="flex flex-col w-full gap-2">
                        <InputSimple
                            nameInput="contrasenia"
                            maxLengthInput={15}
                            textPlaceHolderInput="Contraseña"
                            typeInput="password"
                            onChange={setPassword}
                            error={passwordError}
                        />
                        <InputSimple
                            nameInput="contraseniaConfirmacion"
                            maxLengthInput={15}
                            textPlaceHolderInput="Repetir Contraseña"
                            typeInput="password"
                            onChange={setPasswordConfirmation}
                            error={passwordErrorConfirmation}
                        />
                    </div>
                    <ButtonSimple
                        typeButton="submit"
                        textButton="Crear cuenta"
                    />
                    <ButtonImg
                        typeButton="button"
                        textButton="Registrarse con Google"
                        srcButtonImg="/iniciar/google-icon.svg"
                        altButtonImg="google-icon"
                    />
                    <ButtonImg
                        typeButton="button"
                        textButton="Registrarse con Github"
                        srcButtonImg="/iniciar/github-icon.svg"
                        altButtonImg="github-icon"
                    />
                    <div className="flex justify-center text-gray-800 text-sm gap-1 w-full">
                        <p>¿Ya tienes una cuenta?</p>
                        <Link to="/" className="cursor-pointer select-none underline hover:text-gray-950 transition-colors duration-300 ease-in-out">
                            Iniciar sesión
                        </Link>
                    </div>
                </form>
            ) : (
                <section className="flex flex-col rounded-md bg-white text-black gap-3 px-5 py-8 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <h2 className="font-bold text-center text-2xl">Registro correcto</h2>
                    <p className="text-sm">Los datos se han ingresado correctamente.</p>
                    <Link to="/" >
                        <ButtonSimple
                            typeButton="button"
                            textButton="Iniciar sesión"
                        />
                    </Link>
                </section >
            )}

        </React.Fragment>
    )
}

