# 03 — Funções: tipos de parâmetro e retorno

Assuntos: tipagem de parâmetros, tipo de retorno, parâmetros opcionais (`?`), valor padrão, `void`, `never`, rest parameters, union em parâmetros, funções como tipo.

Escreva suas soluções em `resolucao.ts`.

Níveis: 🟢 Básico · 🟡 Intermediário

---

## Desafio 1 — Calculadora simples 🟢

**Enunciado:** crie 4 funções: `somar`, `subtrair`, `multiplicar`, `dividir`.
Todas recebem `(a: number, b: number)` e **declaram explicitamente** o retorno `: number`.
Na divisão, se `b` for `0`, retorne `0` e mostre um aviso no console.

**Resultado esperado:**
```
somar(10, 5)       -> 15
subtrair(10, 5)    -> 5
multiplicar(10, 5) -> 50
dividir(10, 0)     -> Aviso: divisão por zero! / 0
```

---

## Desafio 2 — Saudação com parâmetro opcional e padrão 🟢

**Enunciado:** crie `saudar(nome: string, sobrenome?: string, saudacao: string = "Olá"): string`.
- Se tiver sobrenome, inclua na frase.
- Se não tiver, só o nome.

**Resultado esperado:**
```
saudar("Ana")                       -> "Olá, Ana!"
saudar("Ana", "Silva")              -> "Olá, Ana Silva!"
saudar("Ana", "Silva", "Bom dia")   -> "Bom dia, Ana Silva!"
```
> Pergunta para responder em comentário: por que o parâmetro opcional não pode vir **antes** de um obrigatório?

---

## Desafio 3 — void e never 🟡

**Enunciado:**
1. Crie `registrarLog(mensagem: string): void` que mostra `[LOG 2026-11-05T...] mensagem` (use `new Date().toISOString()`).
2. Crie `lancarErro(mensagem: string): never` que lança um `Error`.
3. Crie `buscarIdade(idade: number): number` que, se a idade for negativa, chama `lancarErro`. Use `try/catch` para testar.
4. Em comentário: qual a diferença entre `void` e `never`?

**Resultado esperado:**
```
[LOG 2026-11-05T18:00:00.000Z] Sistema iniciado
Idade válida: 25
Erro capturado: Idade não pode ser negativa
```

---

## Desafio 4 — Rest parameters e union no parâmetro 🟡

**Enunciado:**
1. Crie `somarTodos(...numeros: number[]): number` que soma quantos números receber.
2. Crie `formatarId(id: string | number): string`:
   - se for `number`, retorna `"ID-"` + número com 5 dígitos (`padStart`) → `ID-00042`
   - se for `string`, retorna em maiúsculo → `ID-ABC`

**Resultado esperado:**
```
somarTodos(1, 2, 3)        -> 6
somarTodos(10, 20, 30, 40) -> 100
somarTodos()               -> 0
formatarId(42)             -> "ID-00042"
formatarId("abc")          -> "ID-ABC"
```

---

## Desafio 5 — Função como tipo (callback) 🟡

**Enunciado:**
1. Crie um type alias `type Operacao = (a: number, b: number) => number;`
2. Crie `calcular(a: number, b: number, operacao: Operacao): number`.
3. Chame `calcular` passando as funções do Desafio 1 **e** uma arrow function anônima de potência.
4. Crie `aplicarDesconto(precos: number[], regra: (preco: number) => number): number[]`
   e aplique 10% de desconto a uma lista de preços.

**Resultado esperado:**
```
calcular(2, 3, somar)                  -> 5
calcular(2, 3, (a, b) => a ** b)       -> 8
aplicarDesconto([100, 50, 20], ...)    -> [ 90, 45, 18 ]
```
