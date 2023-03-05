import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { RiHome3Fill, RiArrowDownSLine, RiMenuLine, RiArrowDropRightFill, RiCloseLine, RiArrowDropRightLine } from "react-icons/ri";

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showSubMenu, setshowSubMenu] = useState(false)
    const [showSubMenuDepa, setshowSubMenuDepa] = useState(false)
    const [showSubMenuAdmin, setshowSubMenuAdmin] = useState(false)

    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            <div className={`bg-white xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[50%] lg:w-[40%] xl:w-auto h-full top-0 z-50 ${showSidebar ? "left-0" : "-left-full"} transition-all`}>

                <div>
                <div className='flex items-center mx-auto align-middle'>   
                <img
                        alt="Etchegoyen"
                        className="block h-auto w-1/2 mx-auto py-4 px-6 pb-8"
                        src={`/img/logo.png`}
                    />
                    </div>
                    <ul>
                        <li>
                            <Link to="/" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiHome3Fill  className='text-primary' /> Inicio
                            </Link>
                        </li>
                        <li>
                        <Link to="/licenciatura-2022/" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                            <RiArrowDropRightLine className='text-primary' /> Licenciatura
                        </Link>
                    </li>
                    <li>
                    <Link to="/reconocimientos/" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                        <RiArrowDropRightLine className='text-primary' /> Reconocimientos
                    </Link>
                </li>

                        <button onClick={() => setshowSubMenu(!showSubMenu)} to="/" className='flex justify-between items-center w-full gap-4 py-2 px-4 rounded-lg transition-colors hover:bg-gray-100 hover:text-primary'>
                            <span className='flex item-center gap-4'>
                                <RiArrowDropRightLine className='text-primary mt-1' />
                                Semblanzas
                            </span>
                            <RiArrowDownSLine className={`mt-1 ${showSubMenu && "rotate-90"} transition-all`} />
                        </button>
                        <ul
                            className={` ${showSubMenu ? "h-[150px]" : "h-0"
                                } overflow-y-hidden transition-all`}
                        >
                            <li>
                                <Link to="/semblanzas/4a"
                                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white">
                                    4º A
                                </Link>
                            </li>
                            <li>
                                <Link to="/semblanzas/4b"
                                    className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    4º B
                                </Link>
                            </li>
                            <li>
                                <Link to="/semblanzas/4c"
                                    className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    4º C
                                </Link>
                            </li>
                            <li>
                                <Link to="/semblanzas/4d"
                                    className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    4º D
                                </Link>
                            </li>
                        </ul>
                        <button onClick={() => setshowSubMenuDepa(!showSubMenuDepa)} to="/" className='flex justify-between items-center w-full gap-4 py-2 px-4 rounded-lg transition-colors hover:bg-gray-100 hover:text-primary'>
                            <span className='flex item-center gap-4'>
                                <RiArrowDropRightLine className='text-primary mt-1' />
                                Departamentos
                            </span>
                            <RiArrowDownSLine className={`mt-1 ${showSubMenuDepa && "rotate-90"} transition-all`} />
                        </button>
                        <ul
                            className={` ${showSubMenuDepa ? "h-[370px]" : "h-0"
                                } overflow-y-hidden transition-all`}
                        >

                            <li>
                                <a onClick={() => navigate("/departamento/nivel-parvulario")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Parvulario
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/departamento/nivel-basico")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Básico
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/departamento/lenguaje")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Lenguaje
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/departamento/matematica")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Matemática
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/departamento/historia-filosofia")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Historia y Filosofía
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/departamento/ciencias-tecnologia")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Ciencias y Tecnología
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/departamento/ingles")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Ingles
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/departamento/educacion-fisica")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Educación Física
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/departamento/artes")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Artes
                                </a>
                            </li>

                        </ul>
                        <li>
                            <Link to="/cursos" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiArrowDropRightLine className='text-primary' /> Cursos
                            </Link>
                        </li>
                        <li>
                            <Link to="/actividades-destacadas" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiArrowDropRightLine className='text-primary' /> Actividades Destacadas
                            </Link>
                        </li>
                        <li>
                            <Link to="/Juegos-agua-2022" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiArrowDropRightLine className='text-primary' /> Juegos de Agua
                            </Link>
                        </li>
                        <button onClick={() => setshowSubMenuAdmin(!showSubMenuAdmin)} to="/" className='flex justify-between items-center w-full gap-4 py-2 px-4 rounded-lg transition-colors hover:bg-gray-100 hover:text-primary'>
                            <span className='flex item-center gap-4'>
                                <RiArrowDropRightLine className='text-primary mt-1' />
                                Administrativos
                            </span>
                            <RiArrowDownSLine className={`mt-1 ${showSubMenuAdmin && "rotate-90"} transition-all`} />
                        </button>
                        <ul
                            className={` ${showSubMenuAdmin ? "h-[400px]" : "h-0"
                                } overflow-y-hidden transition-all`}
                        >

                            <li>
                                <a onClick={() => navigate("/presidente-coemtal")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Presidente Coemtal
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/directorio-coemtal/")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Directorio Coemtal
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/gerente-academico")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Gerente Académico
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/rector")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Rector
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/vicerector")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Vicerector Académico
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/DirectorSedeBrisa")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Director Sede Brisa del Sol
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/jefeUTP")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Jefe UTP
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/director-docencia")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Director de Docencia
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/director-docencia-brisa")}
                                    className='cursor-pointer py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-black hover:before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white'>
                                    Director de Docencia Brisa del Sol
                                </a>
                            </li>

                        </ul>
                        <li>
                            <Link to="/" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiArrowDropRightLine className='text-primary' /> Equipo Directivo y Gestión
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiArrowDropRightLine className='text-primary' /> Colegio
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiArrowDropRightLine className='text-primary' /> Coordinadores
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiArrowDropRightLine className='text-primary' /> Centro Padres / Estudiantes
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                                <RiArrowDropRightLine className='text-primary' /> Coemtal
                            </Link>
                        </li>
                        <li>
                        <Link to="/plantel" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                            <RiArrowDropRightLine className='text-primary' /> Plantel
                        </Link>
                    </li>
                    <li>
                    <Link to="/extra-escolar" className='flex items-center hover:bg-gray-100 hover:text-primary gap-4 py-2 px-4 rounded-lg transition-colors'>
                        <RiArrowDropRightLine className='text-primary' /> ExtraEscolar
                    </Link>
                </li>

                    </ul>
                </div>




            </div>
            <button onClick={() => setShowSidebar(!showSidebar)} className='xl:hidden fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full z-50'>
                {showSidebar ? <RiCloseLine className='w-8 h-8' /> : <RiMenuLine className='w-8 h-8' />}
            </button>
        </>
    )
}
