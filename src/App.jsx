import IniciarSesion from "./IniciarSesion/iniciarSesion";
import RecuperarContraseña from "./RecuperarContraseña/recuperarContraseña";
import RegistrarCuenta from "./Registrar/registrarCuenta";
import Principal from "./Principal/principal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IniciarSesion />} />
          <Route path="/recuperarContraseña" element={<RecuperarContraseña />} />
          <Route path="/registrarCuenta" element={<RegistrarCuenta />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
