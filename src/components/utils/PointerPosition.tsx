import React, { useEffect } from "react";

export default function PointerPosition() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  // const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}
