import React, { useEffect } from 'react';
import Projects from "../components/helper-pages/Projects";
import "./styles/Home.css";
import image from "../assets/intro-pic.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      delay: 100
    });

  }, []);
  return (
    <div data-aos='zoom-in-down' className="home">
      <div className="main-heading">
        <div className="introduction">
          <div className="description">
            <h1 className="hello"> Hello, This is Mark!</h1>
            <h2 className='job_title'>Junior Software Developer</h2>
            <p className="intro">
              Computer science graduate with a passion for building applications. 
              Currently seeking new opportunities as junior developer. 
              Feel free to reach out! 
            </p>
          </div>
          <img src={image} alt="profile_pic" id="profile_pic" />
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Home;
