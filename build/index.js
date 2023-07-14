"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_entity_1 = require("./modules/catalogo/domain/categoria.entity");
try {
    let categoria;
    categoria = categoria_entity_1.Categoria.create({ nome: "Varejo" });
    console.log(categoria);
}
catch (error) {
    console.log(error.message);
}
//# sourceMappingURL=index.js.map