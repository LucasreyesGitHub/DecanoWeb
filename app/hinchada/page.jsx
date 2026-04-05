"use client";
import { useState, useEffect } from "react";

export default function Hinchada() {

  const sections = [
    {
      match: "Nacional vs Peñarol",
      videos: [
        {
          id: 1,
          video: "/video1.mp4",
          user: "lourdesceriani",
          link: "https://instagram.com/lourdesceriani"
        },
        {
          id: 2,
          video: "/video2.mp4",
          user: "bolso_pasion",
          link: "https://instagram.com/bolso_pasion"
        }
      ]
    },
    {
      match: "Nacional vs Defensor",
      videos: [
        {
          id: 3,
          video: "/video3.mp4",
          user: "nacionalfans",
          link: "https://instagram.com/nacionalfans"
        }
      ]
    }
  ];

  const [likes, setLikes] = useState({});
  const [liked, setLiked] = useState([]);

  // 🔥 INIT (MISMO SISTEMA QUE REELS)
  useEffect(() => {
    const storedLiked = JSON.parse(localStorage.getItem("likedVideos")) || [];
    const storedLikes = JSON.parse(localStorage.getItem("likesCount")) || {};

    setLiked(storedLiked);

    const initialLikes = {};
    sections.forEach(section => {
      section.videos.forEach(v => {
        initialLikes[v.id] = storedLikes[v.id] || 0;
      });
    });

    setLikes(initialLikes);
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
    <main className="max-w-6xl mx-auto p-6 text-white">

      <h1 className="text-2xl mb-8">Hinchada 🔴⚪🔵</h1>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-10">

          {/* PARTIDO */}
          <h2 className="text-lg mb-4 text-gray-300">
            {section.match}
          </h2>

          {/* VIDEOS */}
          <div className="grid md:grid-cols-3 gap-6">

            {section.videos.map((v) => (
              <div
                key={v.id}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >

                {/* VIDEO */}
                <video
                  src={v.video}
                  controls
                  className="w-full h-[300px] object-cover"
                />

                {/* USER */}
                <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded-full">
                  <a
                    href={v.link}
                    target="_blank"
                    className="text-xs"
                  >
                    @{v.user}
                  </a>
                </div>

                {/* LIKE */}
                <div className="absolute right-2 bottom-2 flex flex-col items-center">

                  <button
                    onClick={() => handleLike(v.id)}
                    className={`${
                      liked.includes(v.id)
                        ? "text-red-500"
                        : "text-white"
                    }`}
                  >
                    ❤️
                  </button>

                  <span className="text-xs">
                    {likes[v.id] || 0}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>
      ))}

    </main>
  );
}
