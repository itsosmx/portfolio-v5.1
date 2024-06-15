import { cn } from "@/utils";
import React from "react";

export default function VideoBackground({ src, className }: { src: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("h-full w-full absolute top-0 left-0 -z-10", className)}>
      <video loop muted autoPlay playsInline preload="false" className="w-full object-cover opacity-10 -z-10 absolute top-0 left-0" src={src}></video>
    </div>
  );
}
