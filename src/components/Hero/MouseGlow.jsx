import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glow = useRef();

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      glow.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        {
          duration: 700,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={glow} className="mouseGlow"></div>;
}