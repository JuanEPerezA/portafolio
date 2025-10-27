import React, { useState, Suspense, lazy } from 'react';
import emailjs from 'emailjs-com';
import lenguaje from '../Configs/lenguaje';
import Swal from 'sweetalert2';
import Footer from '../Components/Footer';
const DivIzq = lazy(() => import('../Components/DivIzq'));

const Contacto = ({idioma, setIdioma}) => {
  const [asunto, setAsunto] = useState('');
  const [correo, setcorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    e.preventDefault();
    if (validarFormulario()) {
      setIsSubmitting(true);
      enviarCorreo();
      console.log('Formulario enviado');
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
        setIsSubmitting(false);
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: lenguaje.correoNoEnviado[`${idioma}`],
          text: error,
          showConfirmButton: true
        });
        console.error('Error al enviar el correo:', error);
        setIsSubmitting(false);
      });
  };

  function limpiarCampos() {
    setAsunto('');
    setcorreo('');
    setMensaje('');
    setErrores({});
  }

  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}>
      <main className="bg-homeBg bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <div className="container grid grid-cols-12 md:gap-10 justify-between">
          <DivIzq idioma={idioma} setIdioma={setIdioma}/>
  
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
                    <input type="text" id="asunto" name="asunto" autocomplete="off" value={asunto} onChange={(e) => setAsunto(e.target.value)} className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"/>
                    <label htmlFor="asunto" className="peer-focus:font-medium absolute text-md txtBG duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                      {errores.asunto ? (<><span>{lenguaje.asunto[`${idioma}`]}</span><span id="txtAsuntoRequerido" className='textCamposRequeridos'>{' | '}{lenguaje.asuntoRequerido[`${idioma}`]}</span></>) : (<>{lenguaje.asunto[`${idioma}`]}{' *'}</>)}
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-8 group">
                    <input type="email" id="correo" name="correo" autocomplete="off" value={correo} onChange={(e) => setcorreo(e.target.value)} className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"/>
                    <label htmlFor="correo" className="peer-focus:font-medium absolute text-md txtBG duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                      {errores.correo ? (<><span>{lenguaje.correo[`${idioma}`]}</span><span id="txtCorreoRequerido" className='textCamposRequeridos'>{' | '}{lenguaje.correoRequerido[`${idioma}`]}</span></>) : (<>{lenguaje.correo[`${idioma}`]}{' *'}</>)}
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-8 group">
                    <textarea id="mensaje" name="mensaje" autocomplete="off" value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"/>
                    <label htmlFor="mensaje" className="peer-focus:font-medium absolute text-md txtBG duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                      {errores.mensaje ? (<><span>{lenguaje.mensaje[`${idioma}`]}</span><span id="txtMensajeRequerido" className='textCamposRequeridos'>{' | '}{lenguaje.mensajeRequerido[`${idioma}`]}</span></>) : (<>{lenguaje.mensaje[`${idioma}`]}{' *'}</>)}
                    </label>
                  </div>

                  <button type="submit" id="btnSend" className={`blackButton px-6 py-2 rounded-lg border-[2px] mt-3 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent ${isSubmitting ? 'cursor-wait opacity-50' : 'cursor-pointer'}`} disabled={isSubmitting}
                  >{isSubmitting ? lenguaje.btnWaitText[`${idioma}`] : lenguaje.enviarCorreo[`${idioma}`]}</button>
                </form>
              </div>

              <Footer idioma={idioma} setIdioma={setIdioma}/>
            </div>
          </section>
        </div>
      </main>
    </Suspense>
  );
}

export default Contacto;