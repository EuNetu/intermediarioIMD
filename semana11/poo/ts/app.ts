import {MesaDeJantar} from './MesaDeJantar'
import {Estudante} from './Estudante'

// Atividade 1
const mesaDeMetal = new MesaDeJantar('metal', 8, 100)
const mesaDeMadeira = new MesaDeJantar('madeira', 6)
const mesaDeVidro = new MesaDeJantar('vidro')

mesaDeMetal.detalhar()
mesaDeMadeira.detalhar()
mesaDeVidro.detalhar()


// Atividade 2

const neto = new Estudante(1, 350)
const camilla = new Estudante(2, 3500)

neto.credito = 20
camilla.credito = 365

neto.detalhar()
camilla.detalhar()