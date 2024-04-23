import React from 'react';
import lenguaje from '../Config/lenguaje';

const Resume = ({idioma, setIdioma}) => {
  return (
    <>
      <div className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
          <div className="container grid grid-cols-12 md:gap-10 justify-between darkMode">
              <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44 darkMode divIzquierda">
                  <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                      <img src="./Assets/Images/J.png" className="w-[240px] absolute left-[50%] -translate-x-[50%] h-[240px] mx-auto -mt-[115px]" alt="JEPA" style={{"borderRadius": "50%"}}/>
                      <div className="pt-[100px]">
                          <h2 className="mt-6 mb-1 text-[26px] font-semibold">Juan Esteban Pérez Aguas</h2>
                          <h3 className="text-[#7B7B7B] inline-block px-5 rounded-lg">{lenguaje.cargo[`${idioma}`]}</h3>
                          <div className="flex justify-center space-x-3">
                            <a href="https://github.com/JuanEPerezA" target="_blank" rel="noopener noreferrer">
                                <span className="socialbtn text-[#e14a84]">
                                  <i className="fa-brands fa-github"></i>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/jepa1998/" target="_blank" rel="noopener noreferrer">
                                <span className="socialbtn text-[#0072b1]">
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </span>
                            </a>
                          </div>
                          <div className="divPersonalData">
                              <div className="flex border-b border-[#E3E3E3] pb-1">
                                  <span className="socialbtn text-[#E93B81] shadow-md">
                                      <i className="fa-solid fa-mobile-screen-button"></i>
                                  </span>
                                  <div className="text-left ml-2.5">
                                      <p className="text-xs text-[#7B7B7B]">{lenguaje.celular[`${idioma}`]}</p>
                                      <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">+57 3117121720</a>
                                  </div>
                              </div>
                              <div className="flex border-b border-[#E3E3E3] py-1">
                                  <span className="socialbtn  text-[#6AB5B9] shadow-md">
                                      <i className="fa-solid fa-envelope-open-text"></i>
                                  </span>
                                  <div className="text-left ml-2.5">
                                      <p className="text-xs text-[#7B7B7B]">{lenguaje.email[`${idioma}`]}</p>
                                      <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">jepa9@hotmail.com</a>
                                  </div>
                              </div>
                              <div className="flex border-b border-[#E3E3E3] py-1">
                                  <span className="socialbtn  text-[#FD7590] shadow-md">
                                      <i className="fa-solid fa-location-dot"></i>
                                  </span>
                                  <div className="text-left ml-2.5">
                                      <p className="text-xs text-[#7B7B7B]">{lenguaje.location[`${idioma}`]}</p>
                                      <p className="">Medellín, Colombia</p>
                                  </div>
                              </div>
                              <div className="flex py-1">
                                  <span className="socialbtn   text-[#C17CEB] shadow-md">
                                      <i className="fa-solid fa-calendar-days"></i>
                                  </span>
                                  <div className="text-left ml-2.5">
                                      <p className="text-xs text-[#7B7B7B]">{lenguaje.birthday[`${idioma}`]}</p>
                                      <p className="">09/12/1998</p>
                                  </div>
                              </div>
                          </div>
                          <button className="dowanload-btn">
                            <img src="./Assets/Images/icons/dowanload.png" alt="icon" className="mr-2" style={{"display":"unset"}}/>
                            <a href="./Assets/CV Juan Perez.pdf" target="_blank" rel="noopener noreferrer" download="JuanPérez.pdf" style={{"color":"white"}}>{lenguaje.download_cv[`${idioma}`]}</a>
                          </button>
                      </div>
                  </div>
              </div>

              <div className="col-span-12 lg:col-span-8 darkMode divDerecha ml-div">
                <div className="container">
                    <div className="pt-12 px-4 md:px-0">
                        <h2 className="after-effect after:left-44">{lenguaje.resume[`${idioma}`]}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <i className="fa-solid text-4xl text-[#F95054] fa-graduation-cap"></i>
                                    <h4 className="text-5xl font-medium">{lenguaje.education[`${idioma}`]}</h4>
                                </div>
                                <div className="bgNJP py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg">
                                    <span className="text-tiny text-[#a1a1a1] font-semibold">2009</span>
                                    <h3 className="text-xl darkModeText font-semibold">{lenguaje.primaria[`${idioma}`]}</h3>
                                    <p className="text-[#a1a1a1]">Escuela Niño Jesus de Praga</p>
                                </div>
                                <div className="bgLCGS py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6">
                                    <span className="text-tiny text-[#a1a1a1] font-semibold">2015</span>
                                    <h3 className="text-xl darkModeText font-semibold">{lenguaje.bachiller[`${idioma}`]}</h3>
                                    <p className="text-[#a1a1a1]">IE Luís Carlos Galán Sarmiento</p>
                                </div>
                                <div className="bgSena py-4 pl-5 pr-3 space-y-2 rounded-lg">
                                    <span className="text-tiny text-[#a1a1a1] font-semibold">2018</span>
                                    <h3 className="text-xl darkModeText font-semibold">{lenguaje.profesional[`${idioma}`]}</h3>
                                    <p className="text-[#a1a1a1]">SENA</p>
                                </div>
                            </div>

                            <div>
                              <div className="flex items-center space-x-2 mb-4">
                                <i className="fa-solid text-4xl text-[#F95054] fa-briefcase"></i>
                                <h4 className="text-5xl font-medium">{lenguaje.experience[`${idioma}`]}</h4>
                              </div>
                              <div className="py-4 bgNexos pl-5 pr-3 space-y-2 rounded-lg mb-6">
                                <span className="text-tiny text-[#00000094] font-semibold">02/2018 - 08/2018</span>
                                <h3 className="text-xl darkModeText font-semibold">Nexos Software S.A.S</h3>
                                <p className="text-[#00000094]">{lenguaje.expNexos[`${idioma}`]}</p>
                              </div>
                              <div className="py-4 bg-[#9dace0f5] pl-5 pr-3 space-y-2 rounded-lg mb-6">
                                <span className="text-tiny text-[#00000094] font-semibold">04/2019 – 10/2020</span>
                                <h3 className="text-xl darkModeText font-semibold">HYG Consultores S.A.S</h3>
                                <p className="text-[#00000094]">{lenguaje.desarrolladorWeb[`${idioma}`]}</p>
                              </div>
                              <div className="py-4 bg-[#fc941d73] pl-5 pr-3 space-y-2 rounded-lg mb-6">
                                <span className="text-tiny text-[#00000094] font-semibold">11/2021 – 07/2022</span>
                                <h3 className="text-xl darkModeText font-semibold">Proyectos Millennium S.A.S</h3>
                                <p className="text-[#00000094]">{lenguaje.desarrolladorWeb[`${idioma}`]}</p>
                              </div>
                              <div className="py-4 bgTrendi pl-5 pr-3 space-y-2 rounded-lg mb-6">
                                <span className="text-tiny text-[#00000094] font-semibold">07/2022 – 03/2024</span>
                                <h3 className="text-xl darkModeText font-semibold">Trendi - Trends & Innovation S.A.S</h3>
                                <p className="text-[#00000094]">{lenguaje.full[`${idioma}`]}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 pb-2 lg:pb-0 sm:px-5 md:px-10 lg:px-20 bg-center">
                      <div className="col-span-1 bgConocimientos text-center">
                        <h4 className="text-4xl font-medium mb-8">{lenguaje.conocimientos[`${idioma}`]}</h4>
                        <div className="flex gap-y-5 gap-x-2.5 flex-wrap justify-center">
                          <button className="resume-btn sm:w-1/5">PHP</button>
                          <button className="resume-btn sm:w-1/5">SLIM</button>
                          <button className="resume-btn sm:w-1/5">TWIG</button>
                          <button className="resume-btn sm:w-1/5">REACT JS</button>
                          <button className="resume-btn sm:w-1/5">GIT</button>
                          <button className="resume-btn sm:w-1/5">SQL</button>
                          <button className="resume-btn sm:w-1/5">WS</button>
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