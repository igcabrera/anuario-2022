import React, { useState, useEffect } from 'react';
import LightBox from '../components/LightBox';

const OtrosCursos = () => {
  const [cursos, setCursos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('');

  useEffect(() => {
    fetch('/data/Cursos.json')
      .then(response => response.json())
      .then(data => {
        setCursos(data);
      })
  }, []);

  const manejarClickCategoria = (categoria) => {
    setFiltroCategoria(categoria);
  };

  return (
    <div className=" py-6 pt-10">
      <div className="container mx-auto flex justify-center p-8">
        <div className="flex flex-wrap justify-center">
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('Todos')}
          >
            Todos
          </button>
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('1BASICO')}
          >
            1º BÁSICOS
          </button>
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('2BASICO')}
          >
            2º BÁSICOS
          </button>
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('3BASICO')}
          >
            3º BÁSICOS
          </button>
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('4BASICO')}
          >
            4º BÁSICOS
          </button>
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('5BASICO')}
          >
            5º BÁSICOS
          </button>
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('6BASICO')}
          >
            6º BÁSICOS
          </button>
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('7BASICO')}
          >
            7º BÁSICOS
          </button>
          <button
            className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
            onClick={() => manejarClickCategoria('8BASICO')}
          >
            8º BÁSICOS
          </button>
          <button
          className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={() => manejarClickCategoria('KINDER')}
        >
          PRE KINDER
        </button>
        <button
        className="bg-primary text-sm hover:bg-secondary text-white font-bold py-2 px-4 rounded mr-2 mb-2"
        onClick={() => manejarClickCategoria('PREKINDER')}
      >
        KINDER
      </button>
        </div>
      </div>
      <div className="mx-auto p-10">
        <div className="flex flex-wrap -mx-4">
          {cursos
            .filter((curso) => {
              if (filtroCategoria === 'Todos') {
                return true;
              } else {
                return curso.categoria.includes(filtroCategoria);
              }
            })
            .map((curso) => (
              <div className="xl:w-1/2 md:w-1/2 w-full p-4" key={curso.id}>
                <div className="bg-white rounded-lg shadow-lg">
                  <LightBox src={curso.img} alt={curso.nombreCurso}>
                    <img className="w-full rounded-lg" src={curso.img} alt="React Logo" />
                  </LightBox>
                  <div className="p-4">
                    <h4 className="font-bold text-md mb-2">{curso.nombreCurso} - <span className='text-xs'>{curso.nombreDocente}</span></h4>
                    <p className="text-gray-700 text-xs">{curso.nombresFoto}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OtrosCursos;
