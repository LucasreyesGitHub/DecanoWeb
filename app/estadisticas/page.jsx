import Navbar from "../../components/Navbar";

export default function Conoce() {

  const documentos = [
    {
      title: "Acta de Fundación",
      file: "/docs/acta.pdf"
    }
  ];

  const datos = [
    {
      title: "Origen de la palabra Hincha",
      desc: "El término 'hincha' nace en Nacional gracias a Prudencio Miguel Reyes, quien inflaba balones."
    },
    {
      title: "Primer club criollo",
      desc: "Nacional fue el primer club formado por criollos en América."
    }
  ];

  return (
    <main>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6 space-y-10">

        <h1 className="text-3xl font-bold">
          📚 Conocé a Nacional
        </h1>

        {/* DOCUMENTOS */}
        <section>
          <h2 className="text-xl mb-4 font-semibold">
            Documentos históricos
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {documentos.map((doc, i) => (
              <a
                key={i}
                href={doc.file}
                target="_blank"
                className="bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition"
              >
                📄 {doc.title}
              </a>
            ))}
          </div>
        </section>

        {/* DATOS */}
        <section>
          <h2 className="text-xl mb-4 font-semibold">
            Datos importantes
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {datos.map((d, i) => (
              <div
                key={i}
                className="bg-white/10 p-4 rounded-xl border border-white/10"
              >
                <h3 className="font-semibold">
                  {d.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}