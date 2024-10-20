import React from "react";
import Button from "../Button/Button";

type HeaderProps = unknown;

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="font-roboto z-20 flex flex-row items-center justify-between md:justify-around w-full md:mt-4 md:mb-10">
      <nav>
        <ul className="flex md:gap-[12px] lg:gap-[24px] items-center ml-4">
          <p id="home" className="font-bold text-[32px] flex">
            soller
          </p>
          <li className="hidden md:block pt-2 hover:text-mid-yellow font-medium transition-all duration-300">
            <a href="#products" rel="noopener noreferrer" aria-label="Products">
              Products
            </a>
          </li>
          <li className="hidden md:block pt-2 hover:text-mid-yellow font-medium transition-all duration-300">
            <a href="#solutions" rel="noopener noreferrer" aria-label="Solutions">
              Solutions
            </a>
          </li>
          <li className="hidden md:block pt-2 hover:text-mid-yellow font-medium transition-all duration-300">
            <a href="#services" rel="noopener noreferrer" aria-label="Services">
              Services
            </a>
          </li>
          <li className="hidden md:block pt-2 hover:text-mid-yellow font-medium transition-all duration-300">
            <a href="#configure" rel="noopener noreferrer" aria-label="Configure">
              Configure
            </a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex lg:flex-row items-center md:gap-1 lg:gap-4 xl:gap-10">
        <div className="flex p-1 md:pb-2.5 md:flex-col items-start md:items-center w-fit group">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex mr-0 md:mr-1 transition-all duration-300 group-hover:fill-purple"
          >
            <path
              d="M4 18.59C4 18.8552 3.89464 19.1096 3.70711 19.2971C3.51957 19.4846 3.26522 19.59 3 19.59C2.73478 19.59 2.48043 19.4846 2.29289 19.2971C2.10536 19.1096 2 18.8552 2 18.59V12.5C2 6.977 6.477 2.5 12 2.5C17.523 2.5 22 6.977 22 12.5V15.586C22 15.8512 21.8946 16.1056 21.7071 16.2931C21.5196 16.4806 21.2652 16.586 21 16.586C20.7348 16.586 20.4804 16.4806 20.2929 16.2931C20.1054 16.1056 20 15.8512 20 15.586V12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5V18.59ZM4 12.5H6C6.53043 12.5 7.03914 12.7107 7.41421 13.0858C7.78929 13.4609 8 13.9696 8 14.5V19.5C8 20.0304 7.78929 20.5391 7.41421 20.9142C7.03914 21.2893 6.53043 21.5 6 21.5H4C3.46957 21.5 2.96086 21.2893 2.58579 20.9142C2.21071 20.5391 2 20.0304 2 19.5V14.5C2 13.9696 2.21071 13.4609 2.58579 13.0858C2.96086 12.7107 3.46957 12.5 4 12.5ZM4 14.5V19.5H6V14.5H4ZM18 12.5H20C20.5304 12.5 21.0391 12.7107 21.4142 13.0858C21.7893 13.4609 22 13.9696 22 14.5V19.5C22 20.0304 21.7893 20.5391 21.4142 20.9142C21.0391 21.2893 20.5304 21.5 20 21.5H18C17.4696 21.5 16.9609 21.2893 16.5858 20.9142C16.2107 20.5391 16 20.0304 16 19.5V14.5C16 13.9696 16.2107 13.4609 16.5858 13.0858C16.9609 12.7107 17.4696 12.5 18 12.5ZM18 14.5V19.5H20V14.5H18Z"
              fill="#0369A1"
              className="transition-all duration-300 group-hover:fill-mid-yellow"
            />
          </svg>

          <a
            href="tel:+555 818 282"
            className="text-light-blue md:text-xs lg:text-lg hover:text-mid-yellow transition-all duration-300 font-bold"
          >
            555 818 282
          </a>
        </div>
        <Button
          text="Request a Quote"
          bgColor={""}
          borderColor="#581C87"
          textColor="#581C87"
          colorToChange="#FCD34D"
          ariaLabel="Request a Quote"
        />
      </div>
    </header>
  );
};

export default Header;
