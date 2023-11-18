import Projects from "../components/helper-pages/Projects";
import "./styles/Home.css";
import image from "../assets/intro-pic.jpg";

function Home() {
  return (
    <div className="home">
      <div className="main_heading">
        <div className="introduction">
          <div className="description">
            <h1> Hello, This is Mark!</h1>
            <p className="intro">
              Computer science graduate with a passion for building web applications. Currently seeking new opportunities as junior developer. Feel free to reach out! 
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
