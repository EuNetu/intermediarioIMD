import { Animal } from "./Animal";
import { Cidade } from "./Cidade";
import { Desktop } from "./Desktop";
import { Laptop } from "./Laptop";
import { Pessoa } from "./Pessoa";


// Atividade 1
const natal = new Cidade("Natal");
const joao = new Pessoa("João", natal);
const toto = new Animal("Totó", joao);

console.log(joao.nome)
console.log(joao.cidade.nome)


// Atividade 2
const laptop = new Laptop();
const desktop = new Desktop();

laptop.memoria = 8
desktop.processador = "I7"

console.log(laptop.memoria)
console.log(laptop.bateria_watts)

console.log(desktop.processador)
console.log(desktop.cabine)