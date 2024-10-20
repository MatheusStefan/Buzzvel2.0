import React from "react";

type Alignment = "center" | "left" | "right";

type TitleProps = {
  subtitle: string;
  title: string;
  titleColor?: string;
  content: string;
  alignment?: Alignment;
  alignmentMd?: Alignment;
};

const Title: React.FC<TitleProps> = ({
  subtitle,
  title,
  titleColor = "black",
  content,
}) => {
  return (
    <div
      className="w-full md:w-1/2 flex flex-col items-center md:items-start z-20"
    >
      <p className="font-roboto md:text-[18px] lg:text-[30px] leading-5 text-center md:text-start text-orange font-medium">
        {subtitle}
      </p>
      <h2
        className="font-roboto text-[32px] lg:text-[56px] leading-9 md:leading-[61px] w-[300px] md:w-full font-bold mt-2 m-0 mb-10 text-center md:text-start"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      <p className="font-roboto leading-5 md:leading-9 text-center md:text-start w-full" style={{ color: titleColor }}>
        {content}
      </p>
    </div>
  );
};

export default Title;
