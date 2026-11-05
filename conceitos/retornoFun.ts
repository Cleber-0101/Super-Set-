// tipo de parametros
function lembrete(): void {
    console.log("ESSA FUNÇÃO ESTA APENAS MOSTRANDO UM RESULTADO GENERICO NÃO ESTA DEVOLVENDO NADA PARA QUEM Á USAR");
}

lembrete(); // Saída: ESSA FUNÇÃO ESTA APENAS MOSTRANDO UM RESULTADO GENERICO NÃO ESTA DEVOLVENDO NADA PARA QUEM Á USAR



function dizendoOlaMundo(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(dizendoOlaMundo("Alice")); // Saída: Olá, Alice!


//funcoes anonimas
const intervalo = setInterval(function() {
    console.log("Olá!");
}, 2000);

setTimeout(function() {
    clearInterval(intervalo);
    console.log("Repetição encerrada!");
}, 10000);


// tipos de objetos usados em uma função
//basicamente a mesma coisa de outras funções mais nesse caso estou usando um objeto como parametro, e dentro dele estou definindo as propriedades nome e idade, e seus tipos 
//nesse exemplo estou usando {} que sinaliza que é um objeto, e dentro dele estou definindo as propriedades nome e idade, e seus tipos
function exibirInformacoesPessoa(pessoa: { nome: string; idade: number }): void {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}   

exibirInformacoesPessoa({ nome: "Alice", idade: 30 }); // Saída: Nome: Alice, Idade: 30


//propriedades opcionais em objetos
function exibirInformacoesPessoaOpcional(pessoa: { nome: string; sobreNome?: string; idade?: number }): void {
    if (pessoa.idade !== undefined) {
        console.log(`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: ${pessoa.idade}`);
    } else {
        console.log(`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: não informada`);
    }
}
 exibirInformacoesPessoaOpcional({ nome: "Bob" }); // Saída: Nome: Bob, Idade: não informada

 //validando propriedades opcionais em objetos
function exibirInformacoesPessoaOpcionalValidada(pessoa: { nome: string; sobreNome?: string; idade?: number }): string {
    if (pessoa.idade !== undefined) {   
         return(`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: ${pessoa.idade}`);
    } else {
        return(`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: não informada`);
    }
}   

console.log(exibirInformacoesPessoaOpcionalValidada({ nome: "Carlos", sobreNome: "Silva", idade: 25 }));



//union types em funções
function exibirInformacoesPessoaUnion(pessoa: { nome: string; idade: number | string }): void {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

//nesse caso a função exibirInformacoesPessoaUnion aceita tanto um número quanto uma string para a propriedade idade, e o TypeScript vai validar isso
exibirInformacoesPessoaUnion({ nome: "David", idade: 30 }); // Saída: Nome: David, Idade: 30
exibirInformacoesPessoaUnion({ nome: "Eve", idade: "trinta" }); // Saída: Nome: Eve, Idade: trinta



//validando union types em funções
function exibirInformacoesPessoaUnionValidada(pessoa: { nome: string; idade: number | string }): string {
    if (typeof pessoa.idade === "number") {
        return(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    } else {
        return(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    }       

    exibirInformacoesPessoaUnionValidada({ nome: "Frank", idade: 40 }); // Saída: Nome: Frank, Idade: 40
    exibirInformacoesPessoaUnionValidada({ nome: "Grace", idade: "quarenta" }); // Saída: Nome: Grace, Idade: quarenta
}   


//type alias
type Pessoa = { nome: string; sobreNome?: string; idade?: number };


//interface uso ela para que eu não precise tipar os parametros da função, e posso usar a interface em outros lugares do código, e também posso extender a interface para criar outras interfaces
interface IPessoa {
    nome: string; 
    sobreNome?: string;
    idade?: number;
}

function exibirInformacoesPessoaInterface(pessoa: IPessoa): void {
    if (pessoa.idade !== undefined) {
        console.log(`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: ${pessoa.idade}`);
    } else {
        console.log(`Nome: ${pessoa.nome}, SobreNome: ${pessoa.sobreNome}, Idade: não informada`);
    }   
}

exibirInformacoesPessoaInterface({ nome: "Hannah", sobreNome: "Smith", idade: 28 }); // Saída: Nome: Hannah, SobreNome: Smith, Idade: 28
exibirInformacoesPessoaInterface({ nome: "Ian" }); // Saída: Nome: Ian, SobreNome: undefined, Idade: não informada


//literal types 
let cor: "vermelho" | "verde" | "azul";

cor = "vermelho";
cor = "verde";
cor = "azul"; 
//cor = "PRETA"// VAI DAR ERRO PORQUE O TIPO LITERAL NÃO ACEITA OUTROS VALORES ALÉM DOS DEFINIDOS, NESSE CASO "vermelho", "verde" E "azul" SÃO OS ÚNICOS VALORES ACEITOS

//USANDO LITERAL TYPES EM FUNÇÕES
function exibirCor(cor: "vermelho" | "verde" | "azul"): void {
    console.log(`A cor escolhida é: ${cor}`);
}

exibirCor("vermelho"); // Saída: A cor escolhida é: vermelho
exibirCor("verde"); // Saída: A cor escolhida é: verde
exibirCor("azul"); // Saída: A cor escolhida é: azul
//exibirCor("preto"); // VAI DAR ERRO PORQUE O TIPO LITERAL NÃO ACEITA OUTROS VALORES ALÉM DOS DEFINIDOS, NESSE CASO "vermelho", "verde" E "azul" SÃO OS ÚNICOS VALORES ACEITOS



// ultilizando non-null assertion operator em um codigo real
let nome!: string; // O operador ! indica que a variável não será nula ou indefinida



//symbols o que são symbols? symbols são um tipo de dado primitivo do JavaScript que é usado para criar identificadores únicos para propriedades de objetos. Eles são imutáveis e não podem ser convertidos para outros tipos de dados, como strings ou números. Cada vez que você cria um symbol, ele é único, mesmo que tenha a mesma descrição. Isso os torna úteis para evitar colisões de nomes em objetos e para criar propriedades privadas.
const simbolo1 = Symbol("simbolo1");
const simbolo2 = Symbol("simbolo2");