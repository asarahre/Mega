import { FormEvent, useRef, useState } from "react";
import Card, { CardProps } from "../components/Card";
import Header from "../components/Header";
import { addParticipante, atribuiJogo } from "../service/generator";

export default function Home() {
  const [jogos, setJogos] = useState<CardProps[]>([]);
  const nomesRef = useRef<HTMLInputElement>();

  function handleClick(e: FormEvent) {
    const nomeRefval = nomesRef.current?.value;
    const jogosAr = atribuiJogo(nomeRefval + "");
    e.preventDefault();
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
          <form className="flex flex-col w-full max-w-md px-2 mt-4">
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
              Nome dos participantes
            </label>
            <textarea
              ref={nomesRef as any}
              id="message"
              className="p-3 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-700 hover:border-purple-400"
              placeholder="John Doe, John Doe"
            ></textarea>
            <button
              onClick={handleClick}
              type="submit"
              className="px-20 py-3 my-3 text-xl mt-2 text-white bg-gradient-to-br from-purple-400 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300  font-medium rounded-lg text-center "
            >
              Gerar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
