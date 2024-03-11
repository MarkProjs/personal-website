import React, { useEffect } from 'react';
import './styles/About.css';
import dawson_pic from '../assets/dawson_pic.jpeg';
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
     <div className='education'>
      <h2 className = 'main_title'>Education</h2>
      <div className='dawson'>
        <h3 className ='subtitle'> Dawson College</h3>
        <h4>Computer Science Technology</h4>
        <h5>August 2020 - June 2023</h5>
      </div>
      <img src={dawson_pic} alt='dawson_pic' id='dawsonPic'/>
     </div>

     <div className='experience'>
      <h2 className='main_title'>Experience</h2>
      <div className='eva'>
        <h3 className='subtitle'>Eva</h3>
        <h5>April 2023 - June 2023</h5>
      </div>
     </div>

     <div className='skills'>
      <h2 className='main_title'>Skills</h2>
      <h3 className='subtitle'>Front-End</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>REST API</li>
        <li>Git</li>
      </ul>
      <h2 className='subtitle'>Back-End</h2>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>Oracle DB</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>JUnit</li>
      </ul>
     </div>
    </div>
  );
}

export default About;