import Navbar from "../../components/Navbar";

export default function Titulos() {

  const titulos = [
    {
      categoria: "Campeonato Uruguayo",
      cantidad: 49,
      años: ["2022", "2019", "2016", "2015"]
    },
    {
      categoria: "Copa Libertadores",
      cantidad: 3,
      años: ["1971", "1980", "1988"]
    },
    {
      categoria: "Intercontinental",
      cantidad: 3,
      años: ["1971", "1980", "1988"]
    }
  ];

  return (
    <main>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-3xl mb-6">Palmarés</h1>

        {titulos.map((t, i) => (
          <div
            key={i}
            className="mb-6 bg-white/10 p-5 rounded-xl border border-white/10"
          >
            <h2 className="text-xl font-semibold">
              {t.categoria} ({t.cantidad})
            </h2>

            <p className="text-gray-300 mt-2">
              {t.años.join(" • ")}
            </p>
          </div>
        ))}

      </div>
    </main>
  );
}