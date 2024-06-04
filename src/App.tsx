import styles from './style';
import { Navbar, Hero, Skills, Contact, Footer, PalettePopup } from "./components";
import { whiteLine, colorPalette } from './assets';

import { useState, useEffect, useRef } from 'react';

import './index.css';

const App = () => {
  const [popup, setPopup] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const viewportHeight = window.innerHeight;
        const footerTop = footerRef.current.getBoundingClientRect().top;
        if (footerTop < viewportHeight) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='video-background overflow-hidden'>
      <video autoPlay loop muted>
        <source src="/assets/film-crackle-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={`${styles.flexCenter} ${styles.paddingX} navbar`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <img src={whiteLine} alt="navbar white line" className='navbar-line h-auto w-full sm:block hidden'/>

      <img src={colorPalette} alt="color palette" className={`cursor-pointer h-auto sm:block hidden w-[200px] ${isFixed ? 'fixed bottom-9 right-2' : 'absolute bottom-[150px] right-2'}`} onClick={() => setPopup(true)}/>

      <PalettePopup isOpen={popup} children={setPopup}/>

      <div className={`${styles.flexStart} sm:pt-[100px] pt-[120px]`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Skills />
          <Contact />
        </div>
      </div>

      <img src={whiteLine} alt="footer white line" className='sm:mt-[100px] mt-[20px] h-auto w-full'/>

      <div ref={footerRef} className={`${styles.flexStart} ${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App