// App.jsx
import React from 'react';
import AnimatedCursor from "react-animated-cursor";
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievemts';
import Contact from './components/Contact';
import Experience from './components/Experience';
import AnimatedSection from './components/AnimatedSection';

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#2e003e] via-[#7209b7] to-[#c72cb6] text-white p-4">
        <AnimatedCursor />
        <Nav />

        <AnimatedSection><LandingPage /></AnimatedSection>
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Experience /></AnimatedSection>
        <AnimatedSection><Services /></AnimatedSection>
        <AnimatedSection><Projects /></AnimatedSection>
        <AnimatedSection><Achievements /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </div>
    </>
  );
};

export default App;
