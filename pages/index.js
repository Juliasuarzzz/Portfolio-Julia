import styles from '../styles/Home.less'
import { useEffect } from 'react'
import Head from 'next/head'
import { initIntroAnimations } from '../public/js/introAnimations'; // Ajusta la ruta


export default function Intro() {
  useEffect(() => {
    initIntroAnimations();
  }, []);

  return (
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
  );
}
