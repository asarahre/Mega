import { NetworkInterfaceInfoIPv4 } from "os";
import React from "react";

export interface CardProps {
  nome: string;
  numeros: string[];
}

const Card: React.FC<CardProps> = ({ nome, numeros }) => {
  return (
    <>
      <div className="flex w-auto flex-col text-2xl  mt-4 ">
        <p>{nome}</p>

        <div className="flex flex-row gap-2 font-normal">
          {numeros.map((numero, key) => (
            <div
              key={key}
              className="flex items-center justify-center rounded-full w-16  h-16 bg-gradient-to-br from-sky-300 via-sky-400 to-purple-700 "
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
