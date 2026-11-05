// Entendendo o Narrowing em TypeScript
// Narrowing é o processo de reduzir o tipo de uma variável para um tipo mais específico, com base em verificações de tipo em tempo de execução. 
// Isso permite que o TypeScript entenda melhor o tipo da variável e forneça autocompletar e verificação de tipos mais precisos.

//nessa função estou aplicando o conceito de narrowing, onde estou verificando se o valor é uma string ou um número, e dependendo do tipo, estou aplicando métodos específicos para cada tipo
// type guard é uma técnica usada para criar funções que verificam o tipo de uma variável em tempo de execução, e retornam um valor booleano indicando se a variável é do tipo esperado ou não.
// typeof é um operador usado para verificar o tipo de uma variável em tempo de execução, e retorna uma string indicando o tipo da variável.
function verificarTipo(valor: string | number): void {
    if (typeof valor === "string") {
        console.log(`O valor é uma string: ${valor.toUpperCase()}`);
    } else {
        console.log(`O valor é um número: ${valor.toFixed(2)}`);
    }   
}

verificarTipo("Olá, mundo!"); // Saída: O valor é uma string: OLÁ, MUNDO!
verificarTipo(42); // Saída: O valor é um número: 42.00