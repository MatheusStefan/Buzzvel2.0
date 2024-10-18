import React from "react";

type TitleProps = {
  subtitle: string;
  title: string;
  content: string;
};

const Title: React.FC<TitleProps> = ({subtitle, title, content}) => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-roboto md:text-[32px] lg:text-[36px] text-orange font-medium">
        {subtitle}
      </p>
      <h2 className="font-roboto text-[32px] md:text-[64px] lg:text-[72px] font-bold m-0">
        {title}
      </h2>
      <p className="font-roboto m-2">
        {content}
      </p>
    </div>
  );
};

export default Title;
