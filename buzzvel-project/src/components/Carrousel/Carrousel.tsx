import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { User } from "../../types/userTypes";

type CarrouselProps = {
  users: User[];
};
gsap.registerPlugin(ScrollTrigger);

const Carrousel: React.FC<CarrouselProps> = ({ users }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (cardsRef.current) {
        const cardSize = cardsRef.current[0]!.getBoundingClientRect().width;
        setCardWidth(cardSize);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel && cardWidth > 0) {
      gsap.to(carousel, {
        x: -currentIndex * cardWidth,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [cardWidth, currentIndex]);
    
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
    <>
      <div className="flex flex-row w-full justify-start overflow-x-hidden z-20">
        <div className="flex flex-row justify-start" ref={carouselRef}>
          <div className="flex gap-x-2" ref={itemsRef}>
            {users.map((user, index) => (
              <Card
                user={user}
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
              />
            ))}
          </div>
          /
        </div>
      </div>
      <div className="flex gap-4 items-start justify-start z-10">
        <Button
          text=""
          bgColor=""
          textColor="#FCD34D"
          borderColor="#FCD34D"
          colorToChange="#78350F"
          orientation="180"
          onClick={handlePrev}
        />
        <Button
          text=""
          bgColor=""
          textColor="#FCD34D"
          borderColor="#FCD34D"
          colorToChange="#78350F"
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default Carrousel;
