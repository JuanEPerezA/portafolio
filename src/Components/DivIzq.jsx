import React from 'react';
import lenguaje from '../Configs/lenguaje';
import SocialLinks from './SocialLinks';
import DownloadButton from './DownloadButton';
import PersonalData from './PersonalData';

const DivIzq = ({idioma, setIdioma}) => {
   return (
      <section className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44 darkMode divIzquierda">
        <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
            <img src="./Assets/Images/J.png" className="w-[240px] absolute left-[50%] -translate-x-[50%] h-[240px] mx-auto -mt-[115px]" alt="JEPA" style={{"borderRadius": "50%"}}/>
            <div className="pt-[100px]">
                <h2 className="mt-6 mb-1 text-[26px] font-semibold">Juan Esteban Pérez Aguas</h2>
                <h3 className="text-[#7B7B7B] inline-block px-5 rounded-lg">{lenguaje.cargo[`${idioma}`]}</h3>
                <SocialLinks className="flex justify-center space-x-3" />
                <PersonalData idioma={idioma} />
                <DownloadButton idioma={idioma} />
            </div>
        </div>
      </section>
   );
}

export default DivIzq;
