import { DotLottie } from '@lottiefiles/dotlottie-web';

export function paginageneral() {
  if (typeof document === "undefined") return; // asegura que estamos en cliente

  const canvas = document.querySelector('#dotlottie-canvas');
  if (!canvas) return;

  new DotLottie({
    autoplay: true,
    loop: true,
    canvas,
    src: "https://lottie.host/f42c49b6-a831-4477-98ff-aceb314d7bd1/dQp4FySkvw.lottie", // pon tu URL real
  });
}


const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={{ animationDuration }}>
      {text}
    </div>
  );
};

export default ShinyText;
