"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cidade_1 = __importDefault(require("./Models/Cidade"));
let f1 = new Cidade_1.default();
f1.tamanho = "Pequeno";
f1.prefeito = "mateus ";
f1.cep = 95970000;
f1.nome = "mucum";
f1.habitantes = 8;
f1.idade = 64;
f1.imprimeAtributos();
