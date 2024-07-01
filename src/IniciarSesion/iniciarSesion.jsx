import { useState } from "react";
import { ButtonSimple, ButtonImg } from "../components/button"
import InputSimple from "../components/input"
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../lib/validacion.js";
import { usuarios } from "../data/usuarios.js"

export default function IniciarSesion() {
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const onChangeEmail = (nuevoCorreo) => {
        if (nuevoCorreo.length >= 1) {
            setEmailError("");
        }
        setEmail(nuevoCorreo);
    };

    const onChangePassword = (nuevaContraseña) => {
        if (nuevaContraseña.length >= 1) {
            setPasswordError("");
        }
        setPassword(nuevaContraseña);
    };

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
        <section className="flex flex-col rounded-md max-lg:m-4 md:flex-row md:w-3/4 lg:w-1/2">
            <article className="flex flex-col justify-center items-center bg-white dark:text-white dark:bg-[#06064a] px-5 py-8 gap-2 md:w-1/2 transition-colors duration-300 ease-in-out">
                <h1 className="font-bold text-center uppercase text-2xl">
                    Bienvenido nuevamente a Ghaxy
                </h1>
                <img
                    className="w-1/2 aspect-square"
                    src="/logo.png"
                    alt="logo-principal"
                />
                <p className="text-center">
                    Si aún no tienes una cuenta por favor regístrate aquí.
                </p>
                <Link
                    to="/registrarCuenta"
                    className="w-full"
                >
                    <ButtonSimple
                        typeButton="button"
                        color="secondary"
                        textButton="Registrarse"
                    />
                </Link>
            </article>
            <article className="flex flex-col justify-center bg-[#0b0b25] px-5 py-8 gap-2 md:w-1/2">
                <h2 className="font-bold text-center uppercase text-white text-2xl mb-3">
                    Iniciar Sesión
                </h2>
                <form
                    className="flex flex-col gap-2"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <InputSimple
                        maxLengthInput={64}
                        textPlaceHolderInput="Correo"
                        typeInput="email"
                        onChange={onChangeEmail}
                        error={emailError}
                    />
                    <div className="mb-3 w-full">
                        <InputSimple
                            maxLengthInput={15}
                            textPlaceHolderInput="Contraseña"
                            typeInput="password"
                            onChange={onChangePassword}
                            error={passwordError}
                        />
                        <div className="flex justify-end w-full">
                            <Link
                                to="/recuperarContraseña"
                                className="flex cursor-pointer select-none underline text-gray-200 hover:text-gray-400 text-sm transition-colors duration-300 ease-in-out"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>
                    <ButtonSimple
                        typeButton="submit"
                        textButton="Ingresar"
                    />
                </form>
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
            </article>
        </section>
    )
}

