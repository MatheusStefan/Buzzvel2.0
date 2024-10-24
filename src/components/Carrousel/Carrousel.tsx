import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { User } from "../../types/userTypes";
import { ThemeContext } from "../../Context/ThemeContext";

type CarrouselProps = {
  users: User[];
};
gsap.registerPlugin(ScrollTrigger);

const Carrousel: React.FC<CarrouselProps> = ({ users }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      gsap.to(carousel, {
        x: -currentIndex * 266,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        if (index === currentIndex) {
          gsap.to(card, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(card, {
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      }
    });
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(users.length - 1);
    }
  };

  return (
    <div className="flex flex-col items-start justify-between overflow-hidden w-full p-6 mt-10">
      <div className="flex flex-row justify-start z-10">
        <div className="flex items-center justify-around" ref={carouselRef}>
          <div className="flex gap-x-4" ref={itemsRef}>
            {users.map((user, index) => (
              <Card
                user={user}
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10 items-start justify-start z-10">
        <Button
          text=""
          bgColor=""
          textColor={theme === "dark" ? "#fff" : "#FCD34D"}
          borderColor={theme === "dark" ? "#fff" : "#FCD34D"}
          colorToChange="#78350F"
          orientation="180"
          onClick={handlePrev}
          ariaLabel="arrow-left"
        />
        <Button
          text=""
          bgColor=""
          textColor={theme === "dark" ? "#fff" : "#FCD34D"}
          borderColor={theme === "dark" ? "#fff" : "#FCD34D"}
          colorToChange="#78350F"
          onClick={handleNext}
          ariaLabel="arrow-right"
        />
      </div>
    </div>
  );
};

export default Carrousel;
