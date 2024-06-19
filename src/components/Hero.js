import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <div className="hero bg-cover bg-center h-80vh flex flex-col justify-center items-center text-center text-brand-white grow" style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
    <h1 className="text-5xl font-bold">Apresentando o Futuro da Tecnologia Móvel</h1>
    <p className="text-2xl mt-4">Poder, Velocidade e Elegância em Suas Mãos</p>
    <Link to="#features" className="mt-6 px-8 py-4 bg-brand-blue text-brand-white font-semibold rounded-lg shadow-md hover:bg-brand-green">Lista de Smartphones</Link>
  </div>
);

export default Hero;