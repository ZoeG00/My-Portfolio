const Home = () => {
  return (
    <div id="video-container">
      <div className="container">
        <img
        id="home-img"
        src="https://i.ibb.co/k3tDw9y/logo.png"
        width={200}
        height={200}
        />
        <section className="animation">
          <div className="first">
            <div>Soluciones Digitales</div>
          </div>
          <div className="second">
            <div>Desarrollo Web</div>
          </div>
          <div className="third">
            <div>Desarrollo Mobile</div>
          </div>
        </section>
      </div>
      <video autoPlay muted loop>
        <source src={"https://i.ibb.co/t4DjJvQ/fondo.gif"} type="video/mp4" />
        {/* Agrega más elementos <source> si deseas agregar formatos adicionales del video */}
      </video>
    </div>
  );
};

export default Home;
