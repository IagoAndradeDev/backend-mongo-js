# Backend Template JS + Prisma 8

Template reutilizável para criação de APIs com **Node.js, Express, Prisma ORM 8 e MongoDB**.

A proposta é fornecer uma estrutura inicial pronta para novos projetos, evitando repetir as configurações de servidor, banco de dados e contrato Prisma.

## 🚀 Tecnologias

- **Node.js** — ambiente de execução JavaScript.
- **Express 5** — criação e gerenciamento de rotas HTTP.
- **Prisma ORM 8** — gerenciamento do contrato e acesso aos dados.
- **MongoDB** — banco de dados NoSQL.
- **JavaScript ES Modules** — sistema de módulos com `import` e `export`.
- **dotenv** — gerenciamento de variáveis de ambiente.

## 📁 Estrutura do projeto

```text
backend-template-js-prisma/
│
├── src/
│   ├── prisma/
│   │   ├── db.js
│   │   ├── contract.prisma
│   │   └── contract.json
│   │
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── prisma.config.ts
└── README.md
```

## 📥 Utilizando o template

Para utilizar este template em um novo projeto, clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta clonada:

```bash
cd backend-template-js-prisma
```

Instale as dependências:

```bash
npm install
```

Crie seu arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="sua_string_de_conexao_mongodb"
PORT=3000
```

Configure a conexão com seu próprio banco de dados MongoDB.

## ⚙️ Pré-requisitos

- Node.js 22.18 ou superior (versões compatíveis com o projeto).
- npm.
- Conta e banco de dados no MongoDB Atlas.

## 🗄️ Prisma e MongoDB

O projeto utiliza o sistema de contratos do Prisma ORM 8.

O arquivo `contract.prisma` define a estrutura dos modelos utilizados pela aplicação.

Depois de alterar o contrato, utilize os comandos correspondentes para gerar e sincronizar as configurações.

### Comandos disponíveis

| Comando | Função |
|---|---|
| `npm run contract:emit` | Gera o contrato JSON a partir do arquivo Prisma. |
| `npm run db:init` | Inicializa a estrutura do banco de dados. |
| `npm run db:sign` | Assina o contrato do banco. |
| `npm run db:update` | Atualiza a estrutura do banco conforme o contrato. |
| `npm run db:verify` | Verifica a sincronização entre contrato e banco. |

Para verificar a configuração do banco:

```bash
npm run db:verify
```

## 🖥️ Executando a aplicação

### Desenvolvimento

```bash
npm run dev
```

Utiliza o modo watch do Node.js para reiniciar a aplicação quando os arquivos forem modificados.

### Produção

```bash
npm start
```

Inicia o servidor sem o modo watch.

## 🛣️ Criando rotas

O Express já está configurado no arquivo `src/index.js`.

Exemplo de rota:

```js
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API funcionando!"
  });
});
```

O projeto também disponibiliza o objeto `DATA`, que representa o acesso ao ORM:

```js
const DATA = db.orm;
```

Os modelos definidos no contrato podem ser acessados por meio desse objeto.

## 🔐 Segurança

- Utilize variáveis de ambiente para informações sensíveis.
- Não envie credenciais do MongoDB para repositórios públicos.
- Mantenha o `.env` no `.gitignore`.
- Valide os dados recebidos nas rotas da API.

## 📦 Dependências

Para consultar as versões instaladas:

```bash
npm list --depth=0
```

## 🎯 Objetivo

Este template foi desenvolvido para servir como ponto de partida para novas aplicações backend.

A ideia é manter uma estrutura simples, organizada e reutilizável, permitindo adicionar novas funcionalidades, modelos e rotas conforme a necessidade de cada projeto.

---

**Backend Template JS + Prisma 8**

*Uma base para desenvolver novas APIs sem precisar começar toda a configuração do zero.*