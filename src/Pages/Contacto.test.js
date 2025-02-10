import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import lenguaje from '../Configs/lenguaje';
import Swal from 'sweetalert2';
import $ from 'jquery';

const ContactoTest = ({ idioma, setIdioma, enviarCorreo }) => {
  const [asunto, setAsunto] = useState('');
  const [correo, setcorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      enviarCorreo(); // ✅ Ahora usa la función pasada como prop
    }} data-testid="formulario">
      <section style={{ "padding": "2% 0 2% 0" }}>
        <span className='textCamposRequeridos'>{lenguaje.camposRequeridos1[`${idioma}`]}</span>
      </section>

      <div className="relative z-0 w-full mb-8 group">
        <input type="text" id="asunto" name="asunto" autoComplete="off" value={asunto} onChange={(e) => setAsunto(e.target.value)} className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"/>
        <label htmlFor="asunto" className="peer-focus:font-medium absolute text-md txtBG duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
          {errores.asunto ? (<><span>{lenguaje.asunto[`${idioma}`]}</span><span id="txtAsuntoRequerido" className='textCamposRequeridos'>{' | '}{lenguaje.asuntoRequerido[`${idioma}`]}</span></>) : (<>{lenguaje.asunto[`${idioma}`]}{' *'}</>)}
        </label>
      </div>

      <button type="submit" id="btnSend" className="blackButton px-6 py-2 rounded-lg border-[2px] mt-3 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent">
        Enviar Correo
      </button>
    </form>
  );
}

export default ContactoTest;
