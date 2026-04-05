"use client";
import { useState, useEffect, useRef } from "react";

export default function Reels() {

  const data = [
    {
      id: 1,
      video: "/video1.mp4",
      title: "Recibimiento 🔥",
      user: "lourdesceriani",
      link: "https://www.instagram.com/lourdesceriani"
    },
    {
      id: 2,
      video: "/video2.mp4",
      title: "Recibimiento brutal 🔴⚪🔵",
      user: "bolso_pasion",
      link: "https://instagram.com/bolso_pasion"
    }
  ];

  const [likes, setLikes] = useState({});
  const [liked, setLiked] = useState([]);
  const [muted, setMuted] = useState(true);

  const videoRefs = useRef([]);

  // 🔥 INIT
  useEffect(() => {
    const storedLiked = JSON.parse(localStorage.getItem("likedVideos")) || [];
    const storedLikes = JSON.parse(localStorage.getItem("likesCount")) || {};

    const initialLikes = {};
    data.forEach(v => {
      initialLikes[v.id] = storedLikes[v.id] || 0;
    });

    setLikes(initialLikes);
    setLiked(storedLiked);
  }, []);

  // ❤️ LIKE
  const handleLike = (id) => {
    if (liked.includes(id)) return;

    const newLikes = {
      ...likes,
      [id]: (likes[id] || 0) + 1
    };

    const newLiked = [...liked, id];

    setLikes(newLikes);
    setLiked(newLiked);

    localStorage.setItem("likedVideos", JSON.stringify(newLiked));
    localStorage.setItem("likesCount", JSON.stringify(newLikes));
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {data.map((v, i) => (
        <div
          key={v.id}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >

          {/* 🎥 VIDEO */}
          <video
            ref={(el) => (videoRefs.current[i] = el)}
            src={v.video}
            muted={muted}
            loop
            playsInline
            controls
            className="w-full h-[420px] object-cover"
          />

          {/* 👤 USER */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full z-10">

            <a
              href={v.link}
              target="_blank"
              className="text-sm font-semibold text-white hover:text-blue-400"
            >
              @{v.user}
            </a>

          </div>

          {/* ❤️ BOTONES (NO BLOQUEADOS) */}
          <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 z-10">

            <button
              onClick={() => handleLike(v.id)}
              className={`flex flex-col items-center ${
                liked.includes(v.id)
                  ? "text-red-500 scale-110"
                  : "text-white"
              }`}
            >
              ❤️
              <span className="text-xs">
                {likes[v.id] || 0}
              </span>
            </button>

            <button
              onClick={() => setMuted(!muted)}
              className="bg-black/50 p-2 rounded-full text-white"
            >
              {muted ? "🔇" : "🔊"}
            </button>

          </div>

          {/* 📝 TEXTO (NO BLOQUEA NADA) */}
          <div className="absolute bottom-3 left-3 max-w-[70%] pointer-events-none z-10">
            <p className="text-sm text-white font-medium drop-shadow-lg">
              {v.title}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
}
