# 🚀 Backend Challenge – Node.js + TypeScript + DynamoDB

Este projeto é um desafio técnico para vaga de Backend Developer. O objetivo é criar uma API RESTful utilizando **Node.js**, **TypeScript** e **DynamoDB**, com funcionalidades de gerenciamento de usuários, estabelecimentos, produtos e regras de estabelecimentos.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- AWS SDK (DynamoDB)
- UUID
- Dotenv

---

## 📁 Estrutura do Projeto

```
src/
├── controllers/
├── routes/
├── services/
├── models/
├── database/
└── index.ts
```

##  ⚙️ Funcionalidades

### 🔹 User
- Criar usuário
- Buscar por ID
- Atualizar
- Deletar
- Listar todos

### 🔹 Establishment
- Criar estabelecimento (apenas usuários do tipo `owner`)
- Buscar por ID
- Atualizar
- Deletar
- Buscar por tipo (ex: `shopping`)
- Listar todos

### 🔹 Product
- Criar produto (respeitando as regras do estabelecimento)
- Buscar por ID
- Atualizar
- Deletar
- Listar todos

### 🔹 EstablishmentRules
- Criar regra para estabelecimento
- Buscar por `establishmentId`
- Atualizar
- Deletar

---

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
````

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz com as seguintes variáveis:

```
AWS_ACCESS_KEY_ID=SUAS_CREDENCIAIS
AWS_SECRET_ACCESS_KEY=SUAS_CREDENCIAIS
AWS_REGION=us-east-1
PORT=3000
```

---

## ▶️ Executando o Projeto

```bash
npm run dev
```

A API ficará disponível em:
📍 `http://localhost:3000`

---

## 🧪 Exemplo de Requisição

### POST `/users`

```json
{
  "name": "João",
  "email": "joao@email.com",
  "type": "owner"
}
```

### POST `/establishments`

```json
{
  "name": "Loja do João",
  "type": "shopping",
  "ownerId": "uuid-do-usuario"
}
```

### POST `/products`

```json
{
  "name": "Camiseta Basica",
  "price": 39.90,
  "establishmentId": "uuid-do-estabelecimento"
}
```

### POST `/rules`

```json
{
  "establishmentId": "uuid-do-estabelecimento",
  "picturesLimit": 4,
  "videoLimit": 1
}
```

---

## ✅ Regras de Negócio

* Apenas usuários com `type = owner` podem criar estabelecimentos.
* Produtos só podem ser criados se respeitarem os limites definidos nas `EstablishmentRules`.

---

## 📌 Observações

* As tabelas precisam ser criadas manualmente no DynamoDB.
* O projeto usa UUIDs para identificação.
* Boas práticas de arquitetura foram aplicadas para garantir escalabilidade e organização.