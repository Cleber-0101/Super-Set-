# 02 — Arrays, Tuplas, `any` e `unknown`

Assuntos: `T[]`, `Array<T>`, arrays com union, `readonly`, tuplas, `any` x `unknown`.

Escreva suas soluções em `resolucao.ts`.

Níveis: 🟢 Básico · 🟡 Intermediário

> Atenção: seu tsconfig tem `noUncheckedIndexedAccess: true`. Isso significa que `lista[0]` tem tipo `T | undefined`. Você vai precisar tratar isso!

---

## Desafio 1 — Lista de compras 🟢

**Enunciado:** crie um array `compras: string[]` com 4 itens.
1. Adicione um item com `push`.
2. Mostre a quantidade de itens.
3. Mostre todos em maiúsculo usando `map`.
4. Tente fazer `compras.push(10)` e veja o erro (depois comente).

**Resultado esperado:**
```
Total de itens: 5
[ 'ARROZ', 'FEIJÃO', 'CAFÉ', 'LEITE', 'PÃO' ]
```

---

## Desafio 2 — Notas da turma 🟢

**Enunciado:** crie `notas: Array<number>` com 6 notas.
Calcule e mostre: a **média**, a **maior nota**, a **menor nota** e um novo array só com as notas **aprovadas** (>= 7).

**Regras:** use `reduce` para a média e `filter` para as aprovadas. Tipar explicitamente o retorno de cada variável.

**Resultado esperado (para `[8, 5.5, 7, 9.5, 6, 10]`):**
```
Média: 7.67
Maior: 10
Menor: 5.5
Aprovadas: [ 8, 7, 9.5, 10 ]
```

---

## Desafio 3 — Primeiro elemento seguro 🟡

**Enunciado:** com `noUncheckedIndexedAccess` ligado, `const primeiro = nomes[0]` é `string | undefined`.
Pegue o primeiro e o último elemento de um array `nomes: string[]` e mostre o tamanho de cada nome (`.length`).
Trate o caso do array estar vazio **sem** usar `!` (non-null assertion) — use `if` ou `??`.

**Resultado esperado:**
```
Primeiro: Ana (3 letras)
Último: Fernanda (8 letras)
// com array vazio:
Lista vazia
```

---

## Desafio 4 — Tuplas e readonly 🟡

**Enunciado:**
1. Crie uma tupla `coordenada: [number, number]` e mostre `Latitude: X | Longitude: Y`.
2. Crie uma tupla `registro: [string, number, boolean]` representando `[nome, idade, ativo]` e faça **desestruturação** dela.
3. Crie um array `readonly string[]` chamado `DIAS_UTEIS` e tente dar `push` nele (veja o erro, depois comente).
4. Crie um array misto `(string | number)[]` com `["a", 1, "b", 2]` e separe em dois arrays: um só de strings e outro só de números.

**Resultado esperado:**
```
Latitude: -23.55 | Longitude: -46.63
Nome: Cleber | Idade: 30 | Ativo: true
Strings: [ 'a', 'b' ]
Números: [ 1, 2 ]
```

---

## Desafio 5 — `any` vs `unknown` 🟡

**Enunciado:**
1. Declare `let livre: any = "texto"` e chame `livre.toFixed(2)`. O TS **não reclama**, mas rode o código e veja o erro em tempo de execução. Comente o porquê.
2. Agora declare `let seguro: unknown = "texto"` e tente chamar `seguro.toUpperCase()`. Veja que o TS **bloqueia**.
3. Use `typeof` para liberar o uso de `seguro` corretamente.
4. Crie um array `dadosDaApi: unknown[] = [10, "vinte", true, null, 40]` e some **apenas** os números.

**Resultado esperado:**
```
TypeError: livre.toFixed is not a function   (no passo 1)
TEXTO
Soma dos números: 50
```
