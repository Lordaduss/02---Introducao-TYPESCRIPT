import Usuario from "./Usuario/Usuario";
import Sexo from "./Usuario/Sexo";
import Endereco from "./Endereco/Endereco";

var endereco1 = new Endereco("Moacir Julio Silvestre", 644,85050020,"Centro","Guarapuava");
var pessoa1 = new Usuario("Marcelo Pavani Lachowski",48845771830,393867195,Sexo.MASCULINO,endereco1);

console.log("Usuário: " + pessoa1.nome)
console.log("CPF " + pessoa1.CPF)
console.log("RG: " + pessoa1.RG)
console.log("Sexo: " + pessoa1.sexo)
console.log("Endereço: " + pessoa1.endereco.rua + " " + pessoa1.endereco.numero + " " + pessoa1.endereco.bairro + " " + pessoa1.endereco.cep + " " + pessoa1.endereco.cep)