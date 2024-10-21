import { forwardRef } from "react";
import { User } from "../../types/userTypes";

type CardProps = {
  user: User;
};

const Card = forwardRef<HTMLDivElement, CardProps>(({ user }, ref) => {

  return (
    <div
      ref={ref}
      className="flex pb-4 items-end p-4 justify-center w-[280px] md:w-[310px] lg:w-[364px] h-[359px] md:h-[442px] rounded-xl bg-white"
    >
      <div className="flex flex-col ml-4">
        <p className="font-roboto mb-2 md:mb-20 w-fit text-start text-black">
          {`"${user.quote}"`}
        </p>
        <div className="flex justify-start items-center gap-4">
          <img src={`assets/${user.userPhoto}.png`} alt={user.alt} />
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
