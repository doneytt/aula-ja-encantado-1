"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor() {
        this.especie = "";
        this.nome = "";
        this.idade = 0;
        this.porte = "";
        this.peso = 0;
    }
    getEspecie() {
        return this.especie;
    }
    setEspecie(especie) {
        this.especie = especie;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getPorte() {
        return this.porte;
    }
    setPorte(porte) {
        this.porte = porte;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    emitirSom() {
        console.log("Animal está emitindo som.");
    }
    imprimeAtributos() {
        console.log("Espécie: " + this.especie);
        console.log(`Nome: ${this.nome}`);
        console.log("Idade: " + this.idade);
        console.log("Porte: " + this.porte);
        console.log("Peso: " + this.peso);
    }
}
exports.default = Animal;
