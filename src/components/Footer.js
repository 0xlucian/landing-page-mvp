import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-brand-black text-brand-white text-center py-8">
    <div className="links mb-4">
      <Link to="/privacy-policy" className="mx-2 hover:text-brand-blue">Política de Privacidade</Link>
      <Link to="/terms-of-service" className="mx-2 hover:text-brand-blue">Termos de Serviço</Link>
    </div>
  </footer>
);

export default Footer;
