import './styles/Home.css';

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Mark Benedict Agluba</h1>
        <p>Junior Software Developer</p>
      </header>

      <section className="hero">
        <h2>Welcome to My Portfolio!</h2>
        <p>
          Recent Computer Science graduate seeking new opportunities to utilize
          coding skills that was taught. Hopeful to gain an experience and an
          entry level position in a business with the possibility of obtaining a
          career in software development.
        </p>
      </section>

      <section className='projects'>
        <h2>
          My Projects!
        </h2>
        <div className='project'>
          <h3>Project 1</h3>
          <p>This one :p</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
