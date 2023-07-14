"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_entity_1 = require("./modules/catalogo/domain/categoria.entity");
const domain_exception_1 = require("./shared/domain/domain.exception");
try {
    let categoria;
    categoria = categoria_entity_1.Categoria.create({ nome: "Vo" });
    console.log(categoria);
}
catch (error) {
    if (error instanceof domain_exception_1.DomainException) {
        console.log(error.message);
    }
}
//# sourceMappingURL=index.js.map