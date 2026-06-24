import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={`app-wrapper ${loading ? 'hidden' : 'visible'}`}>
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Services />
        <Stats />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
