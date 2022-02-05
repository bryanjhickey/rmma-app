import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
