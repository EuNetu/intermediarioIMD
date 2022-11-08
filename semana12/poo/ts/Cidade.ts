export class Cidade{

  constructor(
    private _nome:string
    ) {}
  
  public get nome() : string {
    return this._nome;
  }
}