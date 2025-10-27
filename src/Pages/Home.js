import React from 'react';
import lenguaje from '../Configs/lenguaje';
import SocialLinks from '../Components/SocialLinks';
import DownloadButton from '../Components/DownloadButton';

const Home = ({idioma, setIdioma}) => {
  return (
    <>
    <div className="mainBg flex flex-col items-center pt-[0vh] lg:pt-[10vh] h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center" style={{"justifyContent": "normal"}}>
        <img className="hidden sm:ml-6 sm:block rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]" src="./Assets/Images/J.png" alt="Avatar"/>
        <img className="sm:hidden rounded-full imgAvatarSM" src="./Assets/Images/J.png" alt="Avatar"/>
        <h3 className="hidden sm:ml-6 sm:block mt-6 mb-1 text-5xl font-semibold darkModeText text-center tsTitle">Juan Esteban Pérez Aguas</h3>
        <h6 className="hidden sm:ml-6 sm:block mb-4 text-2xl text-[#7B7B7B] text-center bgText">​ㅤ{lenguaje.cargo[`${idioma}`]}​ㅤ</h6>
        <h3 className="sm:hidden mt-6 mb-0.5 text-4xl font-semibold darkModeText text-center">Juan Esteban</h3>
        <h3 className="sm:hidden mb-4 text-4xl font-semibold darkModeText text-center">Pérez Aguas</h3>
        <h6 className="sm:hidden mb-4 text-2xl text-[#7B7B7B] text-center bgText">{lenguaje.cargo[`${idioma}`]}</h6>
        <SocialLinks />
        <DownloadButton idioma={idioma} className="downloadBtn" style={{"marginLeft":"1rem"}} />
    </div>
    </>
  );
}

export default Home;
