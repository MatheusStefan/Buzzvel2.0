import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

type Section1 = unknown;

const Section1: React.FC<Section1> = () => {
  return (
    <>
      <div id="products" className="flex flex-col w-full md:mt-5">
        <div className="flex flex-col md:flex-row items-start justify-start">
          <div className="absolute right-0 top-0 mb">
            <img
              src="src/assets/Group 57.png"
              alt="guy working"
              className="object-cover w-[307px] md:w-[400px] lg:w-[673px] object-center"
            />
          </div>
          <div className="flex flex-col mx-4 text-center items-center justify-center mx-1 mt-80 md:mt-0 md:items-center md:w-[350px] lg:w-[300px] md:m-4 lg:mx-14 xl:mx-[140px] 2xl:mx-[270px]">
            <h1 className="font-roboto font-bold text-[40px] md:text-[50px] text-center md:text-start leading-10 mb-6 leading-[50px] font-extrabold">
              Get the Sun to Power Your Home
            </h1>
            <p className="my-6 leading-7">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.
            </p>
            <Button
              text="Request a Quote"
              textColor="#581C87"
              colorToChange="#FCD34D"
              borderColor="#581C87"
              bgColor=""
            />
            <div className="mb-12">
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
        </div>
      </div>
    </>
  );
};

export default Section1;
