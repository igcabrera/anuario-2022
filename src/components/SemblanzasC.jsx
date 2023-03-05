import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftRightLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GaleriaC from "./GaleriaC";

export default function SemblanzasA() {
  const [alumnos, setAlumnos] = useState([]);
  const [profes, setProfes] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/data/semblanzasC.json").then((response) => response.json()),
      fetch("/data/BaseProfesC.json").then((response) => response.json()),
    ]).then(([alumnosData, profesData]) => {
      setAlumnos(alumnosData);
      setProfes(profesData);
    });
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <h1
        className="font-extrabold text-center mt-10 mb-10 text-transparent uppercase text-4xl bg-clip-text bg-gradient-to-r from-primary to-green-500">
        4ºC
      </h1>

      <img
        alt="4c"
        className="block h-auto w-full rounded-2xl"
        src={`/fotos-cursos/portadas/4c.jpg`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {profes.map((profe) => (
          <div key={profe.id} className="col-span-2 md:col-span-1">

            <article className="overflow-hidden rounded-lg shadow-lg bg-white">
              <a href="#">
                <img
                  alt="Foto Profe"
                  className="block h-auto w-full"
                  src={profe.img}
                />
              </a>
              <header className="flex items-center justify-center md:p-2 sm:mt-2 xl:mt-2">
                <h1 className="text-md sm:text-[0.9em] text-center">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    {profe.nombre}
                  </a>
                </h1>
              </header>
              <footer className="p-2 flex items-center justify-center text-center">
                <Link
                  to={`/semblanzas/4c/profesor/${profe.id}`}
                  className="py-2 px-4 rounded-lg transition-colors mb-2 bg-secondary hover:bg-primary w-full text-white"
                >
                  Saber más
                </Link>
              </footer>
            </article>

          </div>))}

      </div>

      <h1
        className="font-extrabold text-center mt-10 text-transparent uppercase text-4xl bg-clip-text bg-gradient-to-r from-primary to-green-500">
        Semblanzas 4ºA
      </h1>
      <span className='flex uppercase text-sm mt-2 mb-7 item-center gap-4 justify-center'>
        Desliza para ver + Alumnos
        <RiArrowLeftRightLine className='text-secondary mt-1' />
      </span>

      <Slider {...settings}>
        {alumnos.map((alumno) => (
          <div
            key={alumno.id}
            className="my-1 px-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
          >
            <article className="overflow-hidden rounded-lg shadow-lg bg-white">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={alumno.img}
                />
              </a>
              <header className="flex items-center justify-center md:p-2 sm:mt-2 xl:mt-2">
                <h1 className="text-md sm:text-[0.9em] text-center">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    {alumno.nombre}
                  </a>
                </h1>
              </header>
              <footer className="p-2 flex items-center justify-center text-center">
                <Link
                  to={`/semblanzas/4a/${alumno.id}`}
                  className="py-2 px-4 rounded-lg transition-colors mb-2 bg-secondary hover:bg-primary w-full text-white"
                >
                  Saber más
                </Link>
              </footer>
            </article>
          </div>
        ))}
      </Slider>

      <h1
        className="font-extrabold text-center mt-10 mb-10 text-transparent uppercase text-4xl bg-clip-text bg-gradient-to-r from-primary to-green-500">
        Fotos del Recuerdo
      </h1>

      <GaleriaC />

    </div>
  );
}
