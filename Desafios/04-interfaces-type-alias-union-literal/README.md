# 04 — Interfaces, Type Alias, Union Types e Literal Types

Assuntos: `interface`, `type`, propriedades opcionais e `readonly`, `extends`, union types (`|`), literal types, intersection (`&`).

Escreva suas soluções em `resolucao.ts`.

Níveis: 🟢 Básico · 🟡 Intermediário

> Atenção: seu tsconfig tem `exactOptionalPropertyTypes: true`. Uma propriedade `email?: string` **não** aceita receber `undefined` explicitamente — ou você omite, ou passa uma string.

---

## Desafio 1 — Interface de Produto 🟢

**Enunciado:** crie a interface `Produto` com:
- `readonly id: number`
- `nome: string`
- `preco: number`
- `descricao?: string` (opcional)

Crie 2 produtos (um com descrição, outro sem) e uma função `exibirProduto(p: Produto): void`.
Tente alterar o `id` de um produto e veja o erro (depois comente).

**Resultado esperado:**
```
#1 - Teclado - R$ 150.00 - Teclado mecânico ABNT2
#2 - Mouse - R$ 80.00 - (sem descrição)
```

---

## Desafio 2 — Literal Types: status do pedido 🟢

**Enunciado:** crie `type StatusPedido = "pendente" | "pago" | "enviado" | "entregue" | "cancelado";`
Crie `mensagemStatus(status: StatusPedido): string` usando `switch` que retorna uma mensagem para cada status.
Tente chamar `mensagemStatus("perdido")` e veja o erro (depois comente).

**Resultado esperado:**
```
pendente  -> "Aguardando pagamento"
pago      -> "Pagamento confirmado"
enviado   -> "Pedido a caminho"
entregue  -> "Pedido entregue!"
cancelado -> "Pedido cancelado"
```

---

## Desafio 3 — Herança de interfaces 🟡

**Enunciado:**
1. Crie `interface Pessoa { nome: string; idade: number }`.
2. Crie `interface Funcionario extends Pessoa { cargo: string; salario: number }`.
3. Crie `interface Gerente extends Funcionario { equipe: Funcionario[] }`.
4. Crie uma função `folhaDaEquipe(g: Gerente): number` que retorna a soma do salário do gerente + equipe.

**Resultado esperado:**
```
Gerente: Carla (Gerente de TI)
Equipe: João, Maria, Pedro
Folha total: R$ 26000.00
```

---

## Desafio 4 — Type Alias com Union e Intersection 🟡

**Enunciado:**
1. Crie `type ID = string | number;`
2. Crie `type ComEndereco = { rua: string; cidade: string };`
3. Crie `type ComContato = { email: string; telefone?: string };`
4. Crie `type Cliente = { id: ID; nome: string } & ComEndereco & ComContato;`
5. Crie um array `clientes: Cliente[]` com 3 clientes (um com id `number`, outro com `string`) e mostre só os que moram em uma cidade específica.

**Resultado esperado:**
```
Clientes de São Paulo:
- [101] Ana - ana@email.com
- [C-77] Bruno - bruno@email.com
```
> Pergunta para responder em comentário: quando você usaria `interface` e quando usaria `type`?

---

## Desafio 5 — Configuração com literal types 🟡

**Enunciado:** modele a configuração de um sistema:
```ts
type Tema = "claro" | "escuro";
type Idioma = "pt-BR" | "en-US" | "es-ES";
type TamanhoFonte = 12 | 14 | 16 | 18;   // literal de number!
```
Crie a interface `Configuracao` usando esses tipos + `notificacoes: boolean`.
Crie `atualizarConfig(atual: Configuracao, mudancas: Partial<Configuracao>): Configuracao` que retorna um **novo** objeto (use spread `...`) sem modificar o original.

**Resultado esperado:**
```
Original:   { tema: 'claro', idioma: 'pt-BR', tamanhoFonte: 14, notificacoes: true }
Atualizada: { tema: 'escuro', idioma: 'pt-BR', tamanhoFonte: 18, notificacoes: true }
```
E `atualizarConfig(config, { tamanhoFonte: 15 })` deve dar **erro de compilação**.
