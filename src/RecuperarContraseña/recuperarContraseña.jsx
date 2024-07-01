import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonSimple } from "../components/button"
import InputSimple from "../components/input"
import { validateEmail } from "../lib/validacion.js";
import { usuarios } from "../data/usuarios.js"

export default function RecuperarContraseña() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isFindEmail, setIsFindEmail] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let error
        setEmailError("");

        error = email === "" ? "Ingrese su correo" : validateEmail(email);
        setEmailError(error);
        if (error !== "") return;

        const usuarioEncontrado = usuarios.find(usuario => usuario.correo === email);

        if (usuarioEncontrado) {
            console.log("Correo enviado");
            setIsFindEmail(true);
        } else {
            setEmailError("Correo no encontrado");
        }
    }
    const handleRetry = () => {
        setIsFindEmail(false);
    };

    return (
        <section className="flex flex-col rounded-md max-lg:m-4 md:flex-row md:w-3/4 lg:w-1/2">
            <article className="flex flex-col bg-white dark:text-white dark:bg-[#06064a] justify-center items-center px-5 py-8 gap-2 md:w-1/2">
                <h1 className="font-bold text-center uppercase text-2xl mb-3">
                    Bienvenido nuevamente a Ghaxy
                </h1>
                <img
                    className="w-1/2"
                    src="/logo.png"
                    alt="logo-principal"
                />
                <p className="text-center">
                    Si aún no tienes una cuenta por favor registrate aquí.
                </p>
                <Link
                    to="/registrarCuenta"
                    className="w-full"
                >
                    <ButtonSimple
                        typeButton="button"
                        textButton="Registrarse"
                    />
                </Link>
            </article>
            <article className="flex flex-col justify-center bg-[#0b0b25] px-5 py-8 gap-2 md:w-1/2">
                {!isFindEmail ? (
                    <React.Fragment>
                        <form
                            className="flex flex-col gap-2"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="text-white">
                                <h2 className="font-bold text-center uppercase text-2xl mb-3">
                                    Recuperar Contraseña
                                </h2>
                                <p className="text-sm">
                                    Introduzca su correo para recibir su nueva contraseña.
                                </p>
                            </div>
                            <InputSimple
                                nameInput="correo"
                                maxLengthInput={30}
                                textPlaceHolderInput="Correo"
                                typeInput="email"
                                onChange={setEmail}
                                error={emailError}
                            />
                            <ButtonSimple
                                typeButton="submit"
                                textButton="Recuperar"
                            />
                        </form>
                        <div className="flex justify-center text-gray-200 text-sm gap-1 w-full">
                            <p>
                                ¿Recuperaste tu cuenta?
                            </p>
                            <Link
                                to="/"
                                className="cursor-pointer select-none underline hover:text-gray-400 transition-colors duration-300 ease-in-out"
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h2 className="font-bold text-center uppercase text-white text-2xl">
                            Correo enviado
                        </h2>
                        <p className="text-white text-sm">
                            Su nueva contraseña fue enviada a su correo.
                        </p>
                        <Link to="/" >
                            <ButtonSimple
                                typeButton="button"
                                textButton="Continuar"
                            />
                        </Link>
                        <div className="flex justify-center text-gray-200 text-sm gap-1 w-full">
                            <p>
                                ¿No recibiste el correo?
                            </p>
                            <button
                                className="cursor-pointer select-none underline hover:text-gray-400 transition-colors duration-300 ease-in-out"
                                onClick={handleRetry}
                            >
                                Vuelve a intentarlo
                            </button>
                        </div>
                    </React.Fragment>
                )}
            </article>
        </section>
    )
}

