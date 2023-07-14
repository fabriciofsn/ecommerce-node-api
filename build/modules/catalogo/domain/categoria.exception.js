"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaException = void 0;
const domain_exception_1 = require("../../../shared/domain/domain.exception");
var CategoriaException;
(function (CategoriaException) {
    class invalidMinimalNameLength extends domain_exception_1.DomainException {
        constructor(message = "categoria não possui tamanho mínimo válido") {
            super(message);
            this.name = "CategoriaException.NomeTamahoMinimoInvalido";
            this.message = message;
        }
    }
    CategoriaException.invalidMinimalNameLength = invalidMinimalNameLength;
    class invalidMaximumNameLength extends domain_exception_1.DomainException {
        constructor(message = "O nome da categoria não possui tamanho máximo válido") {
            super(message);
            this.name = "CategoriaException.NomeTamahoMáximoInvalido";
            this.message = message;
        }
    }
    CategoriaException.invalidMaximumNameLength = invalidMaximumNameLength;
    class nullName extends domain_exception_1.DomainException {
        constructor(message = "O nome da categoria não pode ser nulo") {
            super(message);
            this.name = "CategoriaException.NomeTamahoMáximoInvalido";
            this.message = message;
        }
    }
    CategoriaException.nullName = nullName;
})(CategoriaException || (exports.CategoriaException = CategoriaException = {}));
//# sourceMappingURL=categoria.exception.js.map