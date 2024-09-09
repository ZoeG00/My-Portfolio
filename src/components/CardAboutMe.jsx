export default function CardAboutMe() {
  return (
    <>
      <div className="container-sobre-mi mx-16 primer-card">
        <div className="card">
          <div className="slide slide1">
            <img
              src="https://i.ibb.co/ZXYS9rG/IMG-20240905-WA0023.jpg"
              alt="mi perfil"
              className="rounded"
            />
          </div>
          <div className="slide slide2">
            <div>
              <div className="font-bold text-base mt-16 ">¡Hola soy Zoe!</div>
              <p className="text-base mb-2 text-black">
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
