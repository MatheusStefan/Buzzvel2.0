import React from "react";

type FooterProps = unknown;

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full m-5 px-5 gap-6">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <a href="#home">
          <img src="src/assets/Logo-grey.png" alt="" />
        </a>
        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <ul className="flex flex-row justify-between gap-6">
        <li>
          <a
            href="#"
            className="hover:text-dark-yellow transition-all duration-300"
          >
            Terms
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-dark-yellow transition-all duration-300"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-dark-yellow transition-all duration-300"
          >
            Support
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
