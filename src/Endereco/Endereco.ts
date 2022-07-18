export default class Endereco{
    rua: string;
    numero: number;
    cep: number;
    bairro: string;
    cidade: string;

    constructor(rua: string,numero: number,cep: number, bairro: string, cidade: string){
        this.rua=rua
        this.numero=numero;
        this.cep=cep;
        this.bairro=bairro;
        this.cidade=cidade;
    }
}