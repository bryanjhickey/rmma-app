import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div dir="ltr">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
