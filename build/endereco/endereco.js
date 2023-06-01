"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    ////////////////////////////
    get cep() {
        return this._cep;
    }
    set cep(value) {
        this._cep = value;
    }
    ////////////////////////////
    get cidade() {
        return this._cidade;
    }
    set cidade(value) {
        this._cidade = value;
    }
    ///////////////////////////////////
    get bairro() {
        return this._bairro;
    }
    set bairro(value) {
        this._bairro = value;
    }
    ///////////////////////////////////
    get rua() {
        return this._rua;
    }
    set rua(value) {
        this._rua = value;
    }
    ///////////////////////////////////
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    constructor(cep, cidade, bairro, rua, numero) {
        this._cep = 0;
        this._cidade = "";
        this._bairro = "";
        this._rua = "";
        this._numero = 0;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }
}
exports.Endereco = Endereco;
