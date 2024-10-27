import React, { useEffect, useRef } from "react";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import gsap, { ScrollTrigger } from "gsap/all";

type Services2Props = unknown;

gsap.registerPlugin(ScrollTrigger);

const Services2: React.FC<Services2Props> = () => {
  const imagesRef = useRef(null);

  const mm = gsap.matchMedia();

  useEffect(() => {
    mm.add("(max-width: 768px)", () => {
      gsap.to(imagesRef.current, {
        y: 120,
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });
    
    mm.add("(min-width: 1024px)", () => {
      gsap.to(imagesRef.current, {
        y: 200,
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    })

    return () => mm.revert();
  }, [mm]);

  return (
    <div className="relative flex flex-col md:flex-row md:justify-end items-end gap-6 mb-[100px] md:mt-[50px] md:mb-[300px]">
      <div className="flex flex-col items-center md:items-start md:ml-6 w-full md:w-4/5">
        <Title
          subtitle="System features"
          title="Powerful features"
          content="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          alignment="center"
          alignmentMd="left"
          titleColor=""
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 3 } }}
          className="flex flex-row justify-around md:justify-start flex-wrap w-full mt-10 gap-10"
        >
          <div className="flex flex-col w-2/5 pt-4">
            <p className="font-bold text-xl">Erat sit</p>
            <span className="leading-4 pt-3">
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </span>
          </div>

          <div className="flex flex-col w-2/5 pt-4">
            <p className="font-bold text-xl">Ullamcorper arcu</p>
            <span className="leading-4 pt-3">
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </span>
          </div>
          <div className="flex flex-col w-2/5 pt-4">
            <p className="font-bold text-xl">Et pellentesque</p>
            <span className="leading-4 pt-3">
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </span>
          </div>
          <div className="flex flex-col w-2/5 pt-4">
            <p className="font-bold text-xl">Amet egestas</p>
            <span className="leading-4 pt-3">
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </span>
          </div>
        </motion.div>
      </div>
      <div
        className="relative flex justify-end items-center my-8"
        ref={imagesRef}
      >
        <img
          src="assets/shapes/yellow-organic-shape.svg"
          className="w-4/5 md:w-full flex object-cover z-0"
          alt="yellow organic shape"
        ></img>
        <img
          src="assets/utility/Phone-2.svg"
          className="w-3/5 md:w-4/5 h-auto object-cover z-10 absolute right-0 top-20 md:top-40"
          alt="smartphone example"
        ></img>
      </div>
    </div>
  );
};

export default Services2;
