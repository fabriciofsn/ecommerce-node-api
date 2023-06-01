export class Endereco {
  private _cep: number = 0;
  private _cidade: string = "";
  private _bairro: string = "";
  private _rua: string = "";
  private _numero: number = 0;

  ////////////////////////////
  public get cep(): number {
    return this._cep;
  }
  public set cep(value: number) {
    this._cep = value;
  }
  ////////////////////////////
  public get cidade(): string {
    return this._cidade;
  }
  public set cidade(value: string) {
    this._cidade = value;
  }
  ///////////////////////////////////
  public get bairro(): string {
    return this._bairro;
  }
  public set bairro(value: string) {
    this._bairro = value;
  }
  ///////////////////////////////////
  public get rua(): string {
    return this._rua;
  }
  public set rua(value: string) {
    this._rua = value;
  }
  ///////////////////////////////////
  public get numero(): number {
    return this._numero;
  }
  public set numero(value: number) {
    this._numero = value;
  }

  constructor(
    cep: number,
    cidade: string,
    bairro: string,
    rua: string,
    numero: number
  ) {
    this.cep = cep;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.numero = numero;
  }
}
