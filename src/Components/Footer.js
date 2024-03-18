import React from "react";

const Footer = () => {
   return (
      <>
      <footer className="footerPosition d-flex flex-wrap justify-content-between align-items-center border-top" style={{"padding": "4px", "bottom": "-12vh", "position": "relative"}}>
         <div className="col-lg-6 col-md-7 col-sm-6 col-12 d-flex align-items-center footer-color">
            © Copyright 2024 || Todos los derechos reservados.
         </div>
         <ul className="col-lg-6 nav col-md-5 col-sm-6 col-12 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
               <a href="https://www.facebook.com/Juancho998" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#1773EA]">
                     <i className="fa-brands fa-facebook-f"></i>
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