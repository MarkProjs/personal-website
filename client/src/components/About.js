import React, { useEffect } from 'react';
import './styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(()=>{
    AOS.init({
      duration: 1700,
      delay: 100
    });
  }, []);


  return(
    <div className='about'>
     <div data-aos='flip-up' className='education'>
      Education
     </div>
     <div data-aos='flip-left' className='experience'>
      Experience
     </div>
     <div data-aos='flip-down' className='skills'>
      Skills
     </div>
    </div>
  );
}

export default About;