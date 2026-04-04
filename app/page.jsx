import Navbar from "../components/Navbar";
import Reels from "../components/Reels";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO PARTIDO */}
      <section className="bg-blue-950 text-white p-6 md:p-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          {/* INFO */}
          <div>
            <p className="text-sm text-gray-300">Liga Uruguaya</p>
            <p className="text-sm text-gray-400">Gran Parque Central</p>
          </div>

          {/* EQUIPOS */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <img src="/nacional.png" className="w-16 mx-auto" />
              <p>Nacional</p>
            </div>

            <div className="text-xl font-bold">-</div>

            <div className="text-center">
              <img src="/images.png" className="w-16 mx-auto" />
              <p>Central Español</p>
            </div>
          </div>

          {/* BOTÓN */}
          <Link
            href="https://www.sofascore.com/es-la/football/match/central-espanol-nacional/FobsHob#id:15873054"
            target="_blank"
            className="border border-white/30 px-4 py-2 rounded-lg hover:bg-white/10 transition"
          >
            Seguir partido
          </Link>

        </div>
      </section>

      {/* REELS */}
      <div className="max-w-5xl mx-auto p-6">

        <h2 className="text-xl mb-6">
          Contenido de la hinchada
        </h2>

        <Reels />

      </div>

    </main>
  );
}