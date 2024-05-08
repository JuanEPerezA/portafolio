import React from 'react';
import lenguaje from '../Configs/lenguaje';

const Home = ({idioma, setIdioma}) => {
  return (
    <>
    <div className="flex flex-col items-center pt-[0vh] lg:pt-[10vh] h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center" style={{"justifyContent": "normal"}}>
        <img className="hidden sm:ml-6 sm:block rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]" src="./Assets/Images/J.png" alt="Avatar"/>
        <img className="sm:hidden rounded-full imgAvatarSM" src="./Assets/Images/J.png" alt="Avatar"/>
        <h3 className="hidden sm:ml-6 sm:block mt-6 mb-1 text-5xl font-semibold darkModeText text-center">Juan Esteban Pérez Aguas</h3>
        <h6 className="hidden sm:ml-6 sm:block mb-4 text-2xl text-[#7B7B7B] text-center bgText">​ㅤ{lenguaje.cargo[`${idioma}`]}​ㅤ</h6>
        <h3 className="sm:hidden mt-6 mb-0.5 text-4xl font-semibold darkModeText text-center text-SM">Juan Esteban</h3>
        <h3 className="sm:hidden mb-4 text-4xl font-semibold darkModeText text-center text-SM">Pérez Aguas</h3>
        <h6 className="sm:hidden mb-4 text-2xl text-[#7B7B7B] text-center">{lenguaje.cargo[`${idioma}`]}</h6>
        <div className="flex space-x-3">
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
        </div>
        <button className="downloadBtn" style={{"marginLeft":"1rem"}}>
            <img src="./Assets/Images/download.png" alt="icon" className="mr-2" style={{"display":"unset"}}/>
            <a href="./Assets/CV Juan Perez.pdf" target="_blank" rel="noopener noreferrer" download="JuanPérez.pdf" className='text-white'>{lenguaje.download_cv[`${idioma}`]}</a>
        </button>
    </div>
    </>
  );
}

export default Home;