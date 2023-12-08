import { NetworkInterfaceInfoIPv4 } from "os";
import React from "react";

export interface CardProps {
  nome: string;
  numeros: string[];
}

const Card: React.FC<CardProps> = ({ nome, numeros }) => {
  return (
    <>
      <div className="flex w-auto flex-col text-2xl mt-4 ">
        <p>{nome}</p>

        <div className="flex flex-row gap-[2px] md:gap-2 font-normal">
          {numeros.map((numero, key) => (
            <div
              key={key}
              className="flex items-center justify-center rounded-full text-lg md:text-2xl w-11 h-11 md:w-16 md:h-16  bg-gradient-to-br from-sky-300 via-sky-400 to-purple-700 "
            >
              <p> {numero}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
