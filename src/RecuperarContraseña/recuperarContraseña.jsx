import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonSimple from "../components/button"
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
        <React.Fragment>
            {!isFindEmail ? (
                <form className="flex flex-col rounded-md bg-white text-black gap-2 px-5 py-8 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div>
                        <h2 className="font-bold text-center text-2xl mb-3">Recuperar Contraseña</h2>
                        <p className="text-sm">Introduzca su correo para recibir su nueva contraseña.</p>
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
                        actionButton={handleSubmit}
                    />
                    <div className="flex justify-center text-gray-800 text-sm gap-1 w-full">
                        <p>¿Recuperaste tu cuenta?</p>
                        <Link
                            to="/"
                            className="cursor-pointer select-none underline hover:text-gray-950 transition-colors duration-300 ease-in-out"
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </form>
            ) : (
                <section className="flex flex-col rounded-md bg-white text-black gap-3 px-5 py-8 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <h2 className="font-bold text-center text-2xl">Correo enviado</h2>
                    <p className="text-sm">Su nueva contraseña fue enviada a su correo.</p>
                    <Link to="/" >
                        <ButtonSimple typeButton="button" textButton="Continuar" />
                    </Link>
                    <div className="flex justify-center text-gray-800 text-sm gap-1 w-full">
                        <p>¿No recibiste el correo?</p>
                        <button
                            className="cursor-pointer select-none underline hover:text-gray-950 transition-colors duration-300 ease-in-out"
                            onClick={handleRetry}
                        >
                            Vuelve a intentarlo
                        </button>
                    </div>
                </section>
            )}
        </React.Fragment>
    )
}

