import React from 'react';
import lenguaje from '../Configs/lenguaje';
// import Footer from '../Components/Footer';
import DivIzq from '../Components/DivIzq';

const About = ({idioma, setIdioma}) => {
  return (
    <>
      <main className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <div className="container grid grid-cols-12 md:gap-10 justify-between darkMode">
          <DivIzq idioma={idioma} setIdioma={setIdioma}/>

          <section className="col-span-12 lg:col-span-8 darkMode divDerecha ml-div">
            <div>
              <div className="lg:rounded-2xl">
                <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                    <h2 className="lg:hidden after-effect after:left-52 container">{lenguaje.aboutMe[`${idioma}`]}</h2>
                    <h2 className="!hidden lg:!flex after-effect after:left-52 text-center">{lenguaje.aboutMe[`${idioma}`]}</h2>
                    <section className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] sm:pt-0 items-center hidden">
                      <div className="col-span-12 space-y-2.5">
                        <article className="lg:mr-16">
                          <p className="text-[#7B7B7B] leading-7">
                            {lenguaje.aboutMeText1[`${idioma}`]}
                          </p>
                          <p className="text-[#7B7B7B] leading-7 mt-2">
                            {lenguaje.aboutMeText2[`${idioma}`]}
                          </p>
                        </article>
                      </div>
                    </section>
                    <div className="lg:hidden">
                      <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                        <img src="./Assets/Images/J.png" alt="Avatar" className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" />
                        <div className="pt-[100px] pb-8">
                          <h2 className="mt-6 mb-1 text-[26px] font-semibold">
                            Juan Esteban Pérez Aguas
                          </h2>
                          <h3 className="mb-4 txtBG inline-block  px-5 py-1.5 rounded-lg">
                            {lenguaje.cargo[`${idioma}`]}
                          </h3>

                          <section className="flex justify-center space-x-3">
                            <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">
                              <span className="socialbtn text-[#377c4d]">
                                <i className="fa-brands fa-whatsapp"></i>
                              </span>
                            </a>
                            <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">
                              <span className="socialbtn text-[#6cb8d9]">
                                <i className="fa-brands fa-at"></i>
                              </span>
                            </a>
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
                          </section>

                            <section className="grid-cols-12 pb-5 pt-1 items-center">
                              <div className="col-span-12">
                                {/* <article> */}
                                  <p className="txtBG text-start">
                                    {lenguaje.aboutMeText1[`${idioma}`]}
                                  </p>
                                  <p className="txtBG text-start mt-2">
                                    {lenguaje.aboutMeText2[`${idioma}`]}
                                  </p>
                                {/* </article> */}
                              </div>
                            </section>

                          <div className="p-7 pt-0 rounded-2xl darkMode">
                              <section className="flex border-b border-[#E3E3E3]  pb-2.5">
                                <span className="socialbtn mb-0 text-[#E93B81] shadow-md">
                                  <i className="fa-solid fa-mobile-screen-button"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                  <p className="text-xs text-[#7B7B7B]"> {lenguaje.celular[`${idioma}`]} </p>
                                  <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">+57 3117121720</a>
                                </div>
                              </section>

                              <section className="flex border-b border-[#E3E3E3] py-2.5">
                                <span className="socialbtn mb-0 text-[#6AB5B9] shadow-md">
                                  <i className="fa-solid fa-envelope-open-text"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                  <p className="text-xs text-[#7B7B7B]"> {lenguaje.email[`${idioma}`]} </p>
                                  <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">jepa9@hotmail.com</a>
                                </div>
                              </section>

                              <section className="flex border-b border-[#E3E3E3]  py-2.5">
                                <span className="socialbtn mb-0 text-[#FD7590] shadow-md">
                                  <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                  <p className="text-xs text-[#7B7B7B]"> {lenguaje.location[`${idioma}`]} </p>
                                  <p className="">Medellín, Colombia</p>
                                </div>
                              </section>

                              <section className="flex py-2.5">
                                <span className="socialbtn mb-0 text-[#C17CEB] shadow-md">
                                  <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                  <p className="text-xs text-[#7B7B7B]"> {lenguaje.birthday[`${idioma}`]} </p>
                                  <p className="">09/12/1998</p>
                                </div>
                              </section>
                          </div>
                          <button className="downloadBtn">
                            <i className="fa-solid fa-download"></i>
                            ​ㅤ{lenguaje.download_cv[`${idioma}`]}
                          </button>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                    <h3 className="text-[40px] font-bold font-robotoSlab pb-5 text-center"> {lenguaje.queHago[`${idioma}`]}</h3>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
                      <section className="about-box bg-[#fefaf0]">
                        <img className="w-10 h-10 object-contain block self-center" src="./Assets/Images/DB.png"alt="icon"/>
                        <div className="space-y-2 self-center">
                          <h3 className="text-[22px] font-semibold text-[#000000]">{lenguaje.dbManagment[`${idioma}`]}</h3>
                        </div>
                      </section>
                      <section className="about-box bg-[#f3faff]">
                        <img className="w-10 h-10 object-contain block self-center" src="./Assets/Images/icon5.svg" alt="icon"/>
                        <div className="space-y-2 self-center">
                          <h3 className="text-[22px] font-semibold text-[#000000]">{lenguaje.backDev[`${idioma}`]}</h3>
                        </div>
                      </section>
                      <section className="about-box bg-[#fefaf0]">
                        <img className="w-10 h-10 object-contain block self-center" src="./Assets/Images/icon1.svg" alt="icon"/>
                        <div className="space-y-2 self-center">
                          <h3 className="text-[22px] font-semibold text-[#000000]">{lenguaje.frontDev[`${idioma}`]}</h3>
                        </div>
                      </section>
                    </div>
                </div>

                <div className="px-2 sm:px-5 md:px-10 lg:px-14">
                  <div>
                    <h3 className="text-center text-[40px] font-bold font-robotoSlab mb-3 text-center">{lenguaje.misTrabajos[`${idioma}`]}</h3>
                    <div className="grid gap-8 grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
                        <section className="about-box">
                          <img className="w-15 h-15 object-contain block" src="./Assets/Images/logoNexosColor.png"alt="nexos"/>
                        </section>
                        <section className="about-box">
                          <img className="w-15 h-15 object-contain block" src="./Assets/Images/logoHyGColor.png" alt="hyg"/>
                        </section>
                        <section className="about-box logo-mil">
                          {/* <img className="w-15 h-15 object-contain block" src="./Assets/Images/logoMille.svg" alt="mille"/> */}
                        </section>
                        <section className="about-box">
                          <img className="w-15 h-15 object-contain block" src="./Assets/Images/logoTrendi.png"alt="trendi"/>
                        </section>
                    </div>
                  </div>
                </div>

                {/* <Footer idioma={idioma} setIdioma={setIdioma}/> */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;