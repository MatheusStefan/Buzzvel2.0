import React from "react";
import Title from "../Title/Title";

type Section3Props = unknown;

const Section3: React.FC<Section3Props> = () => {
  return (
    <div className="relative">
      <Title
        subtitle="Services"
        title="Personalized services"
        content="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
      />
      <div className="flex flex-row justify-around flex-wrap w-full mt-10">
        <div className="flex flex-col w-[100px] ml-4 pt-4">
          <p className="font-bold text-xl">Et mauris</p>
          <span className="leading-tight">
            Posuere quis sed mauris non curabitur pretium elementum eget.
            Feugiat sed maecenas eu accumsan tristique.
          </span>
        </div>

        <div className="flex flex-col w-[100px] ml-4 pt-4">
          <p className="font-bold text-xl">Eget sit</p>
          <span className="leading-tight">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.{" "}
          </span>
        </div>
        <div className="flex flex-col w-[100px] ml-4 pt-4">
          <p className="font-bold text-xl">Imperdiet pellentesque</p>
          <span className="leading-tight">
            Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
            viverra parturient tristique nulla.
          </span>
        </div>
        <div className="flex flex-col w-[100px] ml-4 pt-4">
          <p className="font-bold text-xl">Non libero</p>
          <span className="leading-tight">
            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
            ut sed eros, consectetur viverra.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section3;
