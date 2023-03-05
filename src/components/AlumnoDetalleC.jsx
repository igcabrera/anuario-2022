import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AlumnoDetalleC() {
  const [alumno, setAlumno] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/semblanzasC.json")
      .then((response) => response.json())
      .then((data) => {
        const alumnoEncontrado = data.find(
          (alumno) => alumno.id === parseInt(id)
        );
        setAlumno(alumnoEncontrado);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        navigate("/404");
      });
  }, [id, navigate]);

  if (!alumno) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex justify-center mb-12">
        <div className="w-full max-w-[90%]">
          <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h1 className="text-3xl font-bold mb-2">{alumno.nombre}</h1>


            <div className="xl:flex xs:flex-col justify-center gap-6">
              <img src={alumno.img} className="w-full md:w-1/2 h-full object-cover object-center object-top rounded-2xl max-h-[400px] p-3" />
              <img src={alumno.img2} className="w-full md:w-1/2 h-full object-cover object-center object-top rounded-2xl max-h-[400px] p-3" />
            </div>


            <p className="mt-4 mb-8 text-lg">{alumno.desc}</p>
            <p className="mb-2"><strong>Apodo:</strong> {alumno.apodo}</p>
            <p className="mb-2"><strong>Regalo Util:</strong> {alumno.regaloutil}</p>
            <p className="mb-2"><strong>Frase Típica:</strong> {alumno.frasetipica}</p>
            <p className="mb-2"><strong>Deseo Frustrado:</strong> {alumno.deseofrustrado}</p>
            <p className="mb-2"><strong>Conocido Por:</strong> {alumno.conocidopor}</p>
            <p className="mb-2"><strong>Hobbie:</strong> {alumno.hobbie}</p>
            <p className="mb-2"><strong>Amor Platónico:</strong> {alumno.amorplatonico}</p>
            <p className="mb-2"><strong>Vida Amorosa:</strong> {alumno.vidaamorosa}</p>
            <p className="mb-2"><strong>Mejor Talla:</strong> {alumno.mejortalla}</p>
            <Link to="/semblanzas/4c" className="mt-6 text-center block py-2 px-4 rounded-lg transition-colors mb-2 bg-secondary hover:bg-primary w-full text-white">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
