import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import lenguaje from '../Configs/lenguaje';
import Swal from 'sweetalert2';
import $ from 'jquery';
import Footer from '../Components/Footer';

const Contacto = ({idioma, setIdioma}) => {
  const [asunto, setAsunto] = useState('');
  const [correo, setcorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!asunto.trim()) {
      nuevosErrores.asunto = lenguaje.asuntoRequerido[`${idioma}`];
    }

    if (!correo.trim()) {
      nuevosErrores.correo = lenguaje.correoRequerido[`${idioma}`];
    } else if (!/^\S+@\S+\.\S+$/.test(correo)) {
      nuevosErrores.correo = lenguaje.correoNoValido[`${idioma}`];
    }

    if (!mensaje.trim()) {
      nuevosErrores.mensaje = lenguaje.mensajeRequerido[`${idioma}`];
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    $("#btnSend").css("cursor", "wait");
    $("#btnSend").attr('disabled', 'disabled');
    $("#btnSend").html(lenguaje.btnWaitText[`${idioma}`]);
    e.preventDefault();
    if (validarFormulario()) {
      enviarCorreo();
      console.log('Formulario enviado');
    } else {
      $("#btnSend").removeAttr('disabled')
      $("#btnSend").css("cursor", "pointer");
      $("#btnSend").html(lenguaje.enviarCorreo[`${idioma}`]);
    }
  };

  const enviarCorreo = () => {
    const templateParams = {
      asunto: asunto,
      correo: correo,
      mensaje: mensaje
    };

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID_EMAILJS)
      .then((response) => {
        console.log('Correo enviado con éxito!', response.status, response.text);
        Swal.fire({
          icon: "success",
          title: lenguaje.correoEnviado[`${idioma}`],
          showConfirmButton: false,
          timer: 2000
        });
        limpiarCampos();
        $("#btnSend").removeAttr('disabled');
        $("#btnSend").css("cursor", "pointer");
        $("#btnSend").html(lenguaje.enviarCorreo[`${idioma}`]);
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: lenguaje.correoNoEnviado[`${idioma}`],
          text: error,
          showConfirmButton: true
        });
        console.error('Error al enviar el correo:', error);
        $("#btnSend").removeAttr('disabled');
        $("#btnSend").css("cursor", "pointer");
        $("#btnSend").html(lenguaje.enviarCorreo[`${idioma}`]);
      });
  };
  
  function limpiarCampos() {
    setAsunto('');
    setcorreo('');
    setMensaje('');
    setErrores({});
  }

  return (
    <>
      <main className="bg-homeBg bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <div className="container grid grid-cols-12 md:gap-10 justify-between">
          <section className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44 divIzquierda">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                <img src="./Assets/Images/J.png" className="w-[240px] absolute left-[50%] -translate-x-[50%] h-[240px] mx-auto -mt-[115px]" alt="JEPA" style={{"borderRadius": "50%"}}/>
                <div className="pt-[100px]">
                    <h2 className="mt-6 mb-1 text-[26px] font-semibold">Juan Esteban Pérez Aguas</h2>
                    <h3 className="text-[#7B7B7B] inline-block px-5 rounded-lg">{lenguaje.cargo[`${idioma}`]}</h3>
                    <section className="flex justify-center space-x-3">
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
                      <a href="./Assets/CV Juan Perez.pdf" target="_blank" rel="noopener noreferrer" download="JuanPérez.pdf" className='text-white'>{lenguaje.download_cv[`${idioma}`]}</a>
                    </button>
                </div>
            </div>
          </section>
  
          <section className="col-span-12 lg:col-span-8 divDerecha ml-div">
            <div className="lg:rounded-2xl">
              <h2 className="after-effect after:left-64 after:top-[76px] mb-[16px] md:mb-[20px] pl-4 pt-12">{lenguaje.contactMe[`${idioma}`]}</h2>
              <div className="mx-4 md:mx-[60px] rounded-xl">
                <h3 className="text-3xl">
                  <span className="text-gray-lite">{lenguaje.contactMeText1[`${idioma}`]}</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <section style={{"padding":"2% 0 2% 0"}}>
                    <span className='textCamposRequeridos'>{lenguaje.camposRequeridos1[`${idioma}`]}</span>
                  </section>

                  <div className="relative z-0 w-full mb-8 group">
                    <input type="text" id="asunto" name="asunto" autocomplete="off" value={asunto} onChange={(e) => setAsunto(e.target.value)} className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"/>
                    <label htmlFor="asunto" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                      {errores.asunto ? (<><span>{lenguaje.asunto[`${idioma}`]}</span><span id="txtAsuntoRequerido" className='textCamposRequeridos'>{' | '}{lenguaje.asuntoRequerido[`${idioma}`]}</span></>) : (<>{lenguaje.asunto[`${idioma}`]}{' *'}</>)}
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-8 group">
                    <input type="email" id="correo" name="correo" autocomplete="off" value={correo} onChange={(e) => setcorreo(e.target.value)} className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"/>
                    <label htmlFor="correo" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                      {errores.correo ? (<><span>{lenguaje.correo[`${idioma}`]}</span><span id="txtCorreoRequerido" className='textCamposRequeridos'>{' | '}{lenguaje.correoRequerido[`${idioma}`]}</span></>) : (<>{lenguaje.correo[`${idioma}`]}{' *'}</>)}
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-8 group">
                    <textarea id="mensaje" name="mensaje" autocomplete="off" value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"/>
                    <label htmlFor="mensaje" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                      {errores.mensaje ? (<><span>{lenguaje.mensaje[`${idioma}`]}</span><span id="txtMensajeRequerido" className='textCamposRequeridos'>{' | '}{lenguaje.mensajeRequerido[`${idioma}`]}</span></>) : (<>{lenguaje.mensaje[`${idioma}`]}{' *'}</>)}
                    </label>
                  </div>

                  <button type="submit" id="btnSend" className="blackButton px-6 py-2 rounded-lg border-[2px] mt-3 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent"
                  >{lenguaje.enviarCorreo[`${idioma}`]}</button>
                </form>
              </div>

              <Footer idioma={idioma} setIdioma={setIdioma}/>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contacto;