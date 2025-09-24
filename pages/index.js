import styles from '../styles/Home.less'
import { useEffect } from 'react'
import Head from 'next/head'


export default function Intro() {
  useEffect(() => {
    const intro = document.querySelector('.header-intro');
    const logoSpan = document.querySelectorAll('.port-web');
    const welcomeSpan = document.querySelectorAll('.welcome-to');
    const iconosIntro = document.querySelectorAll('.iconos-intro');
    const boxLink = document.querySelectorAll('.box-link');

    const retrasoInicial = 2000; // antes de aparecer el primer span
    const retrasoInicial2 = 1000;
    const retrasoInicial3 = 2300;

    // Unimos todos los elementos en un array
    const allSpans = [...welcomeSpan, ...logoSpan, ...iconosIntro, ...boxLink];

    // aparecer portfoolio
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, retrasoInicial + idx * 150);
    });

    // aparecer welcome to
    welcomeSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, retrasoInicial2 + idx * 310);
    });

    // aparecer iconos
    iconosIntro.forEach((img, idx) => {
      setTimeout(() => {
        img.classList.add('active');
      }, retrasoInicial2 + idx * 310);
    });

    // aparecer link
    boxLink.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, retrasoInicial3 + idx * 150);
    });

    // Opcional: si quieres hacer fadeout después
    // setTimeout(() => {
    //   allSpans.forEach(el => el.classList.remove('active'));
    //   intro.classList.add('fadeout');
    // }, 5000);

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
