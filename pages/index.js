import styles from '../styles/Home.less'
import { useEffect } from 'react'
import Head from 'next/head'
import { initIntroAnimations } from '../public/js/introAnimations'; // Ajusta la ruta


export default function Intro() {
  useEffect(() => {
    initIntroAnimations();
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
        </div>
      </div>

      {/*fin pantalla inicio */}



      {/* Inicio pagina  */}

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
                  <a className="nav-link" href="#">Home</a>
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








    </div>
    </div>
  );
}
