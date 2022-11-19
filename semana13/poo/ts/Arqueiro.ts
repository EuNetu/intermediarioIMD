import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem{
  atacar(){
    console.log("Recebi 20 de dano")
  }
}