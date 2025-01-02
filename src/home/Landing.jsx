import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Services from './Services';
import TechStack from './TechStack';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function Landing() {
  return (
    <div>
      <Navbar />
      <section id="hero">
      <Hero />
      </section>
      <section id="services">
      <Services/>
      </section>
      <TechStack/>
      <section id="portfolio">
      <Portfolio/>
      </section>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Landing;