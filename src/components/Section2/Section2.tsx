import React from "react";
import Title from "../Title/Title";
import { motion } from "framer-motion";

type Section2Props = unknown;

const Section2: React.FC<Section2Props> = () => {
  return (
    <section
      id="solutions"
      className="relative w-full mt-5 h-auto pb-32 flex items-center justify-center"
    >
      <Title
        subtitle="No more waste"
        title="Pick the Sun"
        content="Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin."
        alignment="center"
        titleColor=""
      />
      <div className="absolute bottom-[20px] w-full h-fit z-0">
        <motion.img
          whileInView={{ y: 300, transition: { duration: 4 } }}
          src="assets/Ellipse 14.svg"
          alt="orange ellipse"
          className="absolute -left-20 -bottom-40 w-[250px] md:w-fit h-[300px] md:h-[350px] object-cover z-0"
        />
        <motion.img
          whileInView={{ y: -50, transition: { duration: 3 } }}
          src="assets/Ellipse 15.svg"
          alt="purple ellipse"
          className="absolute w-1/5 right-0 -bottom-14 md:-bottom-[400px]"
        />
        <img
          src="assets/Desktop.svg"
          alt="desktop screen"
          className="absolute md:w-3/4 lg:max-w-4xl w-full object-cover left-1/2 transform -translate-x-1/2"
        />
      </div>
    </section>
  );
};

export default Section2;
