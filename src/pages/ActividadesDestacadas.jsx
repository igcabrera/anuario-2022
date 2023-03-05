import React, { useState } from 'react';
import MenuActividades from '../components/actividades/MenuActividades.jsx';

import FiestasPatriasCC from '../components/actividades/FiestasPatriasCC.jsx';
import MuestraFolclorica from '../components/actividades/MuestraFolclorica.jsx';
import FiestasPatriasBrisa from '../components/actividades/FiestasPatriasBrisa.jsx';
import DiadelProfeBrisa from '../components/actividades/DiadelProfeBrisa.jsx';
import DiadelProfeCC from '../components/actividades/DiadelProfeCC.jsx';
import Aniversario111 from '../components/actividades/Aniversario111.jsx';
import AniversarioBrisa from '../components/actividades/AniversarioBrisa.jsx';
import AniversarioCC from '../components/actividades/AniversarioCC.jsx';



export default function ActividadesDestacadas() {
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);

  const handleActividadClick = (actividad) => {
    setActividadSeleccionada(actividad);
  };

  return (
    <div className="p-10">
      {actividadSeleccionada ? (
        <>
          <MenuActividades handleActividadClick={handleActividadClick} />
          <div className="mt-4">
            {actividadSeleccionada === 'fiestas-patrias-cc' ? (
              <FiestasPatriasCC />
            ) : actividadSeleccionada === 'fiestas-patrias-brisa' ? (
              <FiestasPatriasBrisa />
            ) : actividadSeleccionada === 'muestra-folclorica' ? (
                <MuestraFolclorica />
              ) : actividadSeleccionada === 'dia-del-profe-brisa' ? (
                <DiadelProfeBrisa />
              ) : actividadSeleccionada === 'aniversario-111' ? (
                <Aniversario111 />
              ): actividadSeleccionada === 'dia-del-profe-cc' ? (
                <DiadelProfeCC />
              ): actividadSeleccionada === 'aniversario-2022-cc' ? (
                <AniversarioCC />
              ): actividadSeleccionada === 'aniversario-2022-brisa' ? (
                <AniversarioBrisa />
              ): null}
          </div>
        </>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center">
          <p className="text-3xl font-bold mb-10">Selecciona una actividad para ver sus fotos</p>
          <MenuActividades handleActividadClick={handleActividadClick} />
        </div>
      )}
    </div>
  );
}
