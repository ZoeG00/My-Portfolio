import CardAboutMe from "./CardAboutMe";
import CardGustos from "./CardGustos";
import CardTech from "./CardTech";

export default function Aboutme() {
  return (
    <>
      <section>
        <h3 className="text-white text-4xl">SOBRE MÍ</h3>
          <CardAboutMe />
           <CardTech />
          <CardGustos />
      </section>
    </>
  );
}
