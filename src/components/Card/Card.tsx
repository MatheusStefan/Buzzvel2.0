import { forwardRef } from "react";
import { User } from "../../types/userTypes";

type CardProps = {
  user: User;
};

const Card = forwardRef<HTMLDivElement, CardProps>(({ user }, ref) => {

  return (
    <div
      ref={ref}
      className="flex pb-4 items-between justify-center p-4 w-[250px] h-[359px] md:h-[442px] rounded-xl bg-white hover:scale-105 transitions-all duration-300 z-20 cursor-default"
    >
      <div className="flex flex-col justify-between">
        <p className="font-roboto w-fit text-start text-black">
          {`"${user.quote}"`}
        </p>
        <div className="flex justify-start items-center gap-4">
          <img src={`assets/users/${user.userPhoto}.svg`} alt={user.alt} className="object-cover w-[50px] h-[50px]"/>
          <div>
            <p className="font-normal text-lg text-dark-blue">
              {user.userName}
            </p>
            <span className="text-light-grey font-normal">
              {user.userDetails}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
