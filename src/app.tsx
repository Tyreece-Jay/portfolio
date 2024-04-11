import React from 'react';
import Header from './sections/header/header';
import About from './sections/about/about';
import Skills from './sections/skills/skills';
import Experience from './sections/experience/experience';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
