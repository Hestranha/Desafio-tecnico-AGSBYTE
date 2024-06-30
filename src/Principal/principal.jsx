import { Link } from "react-router-dom";
import { ButtonSimple } from "../components/button"

export default function Principal() {
    return (
        <section className="flex flex-col rounded-md bg-white text-black gap-5 px-5 py-8 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="font-bold text-center text-2xl">Bienvenido al menú principal</h2>
            <Link
                to="/"
            >
                <ButtonSimple
                    typeButton="button"
                    textButton="Salir"
                />
            </Link>
        </section>
    )
}

