function executarExercicio() {
    var date = new Date(document.getElementById('date').value);
    date.setHours(date.getHours() + 3)

    document.getElementById('resultado').innerHTML = `${date.toString().slice(0, 4)}`;
}