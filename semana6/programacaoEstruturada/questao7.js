function executarExercicio() {
    var number1 = Number(document.getElementById('number1').value);

    document.getElementById('resultado').innerHTML = descobrirDDD(number1);
}

function descobrirDDD(x) {
    var result;
    switch (x) {
        case 11: result = ' São Paulo'
            break;
        case 21: result = ' Rio de Janeiro'
            break;
        case 27: result = 'Espírito Santo'
            break;
        case 31: result = ' Minas Gerais'
            break;
        case 41: result = 'Paraná'
            break;
        case 47: result = 'Santa Catarina'
            break;
        case 51: result = ' Rio Grande do Sul'
            break;
        case 61: result = 'Distrito Federal'
            break;
        case 62: result = 'Goiás'
            break;
        case 63: result = 'Tocantins'
            break;
        case 65: result = ' Mato Grosso'
            break;
        case 67: result = 'Mato Grosso do Sul'
            break;
        case 68: result = ' Acre'
            break;
        case 69: result = 'Rondônia'
            break;
        case 71: result = 'Bahia'
            break;
        case 79: result = 'Sergipe'
            break;
        case 81: result = 'Pernambuco'
            break;
        case 82: result = 'Alagoas'
            break;
        case 83: result = 'Paraíba'
            break;
        case 84: result = 'Rio Grande do Norte'
            break;
        case 85: result = 'Ceará'
            break;
        case 86: result = 'Piauí'
            break;
        case 91: result = 'Pará'
            break;
        case 92: result = 'Amazonas'
            break;
        case 95: result = 'Roraima'
            break;
        case 96: result = 'Amapá'
            break;
        case 98: result = 'Maranhão'
            break;
        default:
            result = 'DDD não encontrado'
            break;
    }

    return result
}