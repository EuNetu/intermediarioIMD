import { Jogador } from "./Jogador";
import { Volante } from "./Volante";


//Atvidade 1
var jogador = new Jogador()
var volante = new Volante()

jogador.mover()
volante.mover()

//Atividade 2

function adicionar_valor(inicial, adicional){
  if(adicional <= 0 ){
    throw new Error('Somente valores positivos devem ser adicionados ao valor inicial')
  }else{
    return inicial + adicional
  }
}

try {
  console.log(adicionar_valor(10,20))
  console.log(adicionar_valor(10,-20))
} catch (e) {
  console.log(e)
}