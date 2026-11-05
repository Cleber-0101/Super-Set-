# 05 — Narrowing, Type Guards e Assertions

Assuntos: narrowing com `typeof`, `instanceof`, operador `in`, igualdade (`===`), truthiness, type guard customizado (`valor is Tipo`), non-null assertion (`!`), type assertion (`as`), discriminated unions.

Escreva suas soluções em `resolucao.ts`.

Níveis: 🟢 Básico · 🟡 Intermediário

---

## Desafio 1 — Formatador com `typeof` 🟢

**Enunciado:** crie `formatar(valor: string | number | boolean | bigint): string`:
- `string` → entre aspas e em maiúsculo
- `number` → com 2 casas decimais
- `boolean` → `"Sim"` ou `"Não"`
- `bigint` → número + `" (bigint)"`

**Resultado esperado:**
```
formatar("oi")   -> "OI"  (entre aspas)
formatar(3.14159)-> "3.14"
formatar(true)   -> "Sim"
formatar(99n)    -> "99 (bigint)"
```

---

## Desafio 2 — Datas e erros com `instanceof` 🟢

**Enunciado:** crie `descreverEntrada(entrada: Date | Error | string[]): string`:
- `Date` → `"Data: dd/mm/aaaa"` (use `toLocaleDateString("pt-BR")`)
- `Error` → `"Erro: <mensagem>"`
- array → `"Lista com N itens"` (use `Array.isArray`)

**Resultado esperado:**
```
Data: 05/11/2026
Erro: Falha na conexão
Lista com 3 itens
```

---

## Desafio 3 — Animais com operador `in` 🟡

**Enunciado:**
```ts
interface Peixe   { nome: string; nadar: () => void }
interface Passaro { nome: string; voar: () => void }
interface Pato    { nome: string; nadar: () => void; voar: () => void }
```
Crie `mover(animal: Peixe | Passaro | Pato): void` usando o operador **`in`** para decidir o que fazer.
O pato deve nadar **e** voar.

**Resultado esperado:**
```
Nemo está nadando 🐟
Piu está voando 🐦
Donald está nadando 🐟
Donald está voando 🐦
```
> Dica: pense na ordem dos `if`. Se testar só `"nadar" in animal` primeiro, o que o TS acha que sobra no `else`?

---

## Desafio 4 — Type guard customizado (`is`) 🟡

**Enunciado:**
1. Crie `interface Usuario { nome: string; email: string }`.
2. Crie a função `ehUsuario(valor: unknown): valor is Usuario` que verifica se o valor é um objeto não-nulo, com `nome` e `email` sendo strings.
3. Dado o array abaixo (simulando uma API), filtre apenas os usuários válidos e mostre seus e-mails:
```ts
const respostaApi: unknown[] = [
  { nome: "Ana", email: "ana@email.com" },
  { nome: "Bruno" },
  null,
  "texto qualquer",
  { nome: "Carla", email: "carla@email.com" },
  { nome: 123, email: "x@x.com" },
];
```

**Resultado esperado:**
```
Usuários válidos: 2
- ana@email.com
- carla@email.com
```

---

## Desafio 5 — Non-null assertion (`!`) e type assertion (`as`) 🟡

**Enunciado:**
1. Crie um `Map<string, number>` de estoque. Use `estoque.get("caneta")` — o retorno é `number | undefined`.
   - Primeiro trate com `if` / `??`.
   - Depois use `estoque.get("caneta")!` e escreva em comentário **quando** isso é seguro e **o risco** de usar com uma chave que não existe.
2. Crie `const dados: unknown = JSON.parse('{"titulo":"TS","paginas":320}')`.
   Use `as` para tratar como `{ titulo: string; paginas: number }` e mostre os valores.
   Em comentário: `as` **converte** o valor ou só **avisa** o compilador?
3. Com `!` acesse `const nomes: string[] = ["Ana"]` → `nomes[0]!.toUpperCase()` (lembre do `noUncheckedIndexedAccess`).

**Resultado esperado:**
```
Canetas em estoque: 50
Borrachas em estoque: 0  (chave inexistente tratada com ??)
Livro: TS - 320 páginas
ANA
```

---

## 🏆 Desafio Bônus — Discriminated Union + `never` 🟡

**Enunciado:**
```ts
type Circulo    = { tipo: "circulo";   raio: number };
type Retangulo  = { tipo: "retangulo"; largura: number; altura: number };
type Triangulo  = { tipo: "triangulo"; base: number; altura: number };
type Forma = Circulo | Retangulo | Triangulo;
```
Crie `calcularArea(forma: Forma): number` usando `switch (forma.tipo)`.
No `default`, faça `const verificacao: never = forma;` — isso garante que, se alguém adicionar uma nova forma no futuro, o TS vai **acusar erro** até você tratá-la.
Teste: adicione `type Quadrado = { tipo: "quadrado"; lado: number }` na union e veja o erro aparecer.

**Resultado esperado:**
```
Área do círculo (raio 2): 12.57
Área do retângulo (4x5): 20
Área do triângulo (b6 h3): 9
```
