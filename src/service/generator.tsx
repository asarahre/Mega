import { CardProps } from "../components/Card";

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

export function atribuiJogo() {
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
