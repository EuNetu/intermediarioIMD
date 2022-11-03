export class MesaDeJantar{
  private _material:String;
  private _lugares:number;
  private _preco:number;

  constructor(material:String, lugares?:number, preco?:number){
    this._material = material;
    lugares == undefined ? this._lugares = 4 : this._lugares = lugares;
    preco == undefined ? this._preco = 0 : this._preco = preco;
  }

  public detalhar(){
    console.log(`O material da mesa é ${this._material}, tem ${this._lugares} lugares e custa ${this._preco} reais.`);
  }
}