import React from "react";

type Alignment = "center" | "left" | "right";


type TitleProps = {
  subtitle: string;
  title: string;
  content: string;
  alignment?: Alignment;
  alignmentMd?: Alignment;
};

const Title: React.FC<TitleProps> = ({
  subtitle,
  title,
  content,
  alignment = "center",
  alignmentMd = alignment,
}) => {
  const alignmentClasses: Record<Alignment, string> = {
    center: "items-center",
    left: "items-start",
    right: "items-end",
  };
  return (
    <div
      className={`flex flex-col ${alignmentClasses[alignment]} ${alignmentClasses[alignmentMd]} md:${alignmentClasses[alignmentMd]}`}
    >
      <p className="font-roboto md:text-[32px] lg:text-[36px] text-orange font-medium">
        {subtitle}
      </p>
      <h2 className="font-roboto text-[32px] md:text-[64px] lg:text-[72px] font-bold m-0">
        {title}
      </h2>
      <p className="font-roboto m-2 text-center">{content}</p>
    </div>
  );
};

export default Title;
