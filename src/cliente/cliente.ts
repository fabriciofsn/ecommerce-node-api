import { Endereco } from "../endereco/endereco";

export class Cliente {
  private _nome: string = "";
  private _endereco: Endereco[] = [];
  private _pagamento: Pagamento = Pagamento.DINHEIRO;
  private _telefone: string = "";
  private _CPF: string = "";

  //////////////////////////////////
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  /////////////////////////////
  public get endereco(): Endereco[] {
    return this._endereco;
  }
  public set endereco(value: Endereco[]) {
    this._endereco = value;
  }
  /////////////////////////////////////
  public get pagamento(): Pagamento {
    return this._pagamento;
  }
  public set pagamento(value: Pagamento) {
    this._pagamento = value;
  }
  /////////////////////////////////
  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(value: string) {
    this._telefone = value;
  }
  ////////////////////////////////
  public get CPF(): string {
    return this._CPF;
  }
  public set CPF(value: string) {
    this._CPF = value;
  }

  constructor(
    nome: string,
    endereco: Endereco[],
    pagamento: Pagamento,
    telefone: string,
    CPF: string
  ) {
    this.nome = nome;
    this.endereco = endereco;
    this.pagamento = pagamento;
    this.telefone = telefone;
    this.CPF = CPF;
  }
}

enum Pagamento {
  CREDITO = "Cartão de credito",
  DEBIDO = "Cartão de Débito",
  PIX = "Pix",
  DINHEIRO = "Dinheiro",
}
