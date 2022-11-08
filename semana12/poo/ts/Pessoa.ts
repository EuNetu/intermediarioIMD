import { Cidade } from "./Cidade";

export class Pessoa {

  constructor(
    private _nome: string,
    private _cidade: Cidade
    ) {}

  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }

  public get cidade(): Cidade {
    return this._cidade;
  }
  public set cidade(cidade: Cidade) {
    this._cidade = cidade;
  }

}