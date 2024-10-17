import React from "react";

type CardProps = unknown;

const Card: React.FC<CardProps> = () => {
  return (
    <div className="flex pb-2 items-center justify-start mx-4">
      <img src="src/assets/User Thumb.png" alt="women smiling" />
      <div className="flex flex-col ml-4">

      <p className="text-black text-dark-blue font-normal text-lg">Rwanda Melflor</p>
      <span className="text-light-grey font-normal">zerowaste.com</span>
      </div>
    </div>
  );
};

export default Card;
