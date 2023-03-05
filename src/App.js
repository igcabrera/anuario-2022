import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SemblanzasA from "./components/SemblanzasA";
import SemblanzasB from "./components/SemblanzasB";
import SemblanzasC from "./components/SemblanzasC";
import SemblanzasD from "./components/SemblanzasD";
import LayoutHome from "./layouts/LayoutHome";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Departamentos from "./pages/Departamentos";
import AlumnoDetalleA from "./components/AlumnoDetalleA";
import AlumnoDetalleB from "./components/AlumnoDetalleB";
import AlumnoDetalleC from "./components/AlumnoDetalleC";
import AlumnoDetalleD from "./components/AlumnoDetalleD";
import ProfeDetalleA from "./components/ProfeDetalleA";
import ProfeDetalleB from "./components/ProfeDetalleB";
import ProfeDetalleC from "./components/ProfeDetalleC";
import ProfeDetalleD from "./components/ProfeDetalleD";
import ActividadesDestacadas from "./pages/ActividadesDestacadas";
import JuegosdeAgua from "./pages/JuegosdeAgua";
import PresidenteCoemtal from "./pages/PresidenteCoemtal";
import GerenteAcademico from "./pages/GerenteAcademico";
import OtrosCursos from "./pages/OtrosCursos";
import Rector from "./pages/Rector";
import Vicerrector from "./pages/Vicerrector";
import DirectorSedeBrisa from "./pages/DirectorSedeBrisa";
import JefeUTP from "./pages/JefeUTP";
import DirectorDocencia from "./pages/DirectorDocencia";
import DirectorioCoemtal from "./pages/DirectorioCoemtal";
import Licenciatura from "./pages/Licenciatura";
import JuegosAgua from "./pages/JuegosAgua";
import DirectorDocenciaBrisa from "./pages/DirectorDocenciaBrisa";
import Reconocimientos from "./pages/Reconocimientos";
import ExtraEscolar from "./pages/ExtraEscolar";
import Plantel from "./pages/Plantel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="/departamento/:dptoName" element={<Departamentos />} />
          <Route path="/semblanzas/4a" element={<SemblanzasA />} />
          <Route path="/semblanzas/4b" element={<SemblanzasB />} />
          <Route path="/semblanzas/4c" element={<SemblanzasC />} />
          <Route path="/semblanzas/4d" element={<SemblanzasD />} />
          <Route path="/semblanzas/4a/:id" element={<AlumnoDetalleA />} />
          <Route path="/semblanzas/4b/:id" element={<AlumnoDetalleB />} />
          <Route path="/semblanzas/4c/:id" element={<AlumnoDetalleC />} />
          <Route path="/semblanzas/4d/:id" element={<AlumnoDetalleD />} />
          <Route path="/semblanzas/4a/profesor/:id" element={<ProfeDetalleA />} />
          <Route path="/semblanzas/4b/profesor/:id" element={<ProfeDetalleB />} />
          <Route path="/semblanzas/4c/profesor/:id" element={<ProfeDetalleC />} />
          <Route path="/semblanzas/4d/profesor/:id" element={<ProfeDetalleD />} />
          <Route path="/actividades-destacadas" element={<ActividadesDestacadas />} />
          <Route path="/juegos-de-agua" element={<JuegosdeAgua />} />
          <Route path="/presidente-coemtal" element={<PresidenteCoemtal />} />
          <Route path="/gerente-academico" element={<GerenteAcademico />} />
          <Route path="/cursos" element={<OtrosCursos />} />
          <Route path="/rector" element={<Rector />} />
          <Route path="/vicerector" element={<Vicerrector />} />
          <Route path="/DirectorSedeBrisa" element={<DirectorSedeBrisa />} />
          <Route path="/jefeUTP" element={<JefeUTP />} />
          <Route path="/director-docencia" element={<DirectorDocencia />} />
          <Route path="/director-docencia-brisa" element={<DirectorDocenciaBrisa />} />
          <Route path="/directorio-coemtal" element={<DirectorioCoemtal />} />
          <Route path="/licenciatura-2022" element={<Licenciatura />} />
          <Route path="/Juegos-agua-2022" element={<JuegosAgua />} />
          <Route path="/reconocimientos" element={<Reconocimientos />} />
          <Route path="/extra-escolar" element={<ExtraEscolar />} />
          <Route path="/plantel" element={<Plantel />} />



        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
