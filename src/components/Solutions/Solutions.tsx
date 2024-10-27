import React, { useRef } from "react";
import Title from "../Title/Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

type SolutionsProps = unknown;

gsap.registerPlugin(ScrollTrigger);

const Solutions: React.FC<SolutionsProps> = () => {
  const yellowCircleRef = useRef<HTMLImageElement>(null);
  const purpleCircleRef = useRef<HTMLImageElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (yellowCircleRef.current) {
      gsap.to(yellowCircleRef.current, {
        y: 400,
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }

    if (purpleCircleRef.current) {
      gsap.to(purpleCircleRef.current, {
        y: -300,
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }
  }, []);

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
      <div className="absolute bottom-[20px] w-full h-fit z-0" ref={imagesRef}>
        <img
          src="assets/shapes/yellow-ellipse.svg"
          alt="orange ellipse"
          className="absolute -left-20 -bottom-40 w-[250px] md:w-fit h-[300px] md:h-[350px] object-cover z-0"
          ref={yellowCircleRef}
        />
        <img
          src="assets/shapes/purple-ellipse.svg"
          alt="purple ellipse"
          className="absolute w-1/5 right-0 -bottom-14 md:-bottom-[400px]"
          ref={purpleCircleRef}
        />
        <img
          src="assets/utility/desktop-screen.svg"
          alt="desktop screen"
          className="absolute md:w-3/4 lg:max-w-4xl w-full object-cover left-1/2 transform -translate-x-1/2"
        />
      </div>
    </section>
  );
};

export default Solutions;
