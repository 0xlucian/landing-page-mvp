import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-brand-black text-brand-white py-4 flex justify-between items-center">
    <div className="logo ml-4">
      <Link to="/">
        <h1 className="text-2xl font-bold text-brand-white">Smartphones</h1>
      </Link>
    </div>
    <nav className="mr-4">
      <Link to="/faqs" className="mx-2 text-brand-white hover:text-brand-blue">FAQs</Link>
      <Link to="/contact" className="mx-2 text-brand-white hover:text-brand-blue">Contate-nos</Link>
    </nav>
  </header>
);

export default Header;
