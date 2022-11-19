import { Arqueiro } from "./Arqueiro";
import { Cachorro } from "./Cachorro";
import { Guerreiro } from "./Guerreiro";
import { Personagem } from "./Personagem";


//Atividade 1
var bob = new Cachorro()

bob.exibirInfo()

//Atividade 2

function atacarPersonagem(fulano: Personagem){
  fulano.atacar()
}

var thor = new Guerreiro()
var LaraCroft = new Arqueiro()

atacarPersonagem(thor)
atacarPersonagem(LaraCroft)
