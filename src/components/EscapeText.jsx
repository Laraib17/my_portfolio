import React, { useState, useRef } from "react";
function EscapeText() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = rect.left + rect.width / 2 - mouseX;
    const offsetY = rect.top + rect.height / 2 - mouseY;

    setPosition({
      x: offsetX * 0.3,
      y: offsetY * 0.3,
    });
  };

  return (
    <h2
      ref={ref}
      className="text-4xl font-bold absolute transition-transform duration-100 cursor-grab merriweather-newclass-400"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseMove={handleMouseMove}
    >
      Get in touch
    </h2>
  );
}
export default EscapeText;