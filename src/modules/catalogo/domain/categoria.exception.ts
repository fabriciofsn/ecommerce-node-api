import { DomainException } from "../../../shared/domain/domain.exception";

export namespace CategoriaException {
  export class NomeTamanhoMinimoInvalido extends DomainException {
    constructor(
      message: string = "categoria não possui tamanho mínimo válido"
    ) {
      super(message);
      (this.name = "CategoriaException.NomeTamahoMinimoInvalido"),
        (this.message = message);
    }
  }

  export class NomeTamanhoMaximoInvalido extends DomainException {
    constructor(
      message: string = "O nome da categoria não possui tamanho máximo válido"
    ) {
      super(message);
      (this.name = "CategoriaException.NomeTamahoMáximoInvalido"),
        (this.message = message);
    }
  }
}
