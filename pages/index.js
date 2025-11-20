import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.less'
import { initIntroAnimations } from '../lib/introAnimations'; 
import { paginageneral } from '../lib/paginageneral'; 
import { initAboutMeObserver } from '../lib/aboutme';
import { showcase } from '../lib/showcase';



import TextType from '../components/TextType.jsx';
import ShinyText from '../components/ShinyText.jsx';

export default function Intro() {
  useEffect(() => {
    initIntroAnimations();
    paginageneral();
    initAboutMeObserver();
    showcase();
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
          <div className="glow"></div>
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
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <div className="glow"></div>
            </div>
            <div className="link-item">
              Contact
              <i className="fa-regular fa-envelope"></i>
              <div className="glow"></div>
            </div> 

          </div>

          <div className="box-redes-inicio">
              <a className="redes-item">
                <img src="img/github.svg" alt="fondo" />
                <div className="glow"></div>
              </a>
              <a className="redes-item">
                <img src="img/linkedin.svg" alt="fondo" />
                <div className="glow"></div>
              </a>
              <a className="redes-item">
                <img src="img/inst.svg" alt="fondo" />
                <div className="glow"></div>
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
                  <span className='text-description'>I’m a passionate Frontend Developer skilled in HTML, CSS, and JavaScript, focused on crafting responsive, user-friendly designs. Enthusiastic about problem-solving, learning new technologies, and exploring design trends, I also enjoy contributing to open-source projects.</span>
                  <div className="box-frase-about-me">
                    <img src="img/comillas.svg" alt="fondo" />
                    <span>&quot;Leveraging AI as a professional tool, not a replacement.&quot;</span>
                  </div>
                  <div className="box-button-about-me">
                    <div className="button-cv">
                      <i className="fa-regular fa-file-lines"></i>
                      Download CV
                      <div className="glow"></div>
                    </div>
                    <div className="button-contact">
                      <i className="fa-solid fa-code"></i>
                      View Projects
                      <div className="glow"></div>
                    </div>
                  </div>
                </div>

                <div className="box-img-about-me">
                  <img src="img/profile.png" alt="fondo" />
                  <div className="glow"></div>
                </div>

          </div>

          <div className="box-expe-about-me">
            <div className="project-box">
              <div className='first-icon'><img src="img/code2.svg" alt="fondo" /></div>
              <span className="count">10</span>
              <span className="text">TOTAL PROJECTS </span>
              <span className="line">Innovative web solutions crafted</span>
              <div className="bg-icon"><img className="bg-icon" src="img/arrow-up-left.svg" alt="fondo" /></div>
            </div>

            <div className="certif-box">
              <div className='first-icon'><img src="img/certif.svg" alt="fondo" /></div>
              <span className="count">5</span>
              <span className="text">CERTIFICATES</span>
              <span className="line">Professional skills validated</span>
              <div className="bg-icon"><img className="bg-icon" src="img/arrow-up-left.svg" alt="fondo" /></div>
            </div>

            <div className="years-box">
              <div className='first-icon'><img src="img/world.svg" alt="fondo" /></div>
              <span className="count" data-target="300">0</span>
              <span className="text">YEARS OF EXEPRIENCE</span>
              <span className="line">Continuous learning journey</span>
              <div className="bg-icon"><img className="bg-icon" src="img/arrow-up-left.svg" alt="fondo" /></div>
            </div>

          </div>

        </div>
      </div>
      {/* Final aboout me */}

      {/* Inicio showcase */}
      <div className='pagina-showcase'>
        <div className='container-pagina-showcase'>

          <div className='titulo'>
            <h2>Portfolio Showcase</h2>
            <span>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</span>
          </div>

          <div className='box-seleccionar'>
            <div className='proyectos activa'>
              <img src="img/code2.svg" alt="fondo" />
              <span>Projects</span>
            </div>
            <div className='certificates'>
              <img src="img/certif.svg" alt="fondo" />
              <span>Certificates</span>
            </div>
            <div className='tech-stack'>
              <img src="img/world.svg" alt="fondo" />
              <span>Tech Stack</span>
            </div>
          </div>

          <div className='box-mostrar-seleccion'>
            <div className='proyectos-mostrar activa'>

              <div className='proyecto-box'>
                <img src="img/delivero.png" alt="fondo" />
                <span className='title'>Deliveroo Project</span>
                <span className='desc'>Desarrollé una réplica completa de la web de Deliveroo como proyecto escolar, incluyendo su interfaz de usuario, diseño responsive y funcionalidades principales de pedidos y menús.</span>
                <a href="https://github.com/juliasuarz/Delivero" target="_blank" rel="noopener noreferrer" className="btn-code">Github code <img src="img/arrow-up.svg" alt="fondo" /></a> 
              </div>

              <div className='proyecto-box'>
                <img src="img/biensa.png" alt="fondo" />
                <span className='title'>Biensa Project</span>
                <span className='desc'>Desarrollé una página web enfocada en la salud mental, donde los usuarios pueden chatear en tiempo real con médicos y profesionales, al estilo WhatsApp. El sitio también ofrece información y recursos.</span>
                <a href="https://github.com/juliasuarz/Biensa/tree/julia" target="_blank" rel="noopener noreferrer" className="btn-code">Github code <img src="img/arrow-up.svg" alt="fondo" /></a> 
              </div>

              <div className='proyecto-box'>
                <img src="img/whatsapp.png" alt="fondo" />
                <span className='title'>WhatsApp Project</span>
                <span className='desc'>Desarrollé una aplicación web inspirada en WhatsApp, que permite a los usuarios registrarse, agregar contactos, chatear en tiempo real y bloquear usuarios.</span>
                <a href="https://github.com/juliasuarz/whatsapp_v3/tree/main" target="_blank" rel="noopener noreferrer" className="btn-code">Github code <img src="img/arrow-up.svg" alt="fondo" /></a> 
             </div>

              

            </div>

            <div className='certificates-mostrar'>

              <div className='certificates-box'>
                <img src="img/certif-phyton.png" alt="fondo" />
              </div>

              <div className='certificates-box'>
                <h3>Certificación AWS Cloud Practitioner</h3>
                <h4>In progress...</h4>
              </div>

              <div className='certificates-box'>
                <h3>Certificación AZ-900: Microsoft Azure Fundamentals</h3>
                <h4>In progress...</h4>
              </div>

            </div>

            <div className='tech-stack-mostrar'>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/html.svg" alt="fondo" />
                </div>
                <span>HTML</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/css.svg" alt="fondo" />
                </div>
                <span>CSS</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/javascript.svg" alt="fondo" />
                </div>
                <span>JavaScript</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/bootstrap.svg" alt="fondo" />
                </div>
                <span>Bootstrap</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/github2.svg" alt="fondo" />
                </div>
                <span>GitHub</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/laravel.png" alt="fondo" />
                </div>
                <span>Laravel</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/python.png" alt="fondo" />
                </div>
                <span>Python</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/php.svg" alt="fondo" />
                </div>
                <span>PHP</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/mysql.webp" alt="fondo" />
                </div>
                <span>MySql</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/figma.png" alt="fondo" />
                </div>
                <span>figma</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/jquery.png" alt="fondo" />
                </div>
                <span>jquery</span>
              </div>

              <div className='tech-box'>
                <div className="icon-wrap">
                  <img src="img/powershell.png" alt="fondo" />
                </div>
                <span>PowerShell</span>
              </div>

            </div>
          

          </div>



        </div>

      </div> 
      {/* Fin showcase */}

      {/* Inicio contacto */}
      <div className='pagina-contacto'>
        <div className='container-pagina-contacto'>

          <div className='titulo'>
            <h2>Contact me</h2>
            <span>Have a question? Send me a message, and I'll get back to you right away.</span>
          </div>
          
          <div className='container-form'>

            <div className='box-info-contacto'>
              <p>dsknsdkns </p>

            </div>


            <div className='box-form-contacto'>
              <div className="desc-box-form">
                <h2 className="title">Contact</h2>
                <img src="img/share.svg" alt="icono" />
                <span className="info">Anything to discuss? Send me a message and let's talk.</span>
              </div>
              <form action="https://formspree.io/f/mblpkaka" method="POST">
                <label className="box-label">
                  <i className="fa-regular fa-user"></i>
                  <input type="name" name="name" required/>
                </label>

                <label className="box-label">
                  <i className="fa-regular fa-envelope"></i>
                  <input type="email" name="email" required/>
                </label>

                <label className="box-label">
                  <i className="fa-regular fa-message"></i>
                 
                  <textarea name="message" required></textarea>
                </label>

                <button type="submit">Enviar</button>
              </form>

            </div>
          
          </div>

                




        </div>

      </div>

    </div>





    </div>





             



    </div>
    
  );
}
