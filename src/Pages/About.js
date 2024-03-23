import React from 'react';
import lenguaje from '../Config/lenguaje';
// import Navbar from '../Components/Navbar';

const About = ({idioma, setIdioma}) => {
  return (
    <>
      <div className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
          <div className="container grid grid-cols-12 md:gap-10 justify-between darkMode">
              <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44 darkMode divIzquierda">
                  <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                      <img src="./Assets/Images/J.png" className="w-[240px] absolute left-[50%] -translate-x-[50%] h-[240px] mx-auto -mt-[115px]" alt="JEPA" style={{"border-radius": "50%"}}/>
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
                                  <span className="socialbtn text-[#C17CEB] shadow-md">
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

              <div className="col-span-12 lg:col-span-8 darkMode divDerecha">
                  <div>
                      <div className="lg:rounded-2xl ">
                          <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                              <h2 className="after-effect after:left-52">{lenguaje.aboutMe[`${idioma}`]}</h2>
                              <div className="lg:hidden">
                                  <div className="w-full mb-6 lg:mb-0 mx-auto relative  text-center  px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                                      <img src="./Assets/Images/about/avatar.jpg" className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" alt="JEPA" />
                                      <div className="pt-[100px] pb-8">
                                          <h2 className="mt-6 mb-1 text-[26px] font-semibold">
                                            Juan Esteban Pérez Aguas
                                          </h2>
                                          <h3 className="mb-4 text-[#7B7B7B] inline-block  px-5 py-1.5 rounded-lg">
                                            {lenguaje.cargo[`${idioma}`]}
                                          </h3>

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

                                          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6]">
                                              <div className="flex border-b border-[#E3E3E3]  pb-2.5">
                                                  <span className="socialbtn  text-[#E93B81] shadow-md">
                                                      <i className="fa-solid fa-mobile-screen-button"></i>
                                                  </span>
                                                  <div className="text-left ml-2.5">
                                                    <p className="text-xs text-[#7B7B7B]"> {lenguaje.celular[`${idioma}`]} </p>
                                                    <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">+57 3117121720</a>
                                                  </div>
                                              </div>

                                              <div className="flex border-b border-[#E3E3E3] py-2.5">
                                                  <span className="socialbtn   text-[#6AB5B9] shadow-md">
                                                      <i className="fa-solid fa-envelope-open-text"></i>
                                                  </span>
                                                  <div className="text-left ml-2.5">
                                                    <p className="text-xs text-[#7B7B7B]"> {lenguaje.email[`${idioma}`]} </p>
                                                    <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">jepa9@hotmail.com</a>
                                                  </div>
                                              </div>

                                              <div className="flex border-b border-[#E3E3E3]  py-2.5">
                                                  <span className="socialbtn   text-[#FD7590] shadow-md">
                                                      <i className="fa-solid fa-location-dot"></i>
                                                  </span>
                                                  <div className="text-left ml-2.5">
                                                      <p className="text-xs text-[#7B7B7B]"> {lenguaje.location[`${idioma}`]} </p>
                                                      <p className="">Medellín, Colombia</p>
                                                  </div>
                                              </div>

                                              <div className="flex py-2.5">
                                                  <span className="socialbtn   text-[#C17CEB] shadow-md">
                                                      <i className="fa-solid fa-calendar-days"></i>
                                                  </span>
                                                  <div className="text-left ml-2.5">
                                                      <p className="text-xs text-[#7B7B7B]"> {lenguaje.birthday[`${idioma}`]} </p>
                                                      <p className="">09/12/1998</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <button className="dowanload-btn">
                                            <img className="mr-3" src="./Assets/Images/icons/dowanload.png" alt="icon" />
                                            {lenguaje.download_cv[`${idioma}`]}
                                          </button>
                                      </div>
                                  </div>
                              </div>

                              <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                                  <div className="col-span-12 space-y-2.5">
                                      <div className="lg:mr-16">
                                        <p className="text-[#7B7B7B] leading-7">
                                          {lenguaje.aboutMeText1[`${idioma}`]}
                                        </p>
                                        <p className="text-[#7B7B7B] leading-7 mt-2">
                                          {lenguaje.aboutMeText2[`${idioma}`]}
                                        </p>
                                      </div>
                                      <div></div>
                                  </div>
                              </div>

                          </div>

                          <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                              <h3 className="text-[35px] font-bold font-robotoSlab pb-5"> {lenguaje.queHago[`${idioma}`]}</h3>
                              <div className="grid gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
                                  <div className="about-box bg-[#fefaf0]">
                                      <img className="w-10 h-10 object-contain block" src="./Assets/Images/icons/DB.png"alt="icon"/>
                                      <div className="space-y-2">
                                        <h3 className="text-[22px] font-semibold text-[#000000]">{lenguaje.dbManagment[`${idioma}`]}</h3>
                                      </div>
                                  </div>
                                  <div className="about-box bg-[#f3faff]">
                                      <img className="w-10 h-10 object-contain block" src="./Assets/Images/icons/icon5.svg" alt="icon"/>
                                      <div className="space-y-2">
                                        <h3 className="text-[22px] font-semibold text-[#000000]">{lenguaje.backDev[`${idioma}`]}</h3>
                                      </div>
                                  </div>
                                  <div className="about-box bg-[#fefaf0]">
                                      <img className="w-10 h-10 object-contain block" src="./Assets/Images/icons/icon1.svg" alt="icon"/>
                                      <div className="space-y-2">
                                        <h3 className="text-[22px] font-semibold text-[#000000]">{lenguaje.frontDev[`${idioma}`]}</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="px-2 sm:px-5 md:px-10 lg:px-14">
                            <div className="max-w-full h-auto py-10 rounded-xl">
                              <h3 className="text-center text-6xl mb-3 font-semibold">{lenguaje.misTrabajos[`${idioma}`]}</h3>
                              <div className="grid gap-8 grid-cols-1 md:grid-cols-4 xl:grid-cols-4">
                                  <div className="about-box">
                                    <img className="w-15 h-15 object-contain block" src="./Assets/Images/icons/logoNexosColor.png"alt="nexos"/>
                                  </div>
                                  <div className="about-box">
                                    <img className="w-15 h-15 object-contain block" src="./Assets/Images/icons/logoHyGColor.png" alt="hyg"/>
                                  </div>
                                  <div className="about-box logo-mil">
                                    {/* <img className="w-15 h-15 object-contain block" src="./Assets/Images/icons/logoMille.svg" alt="mille"/> */}
                                  </div>
                                  <div className="about-box">
                                    <img className="w-15 h-15 object-contain block" src="./Assets/Images/icons/logoTrendi.png"alt="trendi"/>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <footer className="overflow-hidden rounded-b-2xl">
                            <p className="text-center py-6 text-gray-lite">© 2024 {lenguaje.derechos[`${idioma}`]} Juan Pérez</p>
                          </footer>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default About;