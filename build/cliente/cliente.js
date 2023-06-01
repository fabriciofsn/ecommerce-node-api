"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    //////////////////////////////////
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    /////////////////////////////
    get endereco() {
        return this._endereco;
    }
    set endereco(value) {
        this._endereco = value;
    }
    /////////////////////////////////////
    get pagamento() {
        return this._pagamento;
    }
    set pagamento(value) {
        this._pagamento = value;
    }
    /////////////////////////////////
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
    ////////////////////////////////
    get CPF() {
        return this._CPF;
    }
    set CPF(value) {
        this._CPF = value;
    }
    constructor(nome, endereco, pagamento, telefone, CPF) {
        this._nome = "";
        this._endereco = [];
        this._pagamento = Pagamento.DINHEIRO;
        this._telefone = "";
        this._CPF = "";
        this.nome = nome;
        this.endereco = endereco;
        this.pagamento = pagamento;
        this.telefone = telefone;
        this.CPF = CPF;
    }
}
exports.Cliente = Cliente;
var Pagamento;
(function (Pagamento) {
    Pagamento["CREDITO"] = "Cart\u00E3o de credito";
    Pagamento["DEBIDO"] = "Cart\u00E3o de D\u00E9bito";
    Pagamento["PIX"] = "Pix";
    Pagamento["DINHEIRO"] = "Dinheiro";
})(Pagamento || (Pagamento = {}));
