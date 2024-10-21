import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

type ButtonToggleProps = unknown;

const ButtonToggle: React.FC<ButtonToggleProps> = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleSwitch = () => setDarkMode(!darkMode);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div
      className={`w-[70px] h-[40px] ${darkMode ? "bg-white" : "bg-black"} flex ${
        darkMode ? "justify-end" : "justify-start"
      } rounded-[50px] p-[10px] cursor-pointer z-10`}
      onClick={toggleSwitch}
    >
      <motion.div
        layout
        transition={spring}
        className={`w-[20px] h-[20px] ${darkMode ? "bg-black" : "bg-white"} rounded-full z-20`}
      />
    </div>
  );
};

export default ButtonToggle;
