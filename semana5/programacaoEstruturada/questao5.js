function executarExercicio() {
    var nome = document.getElementById('nome').value;
    const texto = "Olá {USUARIO}, seja bem-vindo(a) ao sistema aulas do Instituto Metrópole Digital.";
    var resultado = texto.replace(/{USUARIO}/ig, nome);
    
    nome != "" ? document.getElementById('resultado').innerHTML = `${resultado}`: document.getElementById('resultado').innerHTML = `Escreva seu nome`;
    
}