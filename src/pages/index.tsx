import { useState } from "react";
import Card, { CardProps } from "../components/Card";
import Header from "../components/Header";
import { atribuiJogo } from "../service/generator";

export default function Home() {
  const [jogos, setJogos] = useState<CardProps[]>([]);

  function handleClick() {
    const jogosAr = atribuiJogo();
    setJogos(jogosAr);
  }

  return (
    <>
      <div className="flex-1 h-full w-full ">
        <Header />
        <div className="flex flex-col items-center gap-4">
          <p className="text-4xl font-semibold ">Mega da generator</p>
          <div className="mt-4">
            {jogos.map((jogo, key) => (
              <Card key={key} nome={jogo.nome} numeros={jogo.numeros} />
            ))}
          </div>
          <button
            onClick={handleClick}
            className="px-20 py-3 my-3  text-xl  text-white bg-gradient-to-br from-purple-400 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300  font-medium rounded-lg text-center "
          >
            Gerar
          </button>
        </div>
      </div>
    </>
  );
}
