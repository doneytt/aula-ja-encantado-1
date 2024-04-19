"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./src/Models/Animal"));
let a = new Animal_1.default();
a.setEspecie("Felino");
a.setNome("Garfield");
a.setIdade(7);
a.setPorte("Médio");
a.setPeso(8);
a.imprimeAtributos();
a.emitirSom();
