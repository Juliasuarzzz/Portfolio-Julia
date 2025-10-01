import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.less'
import { initIntroAnimations } from '../lib/introAnimations'; 
import { paginageneral } from '../lib/paginageneral'; 
import TextType from '../components/TextType.jsx';
import ShinyText from '../components/ShinyText.jsx';

export default function Intro() {
  useEffect(() => {
    initIntroAnimations();
    paginageneral();
  }, []);

  return (

    // Pantalla inicio
    <div>
      <div className="header-intro">
        <div className="box-iconos-intro">
          <img className="iconos-intro" src="img/code.svg" alt="" />
          <img className="iconos-intro" src="img/git.svg" alt="" />
          <img className="iconos-intro" src="img/user.svg" alt="" />
        </div>

        <div className="box-portfolio">
          <div>
            <span className="welcome-to">Welcome</span>{" "}
            <span className="welcome-to">To</span>
            <span className="welcome-to">My</span>
          </div>
          <div>
            <span className="port-web gradient">Portfolio</span>
            <span className="port-web gradient">Web</span>
          </div>
        </div>

        <div className="box-link">
          <img src="img/icon-web.svg" alt="fondo" />
          <span className="text">heloooooo</span>
          <div class="glow"></div>
        </div>
      </div>

      {/*fin pantalla inicio */}


      {/* Inicio paginas  */}

      <div className='full-page'>
        {/* Inicio nav bar */}
        
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Julia</a>

            {/* Botón hamburguesa para móviles */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links del navbar */}
            <div className="collapse navbar-collapse" id="navbarNav">
              
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    {/* Inicio Navbar */}


    {/* inicio pagina inicial */}
    <div className="pagina-inicio">

      {/* Inicio primera pagina */}

      <div className="container-pagina-inicio">
        <div className="box-desc-inicio">

          <div className="box-innovate">
            <div className="innovate-item">
              <div className="glow"></div>
              <img src="img/star.png" alt="fondo" />
              <span>Ready to innovate</span>
            </div>
          </div>

          <div className="text-inicio">
            <h1>Frontend</h1>
            <h1 className='gradient'><div className="glow"></div>Developer</h1>
          </div>

          <div className='typing-box'>
            <main className="p-10">
              <TextType 
                text={[
                  "Creative Coder", 
                  "Full-Stack Web Developer 🚀", 
                  "Tech Enthusiast 💡", 
                  "Problem Solver 🔧", 
                  "Computer Engineering Student 🎓"
                ]} 
                typingSpeed={80}
                pauseDuration={1500}
                loop={true}
                textColors={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
              />
            </main>
          </div>

          <div className="desc-info-inicio">
            <span>Designing Modern, Efficient, and Intuitive Web Experiences to Solve Real-World Digital Challenges</span>
          </div>

          <div className="box-lenguaje-inicio">
            <div className="lenguaje-item"><ShinyText text="CSS" disabled={false} speed={3} className='custom-class' /></div>
            <div className="lenguaje-item"><ShinyText text="JavaScript" disabled={false} speed={3} className='custom-class' /></div>
            <div className="lenguaje-item"><ShinyText text="SQL" disabled={false} speed={3} className='custom-class' /></div>
            <div className="lenguaje-item"><ShinyText text="PHP" disabled={false} speed={3} className='custom-class' /></div>
          </div>

          <div className="box-links-inicio">
            <div className="link-item">
              Projects
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              <div class="glow"></div>
            </div>
            <div className="link-item">
              Contact
              <i class="fa-regular fa-envelope"></i>
              <div class="glow"></div>
            </div> 

          </div>

          <div className="box-redes-inicio">
              <a className="redes-item">
                <img src="img/github.svg" alt="fondo" />
                <div class="glow"></div>
              </a>
              <a className="redes-item">
                <img src="img/linkedin.svg" alt="fondo" />
                <div class="glow"></div>
              </a>
              <a className="redes-item">
                <img src="img/inst.svg" alt="fondo" />
                <div class="glow"></div>
              </a>
          </div>

        </div>

        

        <div className="box-img-inicio">
          <canvas id="dotlottie-canvas" style={{ width: "400px", height: "400px" }}></canvas>
        </div>
        
      </div>

      {/* Fin primera pagina */}

      {/* Inicio about me */}
      <div className="pagina-about-me">

        <div className="container-pagina-about-me">

          <div className='title-about-me'>
            <h2>About Me</h2>
            <div className='box-transforming'>
              <img src="img/star.png" alt="fondo" />
              <span>Transforming ideas into digital experiences</span>
              <img src="img/star.png" alt="fondo" />
            </div>
          </div>

          <div className="info-box-about-me">
                
                <div className="box-desc-about-me">
                  <h2 className='gradient'>Hello I&apos;m</h2>
                  <h2>Julia Suarez</h2>
                  <span>I’m a passionate Frontend Developer skilled in HTML, CSS, and JavaScript, focused on crafting responsive, user-friendly designs. Enthusiastic about problem-solving, learning new technologies, and exploring design trends, I also enjoy contributing to open-source projects.</span>
                </div>

                <div className="box-img-about-me">
                  <img src="img/profile.png" alt="fondo" />
                  <div className="glow"></div>
                </div>

          </div>
        </div>
      </div>
    </div>








    </div>
    </div>
  );
}
