# 01 — Tipos primitivos e Type Annotation

Assuntos: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`, type annotation e inferência.

Escreva suas soluções em `resolucao.ts`. Para testar: `npx tsc` e depois `node Desafios/01-tipos-primitivos/resolucao.js`.

Níveis: 🟢 Básico · 🟡 Intermediário

---

## Desafio 1 — Ficha de cadastro 🟢

**Enunciado:** declare variáveis **com type annotation explícita** para representar um usuário:
`nome` (string), `idade` (number), `ativo` (boolean), `altura` (number com casas decimais).
Depois monte uma frase usando template string e mostre no console.

**Regras:**
- Toda variável deve ter o tipo escrito (`let nome: string = ...`).
- Tente atribuir um valor de tipo errado a uma delas (ex: `idade = "trinta"`), veja o erro do compilador e depois comente essa linha.

**Resultado esperado:**
```
Usuário: Ana | Idade: 28 | Ativo: true | Altura: 1.65m
```

---

## Desafio 2 — Inferência vs Annotation 🟢

**Enunciado:** crie três variáveis **sem** type annotation (`let a = 10`, `const b = "oi"`, `let c = true`).
Passe o mouse sobre cada uma no VS Code e anote em um comentário qual tipo o TS inferiu.
Depois explique (em comentário) por que `const b = "oi"` é inferido como `"oi"` e não como `string`.

**Resultado esperado:** comentários no código, por exemplo:
```ts
// a -> number
// b -> "oi" (literal, porque const não pode ser reatribuída)
// c -> boolean
```

---

## Desafio 3 — Conta gigante com BigInt 🟡

**Enunciado:** o maior inteiro seguro do `number` é `Number.MAX_SAFE_INTEGER`.
1. Mostre no console `Number.MAX_SAFE_INTEGER + 2` e perceba que o resultado está **errado**.
2. Faça a mesma conta usando `bigint` (`let grande: bigint = ...`), usando o sufixo `n`.
3. Crie uma variável `populacaoMundialEm3000: bigint` e multiplique por `1000n`.
4. Tente somar um `bigint` com um `number` direto e veja o erro. Corrija convertendo com `BigInt(...)`.

**Resultado esperado:**
```
number: 9007199254740992   (errado!)
bigint: 9007199254740993n
População x1000: 15000000000000n
Soma convertida: 15000000000005n
```
> Obs: para usar `bigint` literal (`10n`) o `target` do tsconfig precisa ser `es2020` ou maior — o seu já é.

---

## Desafio 4 — Identificadores únicos com Symbol 🟡

**Enunciado:**
1. Crie dois símbolos com a mesma descrição: `const id1: symbol = Symbol("id")` e `const id2 = Symbol("id")`.
2. Compare os dois com `===` e mostre o resultado.
3. Crie um `unique symbol` (`const CHAVE_SECRETA: unique symbol = Symbol("secreta")`) e use como chave de um objeto `produto`.
4. Mostre que `Object.keys(produto)` **não** lista a chave símbolo, mas `produto[CHAVE_SECRETA]` acessa o valor.

**Resultado esperado:**
```
id1 === id2 ? false
Descrição de id1: id
Object.keys: [ 'nome', 'preco' ]
Valor secreto: ABC-123
```

---

## Desafio 5 — null x undefined 🟡

**Enunciado:** com `strict: true` ligado:
1. Declare `let apelido: string = null` e veja o erro. Corrija usando union: `string | null`.
2. Declare `let telefone: string | undefined;` sem valor e mostre no console.
3. Crie uma função `descreverValor` (pode ser só um bloco `if`) que receba `string | null | undefined` e mostre:
   - `"Valor ausente (null)"` se for `null`
   - `"Valor não definido (undefined)"` se for `undefined`
   - `"Valor: X"` caso contrário
4. Em comentário, explique a diferença entre `null` (ausência **intencional**) e `undefined` (**não atribuído**).

**Resultado esperado:**
```
telefone: undefined
Valor ausente (null)
Valor não definido (undefined)
Valor: Cleber
```
