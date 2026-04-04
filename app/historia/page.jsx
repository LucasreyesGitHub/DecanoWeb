import Navbar from "../../components/Navbar";

export default function Historia() {

  const eventos = [
    {
      año: "1899",
      titulo: "Fundación",
      desc: "Se funda el Club Nacional de Football, el primer club criollo de América.",
    },
    {
      año: "1971",
      titulo: "Primera Libertadores",
      desc: "Nacional conquista América por primera vez.",
    },
    {
      año: "1980",
      titulo: "Gloria Mundial",
      desc: "Campeón de Libertadores e Intercontinental.",
    },
    {
      año: "1988",
      titulo: "Última Libertadores",
      desc: "Nacional vuelve a ser campeón de América.",
    }
  ];

  return (
    <main>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-8">
          Historia del Club
        </h1>

        <div className="relative border-l border-white/20 pl-6">

          {eventos.map((e, i) => (
            <div key={i} className="mb-8">

              {/* PUNTO */}
              <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>

              <p className="text-sm text-blue-400">{e.año}</p>

              <h2 className="text-xl font-semibold">
                {e.titulo}
              </h2>

              <p className="text-gray-300 mt-1">
                {e.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}