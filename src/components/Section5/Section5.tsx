import React, { useContext } from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Carrousel from "../Carrousel/Carrousel";
import { users } from "../../data/users";
import { ThemeContext } from "../../Context/ThemeContext";

type Section5Props = unknown;

const Section5: React.FC<Section5Props> = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="configure"
      className="bg-purple w-full h-auto pt-20 pb-40 pl-4 flex flex-col items-center justify-center md:justify-start"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mr-4 gap-6">
        <Title
          subtitle="Join other Sun harvesters"
          title="Make something awesome"
          titleColor="white"
          content="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
        />
        <Button
              text="Request a Quote"
              bgColor={theme === "dark" ? "" : ""}
              borderColor={theme === "dark" ? "#fff" : "#FCD34D"}
              textColor={theme === "dark" ? "#fff" : "#FCD34D"}
              colorToChange={theme === "dark" ? "#581C87" : "#78350F"}
              ariaLabel="Request a Quote"
            />
      </div>
      <Carrousel users={users} />
    </section>
  );
};

export default Section5;
