import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Work from './pages/Work';
import ContactPage from './pages/ContactPage';

import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Global Scroll Handler
const ScrollHandler = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);
  const rafCallbackRef = useRef(null); // To store the RAF callback for removal

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    const onScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on('scroll', onScroll);

    // Store the RAF callback to be able to remove it later
    rafCallbackRef.current = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCallbackRef.current);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      if (rafCallbackRef.current) {
        gsap.ticker.remove(rafCallbackRef.current);
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Sync scroll triggers on route change
  useLayoutEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    // Clear old scroll triggers to prevent leaks/conflicts
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Re-initialize reveal animations
    const revealElements = document.querySelectorAll('.gsap-reveal');
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Give DOM time to update heights, then refresh ScrollTrigger
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="portfolio-app">
        <ScrollHandler />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
