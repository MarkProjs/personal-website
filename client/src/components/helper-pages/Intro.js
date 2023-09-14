import React from "react";

function Intro() {
  return (
    <div className="intro">
      <div className="welcome">
        <h1 id="title">Hello, my name is Mark!</h1>
        <p id="briefDesc">
          Recent Computer Science graduate seeking new opportunities to utilize
          coding skills that was taught. Hopeful to gain an experience and an
          entry level position in a business with the possibility of obtaining a
          career in software development.
        </p>
      </div>
      <img src="/images/intro-pic.jpg" alt='intro' />
    </div>
  );
}

export default Intro;
