export class Estudante{
  private _id:number;
  private _credito:number;

  constructor(id:number, credito:number){
    this._id = id;
    credito <= 0 ? this._credito = 1 : this._credito = credito;
  }

  public set credito(credito:number){
    credito <= 0 ? this._credito = 1 : this._credito = credito;
  }

  public detalhar(){
    console.log(`O aluno de id ${this._id}, tem ${this._credito} de credito.`);
  }
}