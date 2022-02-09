import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="relative">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
