import React, { useContext } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import { ThemeContext } from "../../Context/ThemeContext";

type Section1 = unknown;

const Section1: React.FC<Section1> = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section id="products" className="flex flex-col w-full md:mt-8">
        <div className="flex flex-col md:flex-row items-start justify-start">
          <div className="absolute right-0 top-0 mb">
            <img
              src="assets/utility/guy-working.webp"
              alt="guy working"
              className="object-cover w-[307px] md:w-[400px] object-center z-0"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
            className="flex flex-col mx-4 items-center justify-center mt-80 md:mt-0 md:items-start md:w-[350px] lg:w-[500px] md:m-4 lg:mx-14 xl:mx-[140px] 2xl:mx-[270px] z-20"
          >
            <h1 className="font-roboto font-bold text-[40px] md:text-[50px] text-center md:text-start leading-10 mb-6 leading-[50px] font-extrabold">
              Get the{" "}
              <b className="hover:text-mid-yellow transition-all duration-300 cursor-default">
                Sun
              </b>{" "}
              to Power Your Home
            </h1>
            <p className="my-6 leading-7">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.
            </p>
            <Button
              text="Request a Quote"
              bgColor=""
              borderColor=""
              textColor={theme === "dark" ? "#fff" : "#581C87"}
              colorToChange={theme === "dark" ? "#581C87" : "#FCD34D"}
              ariaLabel="Request a Quote"
            />
            <div className="my-12">
              <Card
                user={{
                  quote:
                    "“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.",
                  userPhoto: "Courtney Henry",
                  userName: "Rwanda Melflor",
                  userDetails: "zerowaste.com",
                  alt: "user-picture",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Section1;
