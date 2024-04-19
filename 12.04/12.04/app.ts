import Aluno from "./src/models/Aluno";


let a1: Aluno = new Aluno();
a1.nome = "Grégori";
a1.escola = "Souza Doca";

a1.definirNota1(8);
a1.definirNota2(5);
a1.definirNota3(6);

a1.mediaNotas();
a1.imprimeAtributos();

//* ---------------------------------- //*

import Cidade from "./src/models/Cidade";


let c1: Cidade = new Cidade();
c1.tamanho = "Pequeno";
c1.prefeito = "mateus trojan";
c1.pais = "brasil";
c1.nome = " mucum";
c1.habitantes = 5000;
c1.estado = "rio grande do sul ";


c1.MaisHabitantes(900);
c1.MenosHabitantes(2000);


c1.editaPrefeito("Cleber");


c1.imprimeAtributos();


//* -----------------------------------//*

import Fruta from "./src/models/Fruta";

let f1: Fruta = new Fruta();
f1.nome = "Pitaya";
f1.cor = "Rosa";
f1.consumir();
f1.consumir();
f1.consumir();

f1.imprimeAtributos();
