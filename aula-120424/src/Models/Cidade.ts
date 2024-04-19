export default class Cidade {
    private _tamanho: string = "";
    private _habitantes: number = 0;
    private _cep: number = 0;
    private _nome: string = "";
    private _prefeito: string = "";
    private _idade: number = 0;

    constructor(tamanho?: string,
        habitantes?: number,
        cep?: number,
        nome?: string,
        prefeito?: string,
        idade?: number
    ) {
        if (tamanho !== undefined) {
            this.tamanho = tamanho;
        }
        if (habitantes !== undefined) {
            this.habitantes = habitantes;
        }
        if (cep !== undefined) {
            this.cep = cep;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (prefeito !== undefined) {
            this.prefeito = prefeito;
        }
        if (idade !== undefined) {
            this.idade = idade;
        }
    }

    public get tamanho(): string {
        return this._tamanho;
    }

    public set tamanho(value: string) {
        this._tamanho = value;
    }

    public get habitantes(): number {
        return this._habitantes;
    }


    public set habitantes(value: number) {
        this._habitantes = value;
    
    }

    public get cep(): number {
        return this._cep;
    }

    public set cep(value: number) {
        this._cep = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get prefeito(): string {
        return this.prefeito;
    }

    public set prefeito(value: string) {
        this._prefeito = value;
    }

    public get idade(): number {
        return this.idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }


    public imprimeAtributos(): void {
        console.log(`Prefito: ${this._prefeito}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Cep: ${this._cep}`);
        console.log(`Habitantes: ${this._habitantes}`);
        console.log(`Tamanho: ${this._tamanho}`)
        console.log(`Idade: ${this._idade}`);
    }
}