"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
   
    emailjs
      .send(
        'service_jpnnjgc',  
        'template_n8v89z4',  
        formData,            
        'xgSW5YO9njpUexIGu'  
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccess(true);
          setError(null);   
          
         
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error('FAILED...', err);
          setError('Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.'); 
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Mensagem enviada com sucesso!</p>}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nome"
          name="name"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Mensagem"
          name="message"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          onChange={handleChange}
          value={formData.message}
        />
      </div>
      <button
        type="submit"
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded-md"
      >
        Envie uma mensagem
      </button>
    </form>
  );
};

export default ContactForm;
