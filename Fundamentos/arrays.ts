// Em type os dados respeitam os seus tipos 
let numeros: number[] = [1, 2, 3, 4, 5];

numeros.push(6); // Adiciona o número 6 ao final do array
numeros.push(6); // Adiciona o número 6 ao final do array
numeros.push(6); // Adiciona o número 6 ao final do array
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]

let nomes: string[] = ['Alice', 'Bob', 'Charlie'];
nomes.push('David');
nomes.push('David');
nomes.push('David');
console.log(nomes); // Saída: ['Alice', 'Bob', 'Charlie', 'David']


//escrevendo array de forma difrente, nesse exemplo o array pode receber tanto number quanto string/
const arraysDifrente: Array<number | string> = [1, 'dois', 3, 'quatro'];
console.log(arraysDifrente); // Saída: [1, 'dois', 3, 'quatro']


// tipo any indica que qualquer tipo de dado pode ser armazenado no array, mas não é recomendado usar esse tipo, pois perde-se a tipagem do TypeScript
let nome: string | any = 'Alice';
nome = 42; // Agora nome é um número
console.log(nome); // Saída: 42

const arrayAny: any[] = [1, 'dois', true, { nome: 'Alice' }];
arrayAny.push(3.14);
arrayAny.push('novo elemento');
console.log(arrayAny); // Saída: [1, 'dois', true, { nome: 'Alice' }, 3.14, 'novo elemento']


