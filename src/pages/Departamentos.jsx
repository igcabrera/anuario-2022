import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Departamentos() {

  const { dptoName } = useParams();
  const [nombreDepartamento, setNombreDepartamento] = useState({});

  useEffect(() => {
    fetch('/data/departamentos.json')
      .then(response => response.json())
      .then(data => {
        const departamentosFilter = data.find(depa => depa.nombreDepa.toLowerCase() === dptoName.toLowerCase());
        setNombreDepartamento(departamentosFilter);
      });
    console.log(dptoName);
  }, [dptoName]);

  return (
    <div className="">
    <div className={`head-interior-${nombreDepartamento.nombreDepa} text-center uppercase text-2xl text-white flex justify-center items-center`}>
      <div>{nombreDepartamento.nombreDepa}</div>
    </div>
  
    <div className="container mx-auto mt-5 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <h2 className='text-center mt-5 mb-5 text-xl font-bold'><span className='linea'></span>CASA CENTRAL<span className='linea'></span></h2>
          <img src={nombreDepartamento.img} alt="" className="img-responsive border-4 border-blue-500" />
          <p className="text-md mt-5 text-center">{nombreDepartamento.nombresImg}</p>
        </div>
        <div className="p-4">
          <h2 className='text-center mt-5 mb-5 text-xl font-bold'><span className='linea'></span>BRISA DEL SOL<span className='linea'></span></h2>
          <img src={nombreDepartamento.img2} alt="" className="img-responsive border-4 border-blue-500" />
          <p className="text-md mt-5 text-center">{nombreDepartamento.nombresImg2}</p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Departamentos;
