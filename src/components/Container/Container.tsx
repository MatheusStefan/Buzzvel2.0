import React, { useContext } from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { ThemeContext } from "../../Context/ThemeContext";
type ContainerProps = unknown;

const Container: React.FC<ContainerProps> = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="bg-purple w-full h-[500px] flex flex-col md:flex-row items-center md:items-start justify-start md:justify-evenly relative">
        <Title
          subtitle={"Get the Sun to power your home"}
          title={"All the power that you need for your house is now available"}
          content={""}
          titleColor="white"
        />
        <div className="flex flex-col items-center justify-center mt-6">
        <Button
              text="Request a Quote"
              bgColor={theme === "dark" ? "" : ""}
              borderColor="#FCD34D"
              textColor="#FCD34D"
              colorToChange="#78350F"
              ariaLabel="Request a Quote"
            />
          <p className="text-white my-4 z-20">Egestas fringilla aliquam leo</p>
          <img
            src="assets/shapes/purple-half-moon.svg"
            alt="purple ellipse"
            className="hidden md:flex md:w-2/5 object-cover absolute bottom-0 md:top-0 right-0 transform md:rotate-0 z-0"
          />
        </div>
      </div>
      <div className="flex justify-center bg-purple items-center w-full relative">
        <img
          src="assets/utility/Macbook.svg"
          alt="macbook-icon"
          className="w-3/5 z-10"
        />
        <img
          src="assets/shapes/purple-half-moon.svg"
          alt="purple ellipse"
          className="w-3/4 h-full md:hidden absolute bottom-0 left-0 md:top-16 transform rotate-180 md:rotate-0 z-0"
        />
      </div>
    </>
  );
};

export default Container;
