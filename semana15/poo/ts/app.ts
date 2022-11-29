import { Livro } from "./Livro";
import { Pet } from "./Pet";
import { Colecao } from "./Colecao";
import { Receita } from "./Receita";
import { Situacao } from "./Situacao";
import { TipoPrato } from "./TipoPrato";

//Atividade 1
let sanduba:Receita = {
  situacao: Situacao.EmPreparo,
  tipo_prato: TipoPrato.Sanduiche
}

//Atividade 2

const meusLivrosPrediletos = new Colecao<Livro>();
const animais = new Colecao<Pet>();

const dom_quixote = new Livro("Dom Quixote")
const a_divina_comedia = new Livro("A Divina Comédia")
meusLivrosPrediletos.adicionar(dom_quixote)
meusLivrosPrediletos.adicionar(a_divina_comedia)

const toto = new Pet("Totó");
const fofo = new Pet("Fofo");
animais.adicionar(toto);
animais.adicionar(fofo);

meusLivrosPrediletos.mostrarTodos();
animais.mostrarTodos();