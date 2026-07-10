"use client";

import { useEffect, useRef } from "react";

export function AmbientSoundToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function start() {
      audio?.play().catch(() => {});
    }

    window.addEventListener("click", start);
    window.addEventListener("keydown", start);
    window.addEventListener("touchstart", start);

    return () => {
      window.removeEventListener("click", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("touchstart", start);
    };
  }, []);

  return <audio ref={audioRef} src="/audio/ambient-background.mp3" loop preload="auto" />;
}
