import { useState } from "react";
import Card, { CardProps } from "../components/Card";
import Header from "../components/Header";

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
          <p className="text-4xl font-semibold">Mega da generator</p>
          <div className="mt-4"></div>
          {jogos.map((jogo, key) => (
            <Card key={key} nome={jogo.nome} numeros={jogo.numeros} />
          ))}
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

function generate() {
  const valor = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
  return valor;
}

function geraNumeros() {
  let numeros: string[] = [];

  for (let i = 1; i <= 6; i++) {
    let num = generate();
    const numStr = String(num).padStart(2, "0");

    if (numeros.includes(numStr)) {
      i--;
      console.log("repetiu", numStr);
      continue;
    }

    numeros.push(numStr);
  }

  return numeros;
}

function geraNumeros2(limit: number) {
  const numeros: string[] = [];

  while (numeros.length < limit) {
    const num = generate();
    const numStr = String(num).padStart(2, "0");
    if (numeros.includes(numStr)) continue;

    numeros.push(numStr);
  }

  return numeros;
}

function atribuiJogo() {
  let participantes = [
    "Bento",
    "Caio",
    "Daniel",
    "Deivid",
    "Diogo",
    "Fabio",
    "Fatima",
    "Gabriel",
    "Geile",
    "Heduardo",
    "Itamar",
    "Jheine",
    "Joyce",
    "Juliano",
    "Keyla",
    "Keynes",
    "Leo",
    "Lucas Gabriel",
    "Marcio",
    "Mateus Fernandes",
    "Mathues Friedrich",
    "Pethrus",
    "Priscila",
    "Rafael",
    "Sarah",
    "Vitor",
    "Wesley",
  ];
  let jogosFeitos: CardProps[] = [];

  participantes.map((participante) => {
    const numeros = geraNumeros2(6);

    const jogo = { nome: participante, numeros };
    jogosFeitos.push(jogo);
  });

  jogosFeitos.map(console.log);

  return jogosFeitos;
}
