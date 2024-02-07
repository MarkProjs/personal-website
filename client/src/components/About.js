import React, { useEffect } from 'react';
import './styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      delay: 100
    });
  }, []);


  return(
    <div className='about'>
     <div data-aos='zoom-in' className='education'>
      Education
     </div>
     <div data-aos='flip-up' className='experience'>
      Experience
     </div>
     <div data-aos='fade' className='skills'>
      Skills
     </div>
    </div>
  );
}

export default About;