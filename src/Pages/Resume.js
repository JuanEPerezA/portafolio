import React from 'react';
import lenguaje from '../Config/lenguaje';

const Resume = ({idioma, setIdioma}) => {
  return (
    <>
      <div className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
          <div className="container grid grid-cols-12 md:gap-10 justify-between darkMode">
              <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44 darkMode">
                  <div className="w-full mb-6 lg:mb-0 mx-auto relative  text-center  px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                      <img src="./Assets/Images/J.png" className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[115px]" alt="JEPA"/>
                      <div className="pt-[100px] pb-8">
                          <h2 className="mt-6 mb-1 text-[26px] font-semibold">Juan Esteban Pérez Aguas</h2>
                          <h3 className="mb-4 text-[#7B7B7B] inline-block px-5 py-1.5 rounded-lg">{lenguaje.cargo[`${idioma}`]}</h3>
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
                          <div className="p-7 rounded-2xl mt-7">
                              <div className="flex border-b border-[#E3E3E3] pb-2.5">
                                  <span className="socialbtn text-[#E93B81] shadow-md">
                                      <i className="fa-solid fa-mobile-screen-button"></i>
                                  </span>
                                  <div className="text-left ml-2.5">
                                      <p className="text-xs text-[#7B7B7B]">{lenguaje.celular[`${idioma}`]}</p>
                                      <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">+57 3117121720</a>
                                  </div>
                              </div>
                              <div className="flex border-b border-[#E3E3E3] py-2.5">
                                  <span className="socialbtn  text-[#6AB5B9] shadow-md">
                                      <i className="fa-solid fa-envelope-open-text"></i>
                                  </span>
                                  <div className="text-left ml-2.5">
                                      <p className="text-xs text-[#7B7B7B]">{lenguaje.email[`${idioma}`]}</p>
                                      <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">jepa9@hotmail.com</a>
                                  </div>
                              </div>
                              <div className="flex border-b border-[#E3E3E3] py-2.5">
                                  <span className="socialbtn  text-[#FD7590] shadow-md">
                                      <i className="fa-solid fa-location-dot"></i>
                                  </span>
                                  <div className="text-left ml-2.5">
                                      <p className="text-xs text-[#7B7B7B]">{lenguaje.location[`${idioma}`]}</p>
                                      <p className="">Medellín, Colombia</p>
                                  </div>
                              </div>
                              <div className="flex py-2.5">
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

              <div className="col-span-12 lg:col-span-8 darkMode">
                <div className="container">
                    <div className="py-12 px-4 md:px-0">
                        <h2 className="after-effect after:left-44">Resume</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <i className="fa-solid text-4xl text-[#F95054] fa-graduation-cap"></i>
                                    <h4 className="text-5xl font-medium">Education</h4>
                                </div>
                                <div className="bg-[#fff4f4] py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg">
                                    <span className="text-tiny text-[#7B7B7B] font-semibold">2021-2023</span>
                                    <h3 className="text-xl text-[#000000] font-semibold"> Ph.D in Horriblensess </h3>
                                    <p className="text-[#7B7B7B]"> ABC University, Los Angeles, CA </p>
                                </div>
                                <div className="bg-[#fff1fb] py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6">
                                    <span className="text-tiny text-[#7B7B7B] font-semibold">2019 -
                                        Present</span>
                                    <h3 className="text-xl text-[#000000] font-semibold"> Sr. Software Tester </h3>
                                    <p className="text-[#7B7B7B]">Google Inc.</p>
                                </div>
                                <div className="py-4 pl-5 bg-[#fff4f4] pr-3 space-y-2 rounded-lg">
                                    <span className="text-tiny text-[#7B7B7B] font-semibold">2021</span>
                                    <h3 className="text-xl text-[#000000] font-semibold">Best Developer</h3>
                                    <p className="text-[#7B7B7B]"> University Of Melbourne, NA </p>
                                </div>
                            </div>

                            <div>
                              <div className="flex items-center space-x-2 mb-4">
                                <i className="fa-solid text-4xl text-[#F95054] fa-briefcase"></i>
                                <h4 className="text-5xl font-medium"> Experience </h4>
                              </div>
                              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa]">
                                <span className="text-tiny text-[#7B7B7B] font-semibold">2017-2021</span>
                                <h3 className="text-xl text-[#000000] font-semibold"> Computer Science </h3>
                                <p className="text-[#7B7B7B]"> Imperialize Technical Institute </p>
                              </div>
                              <div className="bg-[#f2f4ff] py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6">
                                <span className="text-tiny text-[#7B7B7B] font-semibold">2015-2017</span>
                                <h3 className="text-xl text-[#000000] font-semibold"> Cr. Web Developer </h3>
                                <p className="text-[#7B7B7B]">ib-themes ltd.</p>
                              </div>
                              <div className="py-4 bg-[#eef5fa] pl-5 pr-3 space-y-2 rounded-lg">
                                <span className="text-tiny text-[#7B7B7B] font-semibold">2008</span>
                                <h3 className="text-xl text-[#000000] font-semibold">Best Writter</h3>
                                <p className="text-[#7B7B7B]"> Online Typodev Soluation Ltd. </p>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-12 px-2 sm:px-5 md:px-10 lg:px-20 bg-center">
                      <div className="col-span-1  bg-[#eef5fa]">
                        <h4 className="text-5xl font-medium mb-8">Knowledges </h4>
                        <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                          <button className="resume-btn">Digital Design</button>
                          <button className="resume-btn">Marketing</button>
                          <button className="resume-btn">Social Media</button>
                          <button className="resume-btn">Print</button>
                          <button className="resume-btn">Time Management</button>
                          <button className="resume-btn">Flexibility</button>
                          <button className="resume-btn">Print</button>
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