"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tipo de parametros
function lembrete() {
    console.log("ESSA FUNÇÃO ESTA APENAS MOSTRANDO UM RESULTADO GENERICO NÃO ESTA DEVOLVENDO NADA PARA QUEM Á USAR");
}
lembrete(); // Saída: ESSA FUNÇÃO ESTA APENAS MOSTRANDO UM RESULTADO GENERICO NÃO ESTA DEVOLVENDO NADA PARA QUEM Á USAR
function dizendoOlaMundo(nome) {
    return `Olá, ${nome}!`;
}
console.log(dizendoOlaMundo("Alice")); // Saída: Olá, Alice!
//funcoes anonimas
const intervalo = setInterval(function () {
    console.log("Olá!");
}, 2000);
setTimeout(function () {
    clearInterval(intervalo);
    console.log("Repetição encerrada!");
}, 10000);
// tipos de objetos usados em uma função
//basicamente a mesma coisa de outras funções mais nesse caso estou usando um objeto como parametro, e dentro dele estou definindo as propriedades nome e idade, e seus tipos 
//nesse exemplo estou usando {} que sinaliza que é um objeto, e dentro dele estou definindo as propriedades nome e idade, e seus tipos
function exibirInformacoesPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}
exibirInformacoesPessoa({ nome: "Alice", idade: 30 }); // Saída: Nome: Alice, Idade: 30
//propriedades opcionais em objetos
function exibirInformacoesPessoaOpcional(pessoa) {
    if (pessoa.idade !== undefined) {
        console.log(`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: ${pessoa.idade}`);
    }
    else {
        console.log(`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: não informada`);
    }
}
exibirInformacoesPessoaOpcional({ nome: "Bob" }); // Saída: Nome: Bob, Idade: não informada
//validando propriedades opcionais em objetos
function exibirInformacoesPessoaOpcionalValidada(pessoa) {
    if (pessoa.idade !== undefined) {
        return (`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: ${pessoa.idade}`);
    }
    else {
        return (`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: não informada`);
    }
}
console.log(exibirInformacoesPessoaOpcionalValidada({ nome: "Carlos", sobreNome: "Silva", idade: 25 }));
//union types em funções
function exibirInformacoesPessoaUnion(pessoa) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}
//nesse caso a função exibirInformacoesPessoaUnion aceita tanto um número quanto uma string para a propriedade idade, e o TypeScript vai validar isso
exibirInformacoesPessoaUnion({ nome: "David", idade: 30 }); // Saída: Nome: David, Idade: 30
exibirInformacoesPessoaUnion({ nome: "Eve", idade: "trinta" }); // Saída: Nome: Eve, Idade: trinta
//validando union types em funções
function exibirInformacoesPessoaUnionValidada(pessoa) {
    if (typeof pessoa.idade === "number") {
        return (`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    }
    else {
        return (`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    }
    exibirInformacoesPessoaUnionValidada({ nome: "Frank", idade: 40 }); // Saída: Nome: Frank, Idade: 40
    exibirInformacoesPessoaUnionValidada({ nome: "Grace", idade: "quarenta" }); // Saída: Nome: Grace, Idade: quarenta
}
//# sourceMappingURL=retornoFun.js.map