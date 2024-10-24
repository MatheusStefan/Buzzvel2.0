import React, { useContext } from "react";
import { motion } from 'framer-motion';
import { ThemeContext } from "../../Context/ThemeContext";

type ButtonToggleProps = unknown;

const ButtonToggle: React.FC<ButtonToggleProps> = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div
      className={`w-[70px] h-[40px] ${theme === 'light' ? "bg-black" : "bg-white"} flex ${
        theme === 'dark' ? "justify-end" : "justify-start"
      } rounded-[50px] p-[10px] cursor-pointer z-10`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <motion.div
        layout
        transition={spring}
        className={`w-[20px] h-[20px] ${theme === 'light' ? "bg-white" : "bg-black"} rounded-full z-20`}
      />
    </div>
  );
};

export default ButtonToggle;
