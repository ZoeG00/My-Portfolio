export default function CardAboutMe() {
  return (
    <>
      <div className="container-sobre-mi mx-20 primer-card">
        <div className="card">
          <div className="slide slide1">
            <img
              src="https://i.ibb.co/Sxjb4bm/perfil.png"
              alt="mi perfil"
            />
          </div>
          <div className="slide slide2">
            <div>
              <div className="font-bold text-xl mb-2">Zoe Guzman</div>
              <p className="text-base mb-2">
                Software Developer
              </p>
              <p className="text-base">
               Mendoza, Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
