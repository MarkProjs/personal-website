import React, { useEffect } from "react";
import "./styles/About.css";
import dawson_pic from "../assets/dawson_pic.jpeg";
import eva_pic from "../assets/eva_pic.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1700,
      delay: 100,
    });
  }, []);

  return (
    <div className="about">
      <div data-aos="fade-right" className="education">
        <h2 className="main_title">Education</h2>
        <div className="content">
          <div className="dawson">
            <h3 className="subtitle"> Dawson College</h3>
            <h4>Computer Science Technology</h4>
            <h5>August 2020 - June 2023</h5>
          </div>
          <div className="picNLink">
            <a
              href="https://www.dawsoncollege.qc.ca"
              target="_blank"
              rel="noreferrer"
            >
              <img src={dawson_pic} alt="dawson_pic" className="compPic" />
            </a>
            <p>
              Link:{" "}
              <a
                href="https://www.dawsoncollege.qc.ca"
                target="_blank"
                rel="noreferrer"
              >
                https://www.dawsoncollege.qc.ca
              </a>
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="experience">
        <h2 className="main_title">Experience</h2>
        <div className="content">
          <div className="eva">
            <h3 className="subtitle">Eva</h3>
            <h5>April 2023 - June 2023</h5>
          </div>
          <div className="picNLink">
            <a href="https://eva.coop/#/" target="_blank" rel="noreferrer">
              <img src={eva_pic} alt="eva_pic" className="compPic" />
            </a>
            <p>
              Link:{" "}
              <a href="https://eva.coop/#/" target="_blank" rel="noreferrer">
                https://eva.coop/#/
              </a>
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className="skills">
        <h2 className="main_title">Skills</h2>
        <div className="content">
          <div className="front-end">
            <h3 className="subtitle">Front-End</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>REST API</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="back=end">
            <h2 className="subtitle">Back-End</h2>
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
      </div>
    </div>
  );
}

export default About;
