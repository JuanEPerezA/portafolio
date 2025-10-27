import React from 'react';
import lenguaje from '../Configs/lenguaje';

const PersonalData = ({ idioma, className = "divPersonalData" }) => {
  return (
    <div className={className}>
      <section className="flex border-b border-[#E3E3E3] pb-2.5">
        <span className="socialbtn mb-0 text-[#E93B81] shadow-md">
          <i className="fa-solid fa-mobile-screen-button"></i>
        </span>
        <div className="text-left ml-2.5">
          <p className="text-xs text-[#7B7B7B]">{lenguaje.celular[`${idioma}`]}</p>
          <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">+57 3117121720</a>
        </div>
      </section>
      <section className="flex border-b border-[#E3E3E3] py-2.5">
        <span className="socialbtn mb-0 text-[#6AB5B9] shadow-md">
          <i className="fa-solid fa-envelope-open-text"></i>
        </span>
        <div className="text-left ml-2.5">
          <p className="text-xs text-[#7B7B7B]">{lenguaje.email[`${idioma}`]}</p>
          <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">jepa9@hotmail.com</a>
        </div>
      </section>
      <section className="flex border-b border-[#E3E3E3] py-2.5">
        <span className="socialbtn mb-0 text-[#FD7590] shadow-md">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <div className="text-left ml-2.5">
          <p className="text-xs text-[#7B7B7B]">{lenguaje.location[`${idioma}`]}</p>
          <p className="">Medellín, Colombia</p>
        </div>
      </section>
      <section className="flex py-2.5">
        <span className="socialbtn mb-0 text-[#C17CEB] shadow-md">
          <i className="fa-solid fa-calendar-days"></i>
        </span>
        <div className="text-left ml-2.5">
          <p className="text-xs text-[#7B7B7B]">{lenguaje.birthday[`${idioma}`]}</p>
          <p className="">09/12/1998</p>
        </div>
      </section>
    </div>
  );
};

export default PersonalData;
