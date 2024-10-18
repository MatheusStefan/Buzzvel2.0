import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Card from "../Card/Card";

type Section5Props = unknown;

const Section5: React.FC<Section5Props> = () => {
  return (
    <div
      id="configure"
      className="bg-purple w-full h-auto py-20 px-4 flex flex-col items-center justify-center md:justify-start"
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
      <div className="flex flex-col md:flex-row justify-end md:justify-evenly gap-4 w-fit h-auto z-10 mt-6">
        <Card
          user={{
            quote:
              "“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.",
            userPhoto: "Rwanda Melflor",
            userName: "Rwanda Melflor",
            userDetails: "zerowaste.com",
          }}
        />
      </div>
    </div>
  );
};

export default Section5;
