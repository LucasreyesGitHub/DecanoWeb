"use client";
import { useState, useEffect, useRef } from "react";

export default function Reels() {

  const data = [
    {
      id: 1,
      video: "/video1.mp4",
      title: "Recibimiento 🔥",
      user: "lourdesceriani",
      avatar: "/user1.jpg",
      link: "https://www.instagram.com/lourdesceriani"
    },
    {
      id: 2,
      video: "/video2.mp4",
      title: "Recibimiento brutal 🔴⚪🔵",
      user: "@bolso_pasion",
      avatar: "/user2.jpg",
      link: "https://instagram.com/bolso_pasion"
    }
  ];

  const [likes, setLikes] = useState([0, 0]);
  const [liked, setLiked] = useState([]);
  const [muted, setMuted] = useState(true);

  const videoRefs = useRef([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedVideos")) || [];
    setLiked(stored);
  }, []);

  const handleLike = (i, id) => {
    if (liked.includes(id)) return;

    const newLikes = [...likes];
    newLikes[i]++;

    const newLiked = [...liked, id];

    setLikes(newLikes);
    setLiked(newLiked);

    localStorage.setItem("likedVideos", JSON.stringify(newLiked));
  };

  const togglePlay = (i) => {
    const video = videoRefs.current[i];
    if (!video) return;

    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {data.map((v, i) => (
        <div
          key={v.id}
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => togglePlay(i)}
        >

          {/* VIDEO */}
          <video
            ref={(el) => (videoRefs.current[i] = el)}
            src={v.video}
            muted={muted}
            loop
            playsInline
            className="w-full h-[420px] object-cover"
          />

          {/* OVERLAY (NO BLOQUEA CLICK) */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* USER */}
          <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">

            <img
              src={v.avatar}
              className="w-7 h-7 rounded-full object-cover"
            />

            <a
              href={v.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium"
            >
              {v.user}
            </a>

          </div>

          {/* BOTONES DERECHA */}
          <div className="absolute right-3 bottom-16 flex flex-col items-center gap-4">

            {/* LIKE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(i, v.id);
              }}
              className={`flex flex-col items-center ${liked.includes(v.id)
                  ? "text-red-500 scale-110"
                  : "text-white"
                }`}
            >
              ❤️
              <span className="text-xs">{likes[i]}</span>
            </button>

            {/* AUDIO */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMuted(!muted);
              }}
              className="bg-black/40 p-2 rounded-full text-white"
            >
              {muted ? "🔇" : "🔊"}
            </button>

          </div>

          {/* TEXTO */}
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-sm text-white">
              {v.title}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
}
