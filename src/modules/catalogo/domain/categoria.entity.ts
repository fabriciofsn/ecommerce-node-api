import { CreateCategoryProps, ICategoria } from "./categoria.type";

export class Categoria implements ICategoria {
  private _id: string;
  private _nome: string;

  public get id(): string {
    return this._id;
  }
  private set id(value: string) {
    this._id = value;
  }

  public get nome(): string {
    return this._nome;
  }
  private set nome(value: string) {
    if (value == null || value == undefined) {
      throw new Error(`${value} categoria é nulo ou inválido`);
    }
    if (value.trim().length < 3) {
      throw new Error(`A categória não possiu um tamanho válido`);
    }

    if (value.trim().length > 50) {
      throw new Error("O nome da categoria ultrapassa o tamanho válido");
    }

    this._nome = value;
  }

  private constructor(props: ICategoria) {
    this.id = props.id;
    this.nome = props.nome;
  }

  public static create(props: CreateCategoryProps): Categoria {
    let id = "1";
    let { nome } = props;
    return new Categoria({ id, nome });
  }
}
