import React from "react";

export default function VideoBackground({ src }: { src: string }) {
  return (
    <div className="h-full w-full absolute top-0 left-0 -z-10">
      <video loop muted autoPlay playsInline preload="false" className="w-full object-cover opacity-10 -z-10 absolute top-0 left-0" src={src}></video>
    </div>
  );
}
