import './app.styles.css';
import React from 'react';
import Header from './sections/header';
import About from './sections/about';
import Skills from './sections/skills';
import ExperienceAndEducation from './sections/experienceandeducation';
import Contact from './sections/contact';
import Footer from './sections/footer';

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <ExperienceAndEducation />
      <Contact />
      <Footer />
    </div>
  );
}
