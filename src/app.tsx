import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
