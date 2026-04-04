"use client";
import { useRef, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Hinchada() {

  const data = [
    {
      id: 1,
      video: "/video1.mp4",
      user: "lourdesceriani",
      link: "https://instagram.com/lourdesceriani"
    },
    {
      id: 2,
      video: "/video2.mp4",
      user: "@bolso_pasion",
      link: "https://instagram.com/bolso_pasion"
    }
  ];

  const videoRefs = useRef([]);
  const [muted, setMuted] = useState(true);

  const togglePlay = (i) => {
    const video = videoRefs.current[i];
    if (!video) return;

    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <main>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl mb-6">🎥 Hinchada</h1>

        <div className="grid md:grid-cols-3 gap-4">

          {data.map((v, i) => (
            <div
              key={v.id}
              className="relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => togglePlay(i)}
            >

              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={v.video}
                muted={muted}
                loop
                className="w-full h-[250px] object-cover"
              />

              {/* USER */}
              <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm">
                <a href={v.link} target="_blank">
                  {v.user}
                </a>
              </div>

              {/* AUDIO */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMuted(!muted);
                }}
                className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded"
              >
                {muted ? "🔇" : "🔊"}
              </button>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}