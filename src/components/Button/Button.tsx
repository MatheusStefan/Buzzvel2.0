import React, { useState } from "react";
import { useModal } from "../../Context/ModalContext";

type ButtonProps = {
  text?: string;
  textColor?: string;
  borderColor?: string;
  bgColor: string;
  colorToChange?: string;
  orientation?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps & { onClick?: () => void }> = ({
  text = "Request a Quote",
  textColor = "#581C87",
  borderColor = "#581C87",
  bgColor,
  colorToChange,
  orientation = "0",
  ariaLabel,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useModal();

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={openModal}
      style={{
        backgroundColor: isHovered ? textColor : bgColor,
        color: isHovered ? colorToChange : textColor,
        border: `2px solid ${borderColor}`
      }}
      aria-label={ariaLabel}
      className="
        w-[306px] 
        h-[64px] 
        px-[24px] 
        py-[20px] 
        rounded-[100px]
        opacity-100
        font-bold
        text-[24px]
        flex
        items-center
        justify-around
        transition-all
        duration-300
        group
        shadow-custom
        w-fit
        gap-4
        font-roboto
        z-20
      "
    >
      {text}
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fill: isHovered ? colorToChange : textColor,
          transform: `rotate(${orientation}deg)`
        }}
        className="transition-all duration-300 align-middle mt-1"
      >
        <path d="M11.086 5.65698L7.136 1.70698C6.95384 1.51838 6.85305 1.26578 6.85533 1.00358C6.8576 0.741382 6.96277 0.490569 7.14818 0.305161C7.33359 0.119753 7.5844 0.0145843 7.8466 0.0123059C8.1088 0.0100274 8.3614 0.110822 8.55 0.29298L14.207 5.94998C14.3002 6.04263 14.3741 6.1528 14.4246 6.27413C14.4751 6.39546 14.501 6.52557 14.501 6.65698C14.501 6.78839 14.4751 6.9185 14.4246 7.03984C14.3741 7.16117 14.3002 7.27133 14.207 7.36398L8.55 13.021C8.45775 13.1165 8.34741 13.1927 8.2254 13.2451C8.1034 13.2975 7.97218 13.3251 7.8394 13.3263C7.70662 13.3274 7.57494 13.3021 7.45205 13.2518C7.32915 13.2016 7.2175 13.1273 7.12361 13.0334C7.02971 12.9395 6.95546 12.8279 6.90518 12.705C6.8549 12.5821 6.8296 12.4504 6.83075 12.3176C6.8319 12.1848 6.85949 12.0536 6.9119 11.9316C6.96431 11.8096 7.04049 11.6993 7.136 11.607L11.086 7.65698H1.5C1.23478 7.65698 0.98043 7.55162 0.792893 7.36409C0.605357 7.17655 0.5 6.9222 0.5 6.65698C0.5 6.39177 0.605357 6.13741 0.792893 5.94987C0.98043 5.76234 1.23478 5.65698 1.5 5.65698H11.086Z" />
      </svg>
    </button>
  );
};

export default Button;
