import React from 'react';
import lenguaje from '../Configs/lenguaje';
import DatosJEPA from '../Configs/datosJEPA';
import DivIzq from '../Components/DivIzq';

const Resume = ({idioma, setIdioma}) => {
  const dataJEPA = DatosJEPA(idioma);
  return (
    <>
      <div className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <div className="container grid grid-cols-12 md:gap-10 justify-between darkMode">
          <DivIzq idioma={idioma} setIdioma={setIdioma}/>

          <div className="col-span-12 lg:col-span-8 darkMode divDerecha ml-div">
            <div className="container">
              <div className="pt-12 px-4 md:px-0">
                <h2 className="after-effect after:left-44">{lenguaje.resume[`${idioma}`]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <i className="fa-solid text-4xl text-[#F95054] fa-graduation-cap"></i>
                        <h4 className="text-4xl sm:text-5xl font-medium">{lenguaje.education[`${idioma}`]}</h4>
                    </div>

                    {dataJEPA.misEstudios.map(estudio => (
                      <div key={`estudios${estudio.id}`} className={`bgLogos py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg ${estudio.imagen}`}>
                        <span className="text-tiny txtBG font-semibold">{estudio.año}</span>
                        <h3 className="text-xl darkModeText font-semibold" title={estudio.edTitulo}>{estudio.educacion}</h3>
                        <p className="txtBG">{estudio.nombre}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <i className="fa-solid text-4xl text-[#F95054] fa-briefcase"></i>
                      <h4 className="text-4xl sm:text-5xl font-medium">{lenguaje.experience[`${idioma}`]}</h4>
                    </div>

                    {dataJEPA.misTrabajos.map(trabajo => (
                      <div key={`trabajos${trabajo.id}`} className={`bgLogos py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg ${trabajo.imagen}`}>
                        <span className="text-tiny txtBG font-semibold">{trabajo.año}</span>
                        <h3 className="text-xl darkModeText font-semibold">{trabajo.puesto}</h3>
                        <p className="txtBG">{trabajo.nombre}</p>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-4 pb-2 lg:pb-0 sm:px-5 md:px-10 lg:px-20 bg-center">
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fa-solid fa-book text-4xl text-[#F95054]"></i>
                  <h4 className="text-4xl sm:text-5xl font-medium">{lenguaje.conocimientos[`${idioma}`]}</h4>
                </div>
                <div className="col-span-1 bgConocimientos text-center">
                  <div className="flex gap-y-5 gap-x-2.5 flex-wrap justify-center">
                    {dataJEPA.misConocimientos.map(conocimiento => (
                      <button key={`conocimientos${conocimiento.id}`} className="resume-btn sm:w-1/5">{conocimiento.nombre}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-12 px-4 md:px-0">
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fa-solid fa-crown text-4xl text-[#F95054]"></i>
                  <h4 className="text-4xl sm:text-5xl font-medium">{lenguaje.misProyectos[`${idioma}`]}</h4>
                </div>
                <div className="px-4 pb-2 lg:pb-0 sm:px-5 md:px-10 lg:px-20 bg-center grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
                  {dataJEPA.misProyectos.map((proyecto) => (
                  <div key={`proyecto-${proyecto.id}`} className="max-w-sm rounded overflow-hidden bgConocimientos">
                    <div className="dataProject">
                      <img src={`./Assets/Images/${proyecto.imagen}`} alt={proyecto.nombre} />
                      <div className="overlay">
                        <h3>{proyecto.nombre}</h3>
                        <div className="fila-iconos">
                          <a href={proyecto.info[0].repositorio} target="_blank" rel='noreferrer' title={proyecto.info.codigoDisponible ? lenguaje.dataGitRepo[`${idioma}`] : lenguaje.noGitRepo[`${idioma}`]}>
                            <i className="fa-brands fa-github"></i>
                          </a>
                          <a href={proyecto.info[0].linkApp} target="_blank" rel='noreferrer' title={lenguaje.verPy[`${idioma}`]}>
                            <i className="fa-solid fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-6">
                      <div className="font-bold text-2xl mb-2 text-center">{proyecto.nombre}</div>
                      <div className="lg:hidden px-6 pb-2">              
                        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 btn bg-black">
                          <a href={proyecto.info[0].repositorio} target="_blank" rel='noreferrer' title={proyecto.info.codigoDisponible ? lenguaje.dataGitRepo[`${idioma}`] : lenguaje.noGitRepo[`${idioma}`]}>
                            <i className="fa-brands fa-github text-white"></i>
                          </a>
                        </span>
                        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 btn btn-primary">
                          <a href={proyecto.info[0].linkApp} target="_blank" rel='noreferrer' title={lenguaje.verPy[`${idioma}`]}>
                            <i className="fa-solid fa-eye text-white"></i>
                          </a>
                        </span>
                      </div>
                      <p className="txtBG">
                        {proyecto.descripcion}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                    {dataJEPA.misProyectos[0].tecnologias.map((tecnologia) => (
                      <>
                        <span key={`tecnologias-sm-${tecnologia.id}`} className="lg:hidden inline-block resume-btn rounded-full px-3 py-1 text-xs font-semibold mr-1 mb-1">
                          {tecnologia.nombre}
                        </span>
                        <span key={`tecnologias-${tecnologia.id}`} className="hidden lg:inline-block resume-btn rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                          {tecnologia.icon ?
                            <button key={`tecnologia${tecnologia.id}`} className="btnTechs" title={tecnologia.nombre}>
                              <i className={tecnologia.icon}></i>
                            </button>
                          :
                            tecnologia.nombre
                          }
                        </span>
                      </>
                    ))}
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;