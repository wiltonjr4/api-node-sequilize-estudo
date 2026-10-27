# API REST de Gestão de Cursos

Aplicação back-end de estudo desenvolvida com **Node.js, Express, Sequelize ORM e SQLite**. O projeto representa um cenário de administração de **cursos**, com cadastro de pessoas, categorias, cursos e matrículas.

> **Contexto:** projeto acadêmico/de estudo concluído em sua versão atual. Seu objetivo é colocar em prática modelagem relacional, associações entre entidades e operações HTTP. Não é um produto comercial nem um sistema escolar.

## Tecnologias

- **JavaScript** e **Node.js**
- **Express** para a API HTTP
- **Sequelize ORM** e **Sequelize CLI** para a camada de persistência e migrações
- **SQLite** como banco relacional
- **Nodemon** para desenvolvimento

## Modelo de dados

O código define entidades e relações entre elas, incluindo:

- **Pessoa:** representa registros de usuários, com campos como nome, e-mail, CPF, situação ativa e papel (`role`).
- **Categoria:** classificação de cursos.
- **Curso:** título, descrição, data de início, categoria e docente.
- **Matrícula:** vínculo de um estudante com um curso.

Entre os relacionamentos definidos nos modelos:

- Um **curso** pertence a uma **categoria**.
- Um **curso** está associado a uma **pessoa docente**.
- Um **curso** possui **matrículas**.
- Uma **pessoa** pode estar associada a cursos como docente e a matrículas como estudante.

Esses relacionamentos permitem exercitar chaves estrangeiras e associações `belongsTo` / `hasMany` do Sequelize.

## Rotas HTTP

Servidor configurado para `http://localhost:3000`.

| Método | Rota | Operação |
| --- | --- | --- |
| `GET` | `/pessoas` | Listar pessoas |
| `GET` | `/pessoas/:id` | Consultar pessoa |
| `POST` | `/pessoas` | Criar pessoa |
| `PUT` | `/pessoas/:id` | Atualizar pessoa |
| `DELETE` | `/pessoas/:id` | Excluir pessoa |
| `GET` | `/cursos` | Listar cursos |
| `GET` | `/cursos/:id` | Consultar curso |
| `POST` | `/cursos` | Criar curso |
| `PUT` | `/cursos/:id` | Atualizar curso |
| `DELETE` | `/cursos/:id` | Excluir curso |
| `GET` | `/categorias` | Listar categorias |
| `GET` | `/categorias/:id` | Consultar categoria |
| `POST` | `/categorias` | Criar categoria |
| `PUT` | `/categorias/:id` | Atualizar categoria |
| `DELETE` | `/categorias/:id` | Excluir categoria |
| `POST` | `/pessoas/:estudanteId/matriculas` | Criar uma matrícula para um estudante |

**Nota:** a tabela documenta as rotas declaradas no código. Ela não substitui a validação manual das respostas e dos casos de erro.

### Exemplo de requisição

Criar um curso (`POST /cursos`), considerando que os identificadores associados já existam no banco:

```json
{
  "titulo": "Introdução à Programação",
  "descricao": "Fundamentos de lógica e algoritmos",
  "data_inicio": "2026-11-10",
  "categoria_id": 1,
  "docente_id": 1
}
```

Os campos e os relacionamentos descritos aqui refletem a modelagem do projeto. Valide as exigências dos controllers e a existência das referências antes de executar o exemplo.

## Executar localmente

**Pré-requisitos:** Node.js e npm.

1. Clone o repositório:

   ```bash
   git clone https://github.com/wiltonjr4/api-node-sequilize-estudo.git
   cd api-node-sequilize-estudo
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Confira a configuração do Sequelize (`.sequelizerc`, `src/config` e diretório de migrações). O repositório atual possui um arquivo `database.sqlite`; para preparar um banco novo, utilize as migrações conforme a configuração da aplicação:

   ```bash
   npx sequelize-cli db:migrate
   ```

4. Inicie a aplicação:

   ```bash
   npm run dev
   ```

5. Teste `GET http://localhost:3000/cursos` no Postman ou em outro cliente HTTP.

## Organização do projeto

```text
server.js                   # Inicialização do servidor na porta 3000
.sequelizerc                # Localização dos diretórios usados pelo Sequelize CLI
src/
  app.js                    # Criação da aplicação Express
  routes/                   # Rotas de pessoas, categorias e cursos
  controllers/              # Implementação das ações HTTP
  models/                   # Entidades e associações Sequelize
  migrations/               # Migrações, conforme configuração do projeto
```

## Aprendizados aplicados

- Construção de operações CRUD e rotas parametrizadas.
- Persistência de dados com ORM e banco de dados relacional.
- Modelagem de entidades e relacionamentos com chaves estrangeiras.
- Separação entre recebimento da requisição e acesso aos dados.

## Limitações e próximos passos

A versão atual é **concluída como projeto de estudo**, mas pode evoluir em qualidade de software. O script `npm test` ainda não executa uma suíte automatizada. Como próximos passos estão testes de integração, tratamento de erros, validação de entrada e padronização das respostas HTTP.

---

Desenvolvido por [Wilton Junior](https://github.com/wiltonjr4) em seus estudos de desenvolvimento back-end.
