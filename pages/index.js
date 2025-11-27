import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.less'
import { initIntroAnimations } from '../lib/introAnimations'; 
import { paginageneral } from '../lib/paginageneral'; 
import { initAboutMeObserver } from '../lib/aboutme';
import { showcase } from '../lib/showcase';
import { menuScroll } from '../lib/menuScroll';
import { idioma } from '../lib/idioma';




import TextType from '../components/TextType.jsx';
import ShinyText from '../components/ShinyText.jsx';

export default function Intro() {
  useEffect(() => {
    initIntroAnimations();
    paginageneral();
    initAboutMeObserver();
    showcase();
    menuScroll();
    idioma();
  }, []);

  return (

    // Pantalla inicio
    <div>
      <div className="header-intro" >
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

      <div className='full-page' id="home" >
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
                  <a className="nav-link active en" href="#home">Home</a>
                  <a className="nav-link active esp" href="#home">Inicio</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link en" href="#about">About me</a>
                  <a className="nav-link esp" href="#about">Sobre mí</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link en" href="#portfolio">Portfolio</a>
                  <a className="nav-link esp" href="#portfolio">Portafolio</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link en" href="#contact">Contact</a>
                  <a className="nav-link esp" href="#contact">Contacto</a>
                </li>

              </ul>

              <div class="language-switch">
                <button id="btn-es" >ESP</button>
                <span>|</span>
                <button id="btn-en" >EN</button>
              </div>

            </div>
          </div>
        </nav>
        
        {/* Inicio Navbar */}


    {/* inicio pagina inicial */}
    <div className="pagina-inicio" >

      {/* Inicio primera pagina */}

      <div className="container-pagina-inicio">
        <div className="box-desc-inicio">

          <div className="box-innovate">
            <div className="innovate-item">
              <div className="glow"></div>
              <img src="img/star.png" alt="fondo" />
              <span className="en">Ready to innovate</span>
              <span className="esp">Lista para innovar</span>
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
            <a className="link-item" href="#portfolio">
              <span className="en">Projects</span>
              <span className="esp">Proyectos</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <div className="glow"></div>
            </a>
            <a className="link-item" href="#contact">
              <span className="en">Contact</span>
              <span className="esp">Contacto</span>
              <i className="fa-regular fa-envelope"></i>
              <div className="glow"></div>
            </a> 

          </div>

          <div className="box-redes-inicio" id="about">
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
      <div className="pagina-about-me" >

        <div className="container-pagina-about-me">

          <div className='title-about-me'>
            <h2 className='en'>About Me</h2>
            <h2 className='esp'>Sobre Mí</h2>
            <div className='box-transforming'>
              <img src="img/star.png" alt="fondo" />
              <span className='en'>Transforming ideas into digital experiences</span>
              <span className='esp'>Transformando ideas en experiencias digitales</span>
              <img src="img/star.png" alt="fondo" />
            </div>
          </div>

          <div className="info-box-about-me">
                
                <div className="box-desc-about-me">
                  <h2 className='gradient en'>Hello I&apos;m</h2>
                  <h2 className='gradient esp'>Hola Soy</h2>
                  <h2>Julia Suarez</h2>
                  <span className='text-description en'>I’m a passionate Frontend Developer skilled in HTML, CSS, PHP and JavaScript, focused on crafting responsive, user-friendly designs. Enthusiastic about problem-solving, learning new technologies, and exploring design trends, I also enjoy contributing to open-source projects.</span>
                  <span className='text-description esp'>Soy una desarrolladora Frontend apasionada, experta en HTML, CSS, PHP y JavaScript, enfocada en crear diseños responsivos y fáciles de usar. Me entusiasma resolver problemas, aprender nuevas tecnologías y explorar tendencias de diseño, además de contribuir a proyectos de código abierto.</span>
                  <div className="box-frase-about-me">
                    <img src="img/comillas.svg" alt="fondo" />
                    <span className='en'>&quot;Leveraging AI as a professional tool, not a replacement.&quot;</span>
                    <span className='esp'>&quot;Aprovechando la IA como una herramienta profesional, no como un reemplazo.&quot;</span>
                  </div>
                  <div className="box-button-about-me">
                    <a href="pdf/Resume_JuliaSuarez.pdf"  download  className="button-cv" >
                      <i className="fa-regular fa-file-lines"></i>
                      <span className="en">Download CV</span>
                      <span className="esp">Descargar CV</span>
                      <div className="glow"></div>
                    </a> 
                    <a className="button-contact" href="#portfolio">
                      <i className="fa-solid fa-code"></i>
                      <span className="en">View Projects</span>
                      <span className="esp">Ver Proyectos</span>
                      <div className="glow"></div>
                    </a>
                  </div>
                </div>

                <div className="box-img-about-me">
                  <div className="bg-respl-about-me">
                  <img src="img/perfil-icon.jpg" alt="fondo" />
                  </div>
                  <div className="glow"></div>

                </div>

          </div>

          <div className="box-expe-about-me">
            <div className="project-box">
              <div className='first-icon'><img src="img/code2.svg" alt="fondo" /></div>
              <span className="count">10</span>
              <span className="text en">TOTAL PROJECTS </span>
              <span className="text esp">PROYECTOS TOTALES</span>
              <span className="line en">Innovative web solutions crafted</span>
              <span className="line esp">Soluciones web innovadoras creadas</span>
              <div className="bg-icon"><img className="bg-icon" src="img/arrow-up-left.svg" alt="fondo" /></div>
            </div>

            <div className="certif-box">
              <div className='first-icon'><img src="img/certif.svg" alt="fondo" /></div>
              <span className="count">3</span>
              <span className="text en">CERTIFICATES</span>
              <span className="text esp">CERTIFICADOS</span>
              <span className="line en">Professional skills validated</span>
              <span className="line esp">Habilidades profesionales validadas</span>
              <div className="bg-icon"><img className="bg-icon" src="img/arrow-up-left.svg" alt="fondo" /></div>
            </div>

            <div className="years-box">
              <div className='first-icon'><img src="img/world.svg" alt="fondo" /></div>
              <span className="count" data-target="300">2</span>
              <span className="text en">YEARS OF EXEPRIENCE</span>
              <span className="text esp">AÑOS DE EXPERIENCIA</span>
              <span className="line en">Continuous learning journey</span>
              <span className="line esp">Camino de aprendizaje continuo</span>
              <div className="bg-icon"  id="portfolio"><img className="bg-icon" src="img/arrow-up-left.svg" alt="fondo" /></div>
            </div>

          </div>

        </div>
      </div>
      {/* Final aboout me */}

      {/* Inicio showcase */}
      <div className='pagina-showcase' >
        <div className='container-pagina-showcase'>

          <div className='titulo'>
            <h2 className='en'>Portfolio Showcase</h2>
            <h2 className='esp'>Portafolio</h2>
            <span className='en'>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</span>
            <span className='esp'>Explora mi trayectoria a través de proyectos, certificaciones y experiencia técnica. Cada sección representa un hito en mi camino de aprendizaje continuo.</span>
          </div>

          <div className='box-seleccionar'>
            <div className='proyectos activa'>
              <img src="img/code2.svg" alt="fondo" />
              <span className='en'>Projects</span>
              <span className='esp'>Proyectos</span>
            </div>
            <div className='certificates'>
              <img src="img/certif.svg" alt="fondo" />
              <span className='en'>Certificates</span>
              <span className='esp'>Certificados</span>
            </div>
            <div className='tech-stack'>
              <img src="img/world.svg" alt="fondo" />
              <span className='en'>Tech Stack</span>
              <span className='esp'>Tecnologías</span>
            </div>
          </div>

          <div className='box-mostrar-seleccion'>
            <div className='proyectos-mostrar activa'>

              <div className='proyecto-box'>
                <img src="/img/delivero.png" alt="fondo" />
                <span className='title en'>Deliveroo Project</span>
                <span className='title esp'>Proyecto Deliveroo</span>
                <span className='desc en'> I developed a full replica of the Deliveroo website as a school project, including its user interface, responsive design, and main ordering and menu functionalities. </span>
                <span className='desc esp'>Desarrollé una réplica completa de la web de Deliveroo como proyecto escolar, incluyendo su interfaz de usuario, diseño responsive y funcionalidades principales de pedidos y menús.</span>
                <a href="https://github.com/juliasuarz/Deliveroo" target="_blank" rel="noopener noreferrer" className="btn-code">Github code <img src="img/arrow-up.svg" alt="fondo" /></a> 
                <div className="glow"></div>
              </div>

              <div className='proyecto-box'>
                <img src="img/biensa.png" alt="fondo" />
                <span className='title en'>Biensa Project</span>
                <span className='title esp'>Proyecto Biensa</span>
                <span className='desc en'>I developed a website focused on mental health, where users can chat in real-time with doctors and professionals, similar to WhatsApp. The site also offers information and resources.</span>
                <span className='desc esp'>Desarrollé una página web enfocada en la salud mental, donde los usuarios pueden chatear en tiempo real con médicos y profesionales, al estilo WhatsApp. El sitio también ofrece información y recursos.</span>
                <a href="https://github.com/juliasuarz/Biensa/tree/julia" target="_blank" rel="noopener noreferrer" className="btn-code">Github code <img src="img/arrow-up.svg" alt="fondo" /></a> 
                <div className="glow"></div>
              </div>

              <div className='proyecto-box'>
                <img src="img/whatsapp.png" alt="fondo" />
                <span className='title en'>WhatsApp Project</span>
                <span className='title esp'>Proyecto WhatsApp</span>
                <span className='desc en'>I developed a web application inspired by WhatsApp, allowing users to register, add contacts, chat in real-time, and block users.</span>
                <span className='desc esp'>Desarrollé una aplicación web inspirada en WhatsApp, que permite a los usuarios registrarse, agregar contactos, chatear en tiempo real y bloquear usuarios.</span>
                <a href="https://github.com/juliasuarz/whatsapp_v3/tree/main/whatsapp_v2" target="_blank" rel="noopener noreferrer" className="btn-code">Github code <img src="img/arrow-up.svg" alt="fondo" /></a> 
                <div className="glow"></div>
             </div>

             <div className='proyecto-box'>
                <img src="img/portfolio-proj.png" alt="fondo" />
                <span className='title en'>Portfolio Project</span>
                <span className='title esp'>Proyecto Portfolio</span>
                <span className='desc en'>I have designed and developed this portfolio combining creativity and functionality, using Figma for design and modern web technologies for implementation.</span>
                <span className='desc esp'>He diseñado y desarrollado este portfolio combinando creatividad y funcionalidad, utilizando Figma para el diseño y tecnologías web modernas para su implementación.</span>
                <div className='links-box'>
                  <a href="https://github.com/Juliasuarzzz/Portfolio-Julia" target="_blank" rel="noopener noreferrer" className="btn-code">Github code <img src="img/arrow-up.svg" alt="fondo" /></a> 
                  <a href="https://www.figma.com/file/XYZ123/Portfolio-Design" target="_blank" rel="noopener noreferrer" className="btn-code">Figma Design <img src="img/arrow-up.svg" alt="fondo" /></a> 
                </div>
                <div className="glow"></div>
             </div>

              

            </div>

            <div className='certificates-mostrar'>

              <div className='certificates-box'>
                <img src="img/certif-phyton.png" alt="fondo" />
              </div>

              <div className='certificates-box'>
                <h3 className='esp'>Certificación AWS Cloud Practitioner</h3>
                <h3 className='en'>AWS Cloud Practitioner Certification</h3>
                <h4 className='en'>In progress...</h4>
                <h4 className='esp'>En progreso...</h4>
              </div>

              <div className='certificates-box'>
                <h3 className='esp'>Certificación AZ-900: Microsoft Azure Fundamentals</h3>
                <h3 className='en'>AZ-900 Certification: Microsoft Azure Fundamentals</h3>
                <h4 className='en'>In progress...</h4>
                <h4 className='esp'>En progreso...</h4>
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
                  <img src="img/Laravel.png" alt="fondo" />
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
                  <img src="img/node-icon.webp" alt="fondo" />
                </div>
                <span>Node js</span>
              </div>

            </div>
          

          </div>



        </div>

      </div> 
      {/* Fin showcase */}

      {/* Inicio contacto */}
      <div className='pagina-contacto' id="contact">
        <div className='container-pagina-contacto'>

          <div className='titulo'>
            <h2 className="en">Contact me</h2>
            <h2 className="esp">Contáctame</h2>
            <span>
              <span className="en">Have a question? Send me a message, and Ill get back to you right away.</span>
              <span className="esp">¿Tienes alguna pregunta? Envíame un mensaje y te responderé de inmediato.</span>
            </span>
          </div>
          
          <div className='container-form'>

            <div className='box-info-contacto'>

              <div className='info-contacto-title'>
                <img src="img/line.svg" alt="icono" />
                <h3 className='title en'>Connect with me</h3>
                <h3 className='title esp'>Conecta conmigo</h3>
              </div>

              <div className='info-contacto-item'>
                <a className='box-item link' href="https://www.linkedin.com/in/julia-suarez-ba7a81267/" target="_blank" rel="noopener noreferrer">
                  <img src="img/linkedin-cont.svg" alt="icono" />
                  <div className='text'>
                    <span className='text1 en'>Let&apos;s Connect</span>
                    <span className='text1 esp'>Conectemos</span>
                    <span className='text2 en'>on LinkedIn</span>
                    <span className='text2 esp'>en LinkedIn</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

                <a className='box-item git' href="https://github.com/Juliasuarzzz" target="_blank" rel="noopener noreferrer">
                  <img src="img/git-cont.svg" alt="icono" />
                  <div className='text'>
                    <span className='text1'>GitHub</span>
                    <span className='text2'>@juliasuarzzz </span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div className='box-item yout'>
                  <img src="img/mail-cont.svg" alt="icono" />
                  <div className='text'>
                    <span className='text1'>Email</span>
                    <span className='text2'>juliasuarez0903@gmail.com</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>

            </div>


            <div className='box-form-contacto'>
              <div className="desc-box-form">
                <div className='contact-title'>
                  <h2 className="title en">Contact</h2>
                  <h2 className="title esp">Contacto</h2>
                  <img src="img/share.svg" alt="icono" />
                </div>
                
                <span className="info">
                  <span className="en">Anything to discuss? Send me a message and lets talk.</span>
                  <span className="esp">¿Algo que discutir? Envíame un mensaje y hablemos.</span>
                </span>
              </div>
              <form action="https://formspree.io/f/mblpkaka" method="POST">
                <label className="box-label">
                  <i className="fa-regular fa-user"></i>
                  <input type="name" name="name" placeholder="Name" required/>
                </label>

                <label className="box-label">
                  <i className="fa-regular fa-envelope"></i>
                  <input type="email" name="email" placeholder="Email" required/>
                </label>

                <label className="box-label">
                  <i className="fa-regular fa-message"></i>
                  <textarea name="message" placeholder="Message" required></textarea>
                </label>

                <button type="submit"><i className="fa-solid fa-location-arrow"></i>
                  <span className='esp'>Enviar</span>
                  <span className='en'>Send</span>
                </button>
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
