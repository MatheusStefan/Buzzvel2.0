import React from "react";

type FooterProps = unknown;

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full p-5 gap-6 z-20">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <a
          href="#home"
          aria-label="Soller logo"
          className="font-bold text-[32px] flex dark:text-white"
        >
          soller
        </a>
        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <ul className="flex flex-row justify-between gap-6">
        <li>
          <a
            href="#"
            className="hover:text-mid-yellow transition-all duration-300"
          >
            Terms
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-mid-yellow transition-all duration-300"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-mid-yellow transition-all duration-300"
          >
            Support
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
