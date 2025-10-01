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
            <div>
              <img src="img/star.png" alt="fondo" />
              <span>Transforming ideas into digital experiences</span>
              <img src="img/star.png" alt="fondo" />
            </div>
          </div>

          <div className="info-box-about-me">
                <div className="box-img-about-me">
                  
                </div>
                <div className="box-desc-about-me">
                  <h2 className='gradient'>Hello I&apos;m</h2>
                  <h2>Julia Suarez</h2>
                  <span> a passionate Frontend Developer dedicated to crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in creating responsive designs that adapt seamlessly across devices. My journey in web development began with a fascination for how websites are built, leading me to pursue formal education and hands-on projects. I thrive on solving complex problems and continuously learning new technologies to stay ahead in this ever-evolving field. When I&apos;m not coding, you&apos;ll find me exploring the latest design trends or contributing to open-source projects. Let&apos;s connect and create something amazing together!</span>
                </div>
          </div>
        </div>
      </div>
    </div>








    </div>
    </div>
  );
}
