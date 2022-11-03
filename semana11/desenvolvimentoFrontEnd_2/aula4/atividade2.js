const transformarObjEmArray = (objeto) => {
    return Object.entries(objeto)
   };
   var exemplo = { a: 1, b: 2, c: true};
   console.log(transformarObjEmArray(exemplo));