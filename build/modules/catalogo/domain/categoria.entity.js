"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
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
    constructor(props) {
        this.id = props.id;
        this.nome = props.nome;
    }
    static create(props) {
        let id = "1";
        let { nome } = props;
        return new Categoria({ id, nome });
    }
}
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.entity.js.map