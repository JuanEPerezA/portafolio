import React, { useState } from 'react';
import lenguaje from '../Config/lenguaje';

const Contacto = ({idioma, setIdioma}) => {
  const [asunto, setAsunto] = useState('');
  const [emisor, setEmisor] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!asunto.trim()) {
      nuevosErrores.asunto = 'El campo Asunto es requerido';
    }

    if (!emisor.trim()) {
      nuevosErrores.emisor = 'El campo Emisor es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(emisor)) {
      nuevosErrores.emisor = 'Por favor ingresa un correo electrónico válido';
    }

    if (!mensaje.trim()) {
      nuevosErrores.mensaje = 'El campo Mensaje es requerido';
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      // Aquí puedes enviar el formulario, por ejemplo, a través de una función enviarCorreo()
      console.log('Formulario enviado');
    }
  };
  return (
    <>
      <main className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px] darkMode">
          <section className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44 darkMode divIzquierda">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                <img src="./Assets/Images/J.png" className="w-[240px] absolute left-[50%] -translate-x-[50%] h-[240px] mx-auto -mt-[115px]" alt="JEPA" style={{"borderRadius": "50%"}}/>
                <div className="pt-[100px]">
                    <h2 className="mt-6 mb-1 text-[26px] font-semibold">Juan Esteban Pérez Aguas</h2>
                    <h3 className="text-[#7B7B7B] inline-block px-5 rounded-lg">{lenguaje.cargo[`${idioma}`]}</h3>
                    <section className="flex justify-center space-x-3">
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
                    <button className="dowanload-btn">
                      <img src="./Assets/Images/icons/dowanload.png" alt="icon" className="mr-2" style={{"display":"unset"}}/>
                      <a href="./Assets/CV Juan Perez.pdf" target="_blank" rel="noopener noreferrer" download="JuanPérez.pdf" style={{"color":"white"}}>{lenguaje.download_cv[`${idioma}`]}</a>
                    </button>
                </div>
            </div>
          </section>
  
          <section className="col-span-12 lg:col-span-8 darkMode divDerecha ml-div">
            <div className="bg-white lg:rounded-2xl">
              <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12"> Contact </h2>
              <div className="mx-4 md:mx-[60px] p-4 md:p-16 bg-color-810 rounded-xl mb-[30px] md:mb-[60px]">
                <h3 className="text-4xl">
                  <span className="text-gray-lite">I'm always open to discussing product</span>
                  <br />
                  <span className="font-semibold">design work or partnerships.</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">{lenguaje.asunto[`${idioma}`]} *</label>
                    <input type="text" id="asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errores.asunto && 'border-red-500'}`} />
                    {errores.asunto && <p className="text-red-500 text-xs mt-1">{errores.asunto}</p>}
                  </div>
                  <div>
                    <label htmlFor="emisor" className="block text-sm font-medium text-gray-700">{lenguaje.correo[`${idioma}`]} *</label>
                    <input type="email" id="emisor" value={emisor} onChange={(e) => setEmisor(e.target.value)} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errores.emisor && 'border-red-500'}`} />
                    {errores.emisor && <p className="text-red-500 text-xs mt-1">{errores.emisor}</p>}
                  </div> 
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">{lenguaje.mensaje[`${idioma}`]} *</label>
                    <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errores.mensaje && 'border-red-500'}`} />
                    {errores.mensaje && <p className="text-red-500 text-xs mt-1">{errores.mensaje}</p>}
                  </div>

                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >{lenguaje.enviarCorreo[`${idioma}`]}</button>
                </form>
              </div>

              <footer className="overflow-hidden rounded-b-2xl">
                <p className="text-center py-6 text-gray-lite">© 2024 {lenguaje.derechos[`${idioma}`]} Juan Pérez</p>
              </footer>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contacto;