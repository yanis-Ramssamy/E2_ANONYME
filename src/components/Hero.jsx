// Section hero animée (l'animation est définie dans App.css)
function Hero({ title, subtitle }) {
  return (
    <section className="hero text-center" id="accueil">
      <div className="container">
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </section>
  );
}

export default Hero;
