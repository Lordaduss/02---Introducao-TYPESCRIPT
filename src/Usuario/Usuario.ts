import Endereco from "../Endereco/Endereco";
import Sexo from "./Sexo";

export default class Usuario {
    nome: string;
    CPF: number;
    RG: number;
    sexo: Sexo;
    endereco: Endereco;
    
    constructor(nome: string,CPF: number,RG: number,sexo: Sexo,endereco: Endereco){
        this.nome = nome;
        this.CPF=CPF;
        this.RG=RG;
        this.sexo=sexo;
        this.endereco=endereco;
    }
}
