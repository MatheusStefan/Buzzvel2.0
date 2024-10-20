import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Carrousel from "../Carrousel/Carrousel";
import { users } from "../../data/users";

type Section5Props = unknown;

const Section5: React.FC<Section5Props> = () => {
  return (
    <div
      id="configure"
      className="bg-purple w-full h-auto py-20 pl-4 flex flex-col items-center justify-center md:justify-start"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full">
        <Title
          subtitle="Join other Sun harvesters"
          title="Make something awesome"
          titleColor="white"
          content="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
        />
        <Button
          text="Request a Quote"
          textColor="#FCD34D"
          borderColor="#FCD34D"
          bgColor=""
          colorToChange="#78350F"
        />
      </div>
      <div className="flex flex-col justify-end md:justify-start gap-4 overflow-x-auto w-full h-auto mt-6">
        <Carrousel users={users} />
      </div>
    </div>
  );
};

export default Section5;
