import { Animal } from "./Animal";

export class Cachorro extends Animal{
  constructor(grupo = 'mamífero'){
    super(grupo)
  }

  exibirInfo(){
    console.log(this.grupo)
  }
}