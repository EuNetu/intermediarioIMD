export class Colecao<T>{
    lista: T[] = [];

    adicionar(arg: T){
        this.lista.push(arg);
    }

    mostrarTodos(){
        this.lista.forEach(e => console.log(e));
    }

}