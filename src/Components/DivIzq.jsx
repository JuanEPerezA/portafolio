import React from 'react';
import lenguaje from '../Configs/lenguaje';

const DivIzq = ({idioma, setIdioma}) => {
   return (
      <section className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44 darkMode divIzquierda">
        <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
            <img src="./Assets/Images/J.png" className="w-[240px] absolute left-[50%] -translate-x-[50%] h-[240px] mx-auto -mt-[115px]" alt="JEPA" style={{"borderRadius": "50%"}}/>
            <div className="pt-[100px]">
                <h2 className="mt-6 mb-1 text-[26px] font-semibold">Juan Esteban Pérez Aguas</h2>
                <h3 className="text-[#7B7B7B] inline-block px-5 rounded-lg">{lenguaje.cargo[`${idioma}`]}</h3>
                <section className="flex justify-center space-x-3">
                  <a href="https://api.whatsapp.com/send?phone=573117121720" data-testid="whatsapp-link" target="_blank" rel="noopener noreferrer" className="alink">
                    <span className="socialbtn text-[#377c4d]">
                      <i className="fa-brands fa-whatsapp"></i>
                    </span>
                  </a>
                  <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">
                    <span className="socialbtn text-[#6cb8d9]">
                      <i className="fa-brands fa-at"></i>
                    </span>
                  </a>
                  <a href="https://github.com/JuanEPerezA" data-testid="github-link" target="_blank" rel="noopener noreferrer">
                    <span className="socialbtn text-[#e14a84]">
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/jepa1998/" data-testid="linkedin-link" target="_blank" rel="noopener noreferrer">
                    <span className="socialbtn text-[#0072b1]">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </span>
                  </a>
                </section>
                <div className="divPersonalData">
                    <section className="flex border-b border-[#E3E3E3] pb-1">
                      <span className="socialbtn text-[#E93B81] shadow-md">
                          <i className="fa-solid fa-mobile-screen-button"></i>
                      </span>
                      <div className="text-left ml-2.5">
                          <p className="text-xs text-[#7B7B7B]">{lenguaje.celular[`${idioma}`]}</p>
                          <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">+57 3117121720</a>
                      </div>
                    </section>
                    <section className="flex border-b border-[#E3E3E3] py-1">
                      <span className="socialbtn  text-[#6AB5B9] shadow-md">
                          <i className="fa-solid fa-envelope-open-text"></i>
                      </span>
                      <div className="text-left ml-2.5">
                          <p className="text-xs text-[#7B7B7B]">{lenguaje.email[`${idioma}`]}</p>
                          <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">jepa9@hotmail.com</a>
                      </div>
                    </section>
                    <section className="flex border-b border-[#E3E3E3] py-1">
                      <span className="socialbtn  text-[#FD7590] shadow-md">
                          <i className="fa-solid fa-location-dot"></i>
                      </span>
                      <div className="text-left ml-2.5">
                          <p className="text-xs text-[#7B7B7B]">{lenguaje.location[`${idioma}`]}</p>
                          <p className="">Medellín, Colombia</p>
                      </div>
                    </section>
                    <section className="flex py-1">
                      <span className="socialbtn text-[#C17CEB] shadow-md">
                          <i className="fa-solid fa-calendar-days"></i>
                      </span>
                      <div className="text-left ml-2.5">
                          <p className="text-xs text-[#7B7B7B]">{lenguaje.birthday[`${idioma}`]}</p>
                          <p className="">09/12/1998</p>
                      </div>
                    </section>
                </div>
                <button className="downloadBtn">
                  <img src="./Assets/Images/download.png" alt="icon" className="mr-2" style={{"display":"unset"}}/>
                  <a href={idioma == 'EN' ? "./Assets/CV Juan Perez.pdf" : "./Assets/HV Juan Perez.pdf"} target="_blank" rel="noopener noreferrer" download="JuanPérez.pdf" className='text-white'>{lenguaje.download_cv[`${idioma}`]}</a>
                </button>
            </div>
        </div>
      </section>
   );
}
 
export default DivIzq;