export default function CardAboutMe() {
    return (
      <>
        <div className="bg-slate-50 max-w-xs rounded overflow-hidden shadow-lg m-4 cursor-pointer transition-transform transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src="https://i.ibb.co/Sxjb4bm/perfil.png"
            alt="mi perfil"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Zoe Guzman</div>
            <p className="text-gray-700 text-base">
              Mi nombre es Zoe Guzmán. Soy una programadora freelancer de Gral.
              San Martín, Mendoza. Me dedico al desarrollo de apps web y mobile.
              Si necesitas una web para tu negocio, empresa o servicio, no dudes
              en contactarme
            </p>
          </div>
        </div>
      </>
    );
  }
  