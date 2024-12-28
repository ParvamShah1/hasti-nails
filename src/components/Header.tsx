import React from 'react';
import { Logo } from './Logo';

export const Header = () => (
  <header className="mb-12 text-center">
    <Logo />
    <h1 className="text-4xl text-gray-800 font-serif">
      Zenails
    </h1>
    <h5 className="text-gray-600 mt-1">By Hasti Shah</h5>
    
  </header>
);