import React, { useEffect } from 'react';
import lenguaje from '../Configs/lenguaje';

const Footer = ({idioma, setIdioma}) => {
   useEffect(() => {
    localStorage.setItem("idiomaNuevo", idioma);
   }, [idioma]);

   return (
      <>
      <footer className="footerPosition d-flex flex-wrap justify-content-between align-items-center border-top" style={{"padding": "4px", "bottom": "-12vh", "position": "relative"}}>
         <div className="col-lg-6 col-md-7 col-sm-12 col-12 d-flex align-items-center footer">
            © {new Date().getFullYear()} || {lenguaje.derechos[`${idioma}`]}
         </div>
         <ul className="col-lg-6 nav col-md-5 col-sm-12 col-12 footerIcons">
            <li className="ms-3">
               <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">
                  <span className="socialbtn text-[#377c4d]">
                     <i className="fa-brands fa-whatsapp"></i>
                  </span>
               </a>
            </li>
            <li className="ms-3">
               <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">
                  <span className="socialbtn text-[#6cb8d9]">
                     <i className="fa-brands fa-at"></i>
                  </span>
               </a>
            </li>
            <li className="ms-3">
               <a href="https://github.com/JuanEPerezA" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#e14a84]">
                     <i className="fa-brands fa-github"></i>
                  </span>
               </a>
            </li>
            <li className="ms-3">
               <a href="https://www.linkedin.com/in/jepa1998/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#0072b1]">
                     <i className="fa-brands fa-linkedin-in"></i>
                  </span>
               </a>
            </li>
         </ul>
      </footer>
      </>
   );
}
 
export default Footer;