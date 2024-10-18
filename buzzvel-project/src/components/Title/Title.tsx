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
      className="w-3/4 flex flex-col items-center md:items-start"
    >
      <p className="font-roboto md:text-[18px] lg:text-[36px] text-center md:text-start text-orange font-medium">
        {subtitle}
      </p>
      <h2
        className="font-roboto text-[32px] lg:text-[56px] leading-9 w-[300px] md:w-[390px] font-bold m-0 text-center md:text-start"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      <p className="font-roboto text-center md:text-start w-full" style={{ color: titleColor }}>
        {content}
      </p>
    </div>
  );
};

export default Title;
