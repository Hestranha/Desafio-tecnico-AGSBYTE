import React, { useState } from "react";
import { ButtonSimple, ButtonImg } from "../components/button"
import InputSimple from "../components/input"
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../lib/validacion.js";
import { usuarios } from "../data/usuarios.js"

export default function IniciarSesion() {
    const history = useNavigate();

    const [nuevoUsuario, setNuevoUsuario] = useState({});

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordErrorConfirmation, setPasswordErrorConfirmation] = useState("");
    const [isValidateEmail, setIsValidateEmail] = useState(false);

    const [code, setCode] = useState(0);
    const [codeError, setCodeError] = useState("");
    const [codeConfirmation, setCodeConfirmation] = useState(0);

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

        setNuevoUsuario({
            correo: email,
            contraseña: password
        })

        const codigoGenerado = Math.floor(100000 + Math.random() * 900000);
        console.log(codigoGenerado);
        setCode(codigoGenerado);

        setIsValidateEmail(true);
    }

    const handleNewCode = () => {
        const codigoGenerado = Math.floor(100000 + Math.random() * 900000);
        console.log(codigoGenerado);
        setCode(codigoGenerado);
    }

    const handleConfirmation = (e) => {
        e.preventDefault();
        let error;

        setCodeError("");
        error = codeConfirmation == "" ? "Ingrese su código" : (code != codeConfirmation ? "Código incorrecto" : "");
        setCodeError(error);
        if (error !== "") return;

        usuarios.push(nuevoUsuario);
        history('/principal');
    }

    return (
        <section className="flex flex-col rounded-md w-full max-lg:m-4 md:flex-row md:w-3/4 lg:w-1/2">
            <article className="flex flex-col justify-center bg-[#1413b5] text-black px-5 py-8 gap-2 md:w-1/2">
                {!isValidateEmail ? (
                    <React.Fragment>
                        <form
                            className="flex flex-col gap-2"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <h2 className="font-bold text-center uppercase text-white text-2xl mb-3">
                                Registrarse
                            </h2>
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

                        </form>
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
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h2 className="font-bold text-center uppercase text-white text-2xl">
                            Completa tu registro
                        </h2>
                        <p className="text-white text-sm">
                            El código de verificación fue enviado a su correo.
                        </p>
                        <form
                            className="flex flex-col gap-2"
                            onSubmit={handleConfirmation}
                            noValidate
                        >
                            <InputSimple
                                nameInput="code"
                                textPlaceHolderInput="Ingrese el código"
                                typeInput="number"
                                onChange={setCodeConfirmation}
                                error={codeError}
                            />
                            <ButtonSimple
                                typeButton="submit"
                                textButton="Continuar"
                            />
                        </form>
                        <div className="flex justify-center text-gray-200 text-sm gap-1 w-full">
                            <p>
                                ¿No recibiste el código?
                            </p>
                            <button
                                className="cursor-pointer select-none underline hover:text-gray-400 transition-colors duration-300 ease-in-out"
                                onClick={handleNewCode}
                            >
                                Reenviar
                            </button>
                        </div>
                    </React.Fragment>
                )}

            </article>
            <article className="flex flex-col bg-white justify-center items-center text-black px-5 py-8 gap-2 max-md:order-first md:w-1/2">
                <h1 className="font-bold text-center uppercase text-2xl mb-3">
                    Comienza y disfruta de Ghaxy
                </h1>
                <img
                    className="w-1/2"
                    src="/logo.png"
                    alt="logo-principal"
                />
                <p className="text-center">
                    Si ya tienes una cuenta por favor ingresa desde aquí.
                </p>
                <Link
                    to="/"
                    className="w-full"
                >
                    <ButtonSimple
                        typeButton="button"
                        textButton="Iniciar sesión"
                    />
                </Link>
            </article>
        </section>
    )
}

