"use client";
import { useState } from "react";
import Link from "next/link";
import { Home, Users, BarChart2, Trophy, BookOpen } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Inicio", href: "/", icon: <Home size={18} /> },
    { name: "Hinchada", href: "/hinchada", icon: <Users size={18} /> },
    { name: "Historia", href: "/historia", icon: <BookOpen size={18} /> },
    { name: "Stats", href: "/estadisticas", icon: <BarChart2 size={18} /> },
    { name: "Palmarés", href: "/titulos", icon: <Trophy size={18} /> }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-blue-900 shadow-xl border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

        {/* IZQUIERDA (menu mobile) */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* CENTRO (ESCUDO) */}
        <div className="flex items-center gap-3">
          <img
            src="/nacional.png"
            className="w-8 h-8 object-contain"
          />
          <span className="font-semibold tracking-wide hidden md:block">
            Club Nacional de Football
          </span>
        </div>

        {/* DERECHA (iconos tipo IG) */}
        <div className="hidden md:flex items-center gap-6">

          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex flex-col items-center text-xs hover:text-blue-300 transition"
            >
              {item.icon}
              <span className="mt-1">{item.name}</span>
            </Link>
          ))}

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-blue-950 px-4 pb-4 space-y-4">

          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center gap-3"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

        </div>
      )}

    </nav>
  );
}