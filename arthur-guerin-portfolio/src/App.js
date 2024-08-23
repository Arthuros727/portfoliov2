import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Status from './components/Status';
import FooterPage from './components/FooterPage';
import EmblaCarousel from '../src/carouselle/js/EmblaCarousel';
import '../src/carouselle/js/css/base.css';
import '../src/carouselle/js/css/embla.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isMouseOverCarousel, setIsMouseOverCarousel] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollCooldown, setScrollCooldown] = useState(false); 
  const changeTimeout = useRef(null);
  const sectionsRefs = useRef([]);
  const touchStartY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.innerWidth <= 1000 || scrollCooldown) return; 

      setScrollCooldown(true); 
      setTimeout(() => setScrollCooldown(false), 350); 

      if (changeTimeout.current) {
        clearTimeout(changeTimeout.current);
      }

     
        const newSection = event.deltaY > 0 ? Math.min(currentSection + 1, 3) : Math.max(currentSection - 1, 0);

        if (newSection !== currentSection) {
          setTransitioning(true);
          sectionsRefs.current[newSection].style.display = 'block';
          setTimeout(() => {
            sectionsRefs.current[newSection].classList.add('show');
          }, 10); 

          sectionsRefs.current[currentSection].classList.add('transitioning-hide');

          changeTimeout.current = setTimeout(() => {
            sectionsRefs.current[currentSection].classList.remove('show');
            sectionsRefs.current[currentSection].classList.add('hide');
            sectionsRefs.current[currentSection].style.display = 'none';
            setTransitioning(false);
            setCurrentSection(newSection);
          }, 1); 
        }
      
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      if (window.innerWidth > 1000 || scrollCooldown) return; 

      setScrollCooldown(true); 
      setTimeout(() => setScrollCooldown(false), 350); 

      const touchEndY = event.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 30) { 
        const newSection = deltaY > 0 ? Math.min(currentSection + 1, 3) : Math.max(currentSection - 1, 0);
        if (newSection !== currentSection) {
          setTransitioning(true);
          sectionsRefs.current[newSection].style.display = 'block';
          setTimeout(() => {
            sectionsRefs.current[newSection].classList.add('show');
          }, 10); 

          sectionsRefs.current[currentSection].classList.add('transitioning-hide');

          changeTimeout.current = setTimeout(() => {
            sectionsRefs.current[currentSection].classList.remove('show');
            sectionsRefs.current[currentSection].classList.add('hide');
            sectionsRefs.current[currentSection].style.display = 'none';
            setTransitioning(false);
            setCurrentSection(newSection);
          }, 1); 
        }
        touchStartY.current = touchEndY;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (changeTimeout.current) {
        clearTimeout(changeTimeout.current);
      }
    };
  }, [currentSection, scrollCooldown]); 
  const handleMouseEnter = () => {
    setIsMouseOverCarousel(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOverCarousel(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const OPTIONS = { axis: 'y' };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={`App ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <Header />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div
        className={`content-wrapper ${initialLoad ? 'initial-load' : transitioning ? 'transitioning' : ''} ${currentSection === 0 ? 'show' : ''}`}
        ref={(el) => (sectionsRefs.current[0] = el)}
      >
        <About />
      </div>
      <div
        className={`content-wrapper ${initialLoad ? 'initial-load' : transitioning ? 'transitioning' : ''} ${currentSection === 1 ? 'show' : ''}`}
        ref={(el) => (sectionsRefs.current[1] = el)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div
        className={`content-wrapper ${initialLoad ? 'initial-load' : transitioning ? 'transitioning' : ''} ${currentSection === 2 ? 'show' : ''}`}
        ref={(el) => (sectionsRefs.current[2] = el)}
      >
        <Status />
      </div>
      <div
        className={`content-wrapper ${initialLoad ? 'initial-load' : transitioning ? 'transitioning' : ''} ${currentSection === 3 ? 'show' : ''}`}
        ref={(el) => (sectionsRefs.current[3] = el)}
      >
        <FooterPage />
      </div>
    </div>
  );
}

export default App;
