const excluirPropriedades = (objeto, propriedades) => {

    for(i of propriedades){
        delete objeto[i]
    }
    
    return objeto

   };

   var exemplo = { a: 1, b: 2, c: true};

   console.log(excluirPropriedades(exemplo, ['b']));

   exemplo = { a: 1, b: 2, c: true};

   console.log(excluirPropriedades(exemplo, ['b', 'a']));
   