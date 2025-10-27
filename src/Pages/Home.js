import React, { Suspense, lazy } from 'react';
import lenguaje from '../Configs/lenguaje';
const SocialLinks = lazy(() => import('../Components/SocialLinks'));
const DownloadButton = lazy(() => import('../Components/DownloadButton'));

const Home = ({idioma, setIdioma}) => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}>
      <div className="mainBg flex flex-col items-center pt-[0vh] lg:pt-[10vh] h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center px-4" style={{"justifyContent": "normal"}}>
          <img className="hidden sm:ml-6 sm:block rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]" src="./Assets/Images/J.png" alt="Avatar"/>
          <img className="sm:hidden rounded-full imgAvatarSM" src="./Assets/Images/J.png" alt="Avatar"/>
          <h3 className="hidden sm:ml-6 sm:block mt-6 mb-1 text-3xl md:text-4xl lg:text-5xl font-semibold darkModeText text-center tsTitle">Juan Esteban Pérez Aguas</h3>
          <h6 className="hidden sm:ml-6 sm:block mb-4 text-lg md:text-xl lg:text-2xl text-[#7B7B7B] text-center bgText">​ㅤ{lenguaje.cargo[`${idioma}`]}​ㅤ</h6>
          <h3 className="sm:hidden mt-6 mb-0.5 text-2xl md:text-3xl lg:text-4xl font-semibold darkModeText text-center">Juan Esteban</h3>
          <h3 className="sm:hidden mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold darkModeText text-center">Pérez Aguas</h3>
          <h6 className="sm:hidden mb-4 text-lg md:text-xl lg:text-2xl text-[#7B7B7B] text-center bgText">{lenguaje.cargo[`${idioma}`]}</h6>
          <SocialLinks />
          <DownloadButton idioma={idioma} className="downloadBtn" style={{"marginLeft":"1rem"}} />
      </div>
    </Suspense>
  );
}

export default Home;
