import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem{
  atacar(){
    console.log("Recebi 10 de dano")
  }
}