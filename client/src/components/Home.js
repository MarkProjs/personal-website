import "./styles/Home.css";
import image from '../assets/intro-pic.jpg';

function Home() {
  return (
    <div className="home">
      <div className="main_heading">
        <div className="description">
          <h1> Hello, This is Mark!</h1>
          <h4>Junior Software Developer</h4>
        </div>
        <img src={image} alt="profile_pic" id="profile_pic"/>
      </div>
    </div>
  );
}

export default Home;
