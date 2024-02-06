import React, { useEffect } from 'react';
import './styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(()=>{
    AOS.init({
      duration: 600,
      delay: 200
    });
  }, []);


  return(
    <div className='about'>
     <div data-aos='fade-left' className='education'>
      Education
     </div>
     <div data-aos='flip-up' className='experience'>
      Experience
     </div>
     <div data-aos='slide-up' className='skills'>
      Skills
     </div>
    </div>
  );
}

export default About;