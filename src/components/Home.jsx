const Home = () => {
  return (
    <>
      <div id="video-container">
        <div className="container">
          <img
            id="home-img"
            src="https://i.ibb.co/k3tDw9y/logo.png"
          />
          <div className="animation">
            <div className="first">
              <div>Soluciones Digitales</div>
            </div>
            <div className="second">
              <div>Desarrollo Web</div>
            </div>
            <div className="third">
              <div>Desarrollo Mobile</div>
            </div>
          </div>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
