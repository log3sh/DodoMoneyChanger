import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

import useScrollReveal from './hooks/useScrollReveal'
import SmoothScroll from './components/SmoothScroll'

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useScrollReveal();

  return (
    <div className="main-wrapper">
      <SmoothScroll />
      {loading && <LoadingScreen fadeOut={fadeOut} />}

      <Header />
      <main className="main">
        <Hero />
        <Stats />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
