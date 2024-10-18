import React from 'react';
import Title from '../Title/Title';

type Section4Props = unknown

const Section4: React.FC<Section4Props> = () => {
    return (
      <div className="relative flex flex-col md:flex-row md:justify-end items-end gap-16 md:my-[50px]">
      <div className="flex flex-col items-center md:items-start md:ml-6 w-full md:w-4/5">
        <Title
          subtitle="Services"
          title="Personalized services"
          content="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          alignment="center"
          alignmentMd="left"
        />
        <div className="flex flex-row justify-around md:justify-start flex-wrap w-full mt-10 gap-10">
          <div className="flex flex-col w-2/5 pt-4">
            <p className="font-bold text-xl">Et mauris</p>
            <span className="leading-4 pt-3">
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </span>
          </div>

          <div className="flex flex-col w-2/5 pt-4">
            <p className="font-bold text-xl">Eget sit</p>
            <span className="leading-4 pt-3">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </span>
          </div>
          <div className="flex flex-col w-2/5 pt-4">
            <p className="font-bold text-xl">Imperdiet pellentesque</p>
            <span className="leading-4 pt-3">
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
              viverra parturient tristique nulla.
            </span>
          </div>
          <div className="flex flex-col w-2/5 pt-4">
            <p className="font-bold text-xl">Non libero</p>
            <span className="leading-4 pt-3">
              Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
              ut sed eros, consectetur viverra.
            </span>
          </div>
        </div>
      </div>
      <div className="relative flex justify-end items-center my-8">
        <img
          src="/src/assets/Rectangle 16.svg"
          className="w-full md:w-m-4/5 h-auto flex object-cover z-0"
          alt="purple organic shape"
        ></img>
        <img
          src="/src/assets/Mobile-App-Placeholder-2.svg"
          className="w-3/5 h-auto object-cover z-10 absolute left-20 top-20"
          alt="smartphone example"
        ></img>
      </div>
    </div>
    );
};

export default Section4;