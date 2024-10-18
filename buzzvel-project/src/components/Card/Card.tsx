import React from "react";
import { User } from "../../types/userTypes";

type CardProps = {
  user: User;
};

const Card: React.FC<CardProps> = ({ user }) => {
  return (
    <div className="flex pb-2 items-center p-4 justify-start w-full md:w-[320px] md:h-[400px] bg-white rounded-xl">
      <div className="flex flex-col md:flex-row ml-4">
        <p className="font-roboto mb-6 w-fit text-start">
          {`"${user.quote}"`}
        </p>
        <div className="flex justify-start items-center gap-4">
          <img src={`src/assets/${user.userPhoto}.png`} alt="women smiling" />
          <div>
            <p className="text-black text-dark-blue font-normal text-lg">
              {user.userName}
            </p>
            <span className="text-light-grey font-normal">{user.userDetails}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
