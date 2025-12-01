import React from "react";
import { motion } from "framer-motion";

const PurpleBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-purple-600/40 rounded-full blur-3xl"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            width: Math.random() * 300 + 50 + "px",
            height: Math.random() * 300 + 50 + "px",
          }}
        />
      ))}
    </div>
  );
};

export default PurpleBubbles;
