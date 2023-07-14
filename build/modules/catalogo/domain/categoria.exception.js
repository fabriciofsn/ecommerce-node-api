"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaException = void 0;
const domain_exception_1 = require("../../../shared/domain/domain.exception");
var CategoriaException;
(function (CategoriaException) {
    class NomeTamanhoMinimoInvalido extends domain_exception_1.DomainException {
        constructor(message = "categoria não possui tamanho mínimo válido") {
            super(message);
            (this.name = "CategoriaException.NomeTamahoMinimoInvalido"),
                (this.message = message);
        }
    }
    CategoriaException.NomeTamanhoMinimoInvalido = NomeTamanhoMinimoInvalido;
    class NomeTamanhoMaximoInvalido extends domain_exception_1.DomainException {
        constructor(message = "O nome da categoria não possui tamanho máximo válido") {
            super(message);
            (this.name = "CategoriaException.NomeTamahoMáximoInvalido"),
                (this.message = message);
        }
    }
    CategoriaException.NomeTamanhoMaximoInvalido = NomeTamanhoMaximoInvalido;
})(CategoriaException || (exports.CategoriaException = CategoriaException = {}));
//# sourceMappingURL=categoria.exception.js.map