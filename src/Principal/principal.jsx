import { Link } from "react-router-dom";
import { ButtonSimple } from "../components/button"

export default function Principal() {
    return (
        <section className="flex flex-col justify-center items-center bg-white text-black px-5 py-8 gap-2 md:w-1/2">
            <h1 className="font-bold text-center uppercase text-2xl">
                Bienvenido al menú principal de Ghaxy
            </h1>
            <img
                className="w-1/2"
                src="/logo.png"
                alt="logo-principal"
            />
            <Link
                to="/"
                className="w-full"
            >
                <ButtonSimple
                    typeButton="button"
                    textButton="Salir"
                />
            </Link>
        </section>
    )
}

