// Desafios 01 — Tipos primitivos e Type Annotation
// Leia o README.md desta pasta antes de começar.
export {}; // isola este arquivo (evita conflito de nomes com outros desafios)

// ===== Desafio 1 — Ficha de cadastro =====
let nome = "Cleber"
let idade : number = 27
let ativo: boolean = true
let altura: number = 1.80

console.log(`Usuario: ${nome} | ${idade} | Ativo ${ativo} | Altura ${altura}`)

// ===== Desafio 2 — Inferência vs Annotation =====
//inferiu o tipo String
let A = "Cleber"

// em variavei do tipo const não se poder inferir porque constantes não podem ter os valores alterados 
const Oi = "oii"
//inferiu o tipo number
let B = 28
//inferiu o boolean
let C = true


// ===== Desafio 3 — Conta gigante com BigInt =====
let numeroGigante: bigint = 9007199254740992n;
let editandoNumeroErrado: number = 9007199254740992;

// Conversão de number para bigint
let tranformandoDados: bigint = BigInt(editandoNumeroErrado);
let resultadoFinal = tranformandoDados + numeroGigante
console.log(resultadoFinal)


// ===== Desafio 4 — Identificadores únicos com Symbol =====
//resultado sera false porque mesmo com tendo a descrição igual, os dois Symbols são diferentes 
// eles criam identificadores unicos que poder ser usados como propriedades de objetos 
const id1: Symbol = Symbol("id")
const id2: Symbol = Symbol("id")
const comparacao = id1 === id2
console.log(comparacao);


const CHAVE_SECRETA: unique symbol = Symbol("SECRETA")
const produto = {
    nome: "cleber",
    [CHAVE_SECRETA]: "chavesecretasendousadaemUmobjeto"
};

console.log(produto[CHAVE_SECRETA]);


// ===== Desafio 5 — null x undefined =====
// 1. Com strict: true, null não pode ser atribuído diretamente a string.

// let apelido: string = null; // Erro!

// Correção usando Union Type:
let apelido: string | null = null;


// 2. Variável que pode ser string ou undefined.
let telefone: string | undefined;

console.log("telefone:", telefone);


// 3. Função para identificar os valores.
function descreverValor(valor: string | null | undefined): void {

    if (valor === null) {
        console.log("Valor ausente (null)");

    } else if (valor === undefined) {
        console.log("Valor não definido (undefined)");

    } else {
        console.log(`Valor: ${valor}`);
    }
}

descreverValor(null);
descreverValor(undefined);
descreverValor("Cleber");


// 4. Diferença:
//
// null: ausência intencional de um valor.
// undefined: variável declarada, mas ainda sem valor atribuído.
