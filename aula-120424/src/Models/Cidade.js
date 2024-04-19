"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cidade {
    constructor(tamanho, habitantes, cep, nome, prefeito, idade) {
        this._tamanho = "";
        this._habitantes = 0;
        this._cep = 0;
        this._nome = "";
        this._prefeito = "";
        this._idade = 0;
        if (tamanho !== undefined) {
            this._tamanho = tamanho;
        }
        if (habitantes !== undefined) {
            this._habitantes = habitantes;
        }
        if (cep !== undefined) {
            this._cep = cep;
        }
        if (nome !== undefined) {
            this._nome = nome;
        }
        if (prefeito !== undefined) {
            this._prefeito = prefeito;
        }
        if (idade !== undefined) {
            this._idade = idade;
        }
    }
    get tamanho() {
        return this._tamanho;
    }
    set tamanho(value) {
        this._tamanho = value;
    }
    get habitantes() {
        return this._habitantes;
    }
    set habitantes(value) {
        this._habitantes = value;
    }
    get cep() {
        return this._cep;
    }
    set cep(value) {
        this._cep = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get prefeito() {
        return this._prefeito;
    }
    set prefeito(value) {
        this._prefeito = value;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        this._idade = value;
    }
    imprimeAtributos() {
        console.log(`Prefeito: ${this.prefeito}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`CEP: ${this.cep}`);
        console.log(`Habitantes: ${this.habitantes}`);
        console.log(`Tamanho: ${this.tamanho}`);
        console.log(`Idade: ${this.idade}`);
    }
}
exports.default = Cidade;
