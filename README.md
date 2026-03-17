# API de Usuários - Estudos de Arquitetura MVC

Uma API RESTful desenvolvida do zero com foco prático na aplicação do padrão de arquitetura **MVC (Model-View-Controller)**. 

Este é um projeto de estudos construído para aprimorar o entendimento sobre estruturação de diretórios, separação de responsabilidades e boas práticas no desenvolvimento de APIs.

---

## Tecnologias Utilizadas

O ecossistema utilizado para a construção desta API inclui:

* **Node.js**: Ambiente de execução.
* **Express**: Framework para o roteamento e middlewares.
* **MongoDB**: Banco de dados NoSQL.
* **Mongoose**: Modelagem de objetos (ODM) para o MongoDB.
* **Variáveis de Ambiente**: Configuração nativa do Node.js (`--env-file`).

---

## O que eu aprendi neste projeto

Durante o desenvolvimento e refatoração desta aplicação, consolidei conceitos importantes:

* **Padrão MVC**: Separação clara entre as regras de banco de dados (`Models`), a lógica de negócios (`Controllers`) e o gerenciamento das rotas (`Routes`).
* **Refatoração de Código**: Transição de uma API monolítica (tudo no `index.js`) para uma estrutura modular e escalável.
* **Segurança Básica**: Isolamento de credenciais e dados sensíveis utilizando arquivos `.env`.
* **Operações CRUD**: Implementação completa de rotas para Criar, Ler, Atualizar e Deletar usuários.

---

## Estrutura do Projeto

A organização de pastas reflete a separação de responsabilidades do padrão MVC:

```text
src/
 ├── controllers/    # Contém a lógica de negócio das rotas
 ├── models/         # Contém os esquemas e regras do banco de dados
 ├── db.js           # Configuração de conexão com o MongoDB
 ├── routes.js       # Centralizador de todos os endpoints da API
index.js             # Ponto de entrada limpo e enxuto da aplicação