# Minha API - Estudos de Arquitetura MVC e Autenticação

Uma API RESTful desenvolvida do zero com foco prático na aplicação do padrão de arquitetura **MVC (Model-View-Controller)** e em conceitos fundamentais de **Segurança e Autenticação**. 

Este é um projeto de estudos construído para aprimorar o entendimento sobre estruturação de diretórios, separação de responsabilidades, proteção de rotas e boas práticas no desenvolvimento de APIs modernas.

---

## Tecnologias Utilizadas

O ecossistema utilizado para a construção desta API inclui:

* **Node.js**: Ambiente de execução.
* **Express**: Framework para o roteamento e middlewares.
* **MongoDB & Mongoose**: Banco de dados NoSQL e modelagem de objetos (ODM).
* **Bcrypt**: Biblioteca para criptografia (hashing) de senhas.
* **JSON Web Token (JWT)**: Padrão de mercado para geração de tokens de autenticação.
* **Variáveis de Ambiente**: Configuração nativa do Node.js (`--env-file`) para proteção de chaves e credenciais.

---

## O que eu aprendi neste projeto

Durante o desenvolvimento e refatoração desta aplicação, consolidei conceitos cruciais para o back-end:

* **Padrão MVC**: Separação clara entre as regras de banco de dados (`Models`), a lógica de negócios (`Controllers`) e o gerenciamento das rotas (`Routes`).
* **Autenticação e Autorização**: Implementação de um fluxo real de login, onde senhas nunca são salvas em texto plano e o acesso do usuário é validado via Tokens JWT.
* **Middlewares no Express**: Criação de interceptadores para proteger rotas sensíveis, barrando requisições que não possuam um token de acesso válido no cabeçalho (Bearer Token).
* **Validação de Dados e Tratamento de Erros**: Verificação de duplicidade de informações (como e-mails já cadastrados) e retorno de *Status Codes* HTTP adequados (201, 400, 401, 500).
* **Operações CRUD**: Implementação completa de rotas seguras para Criar, Ler, Atualizar e Deletar usuários.

---

## Estrutura do Projeto

A organização de pastas reflete a separação de responsabilidades do padrão MVC, acrescida da camada de segurança:

```text
src/
 ├── controllers/    # Contém a lógica de negócio das rotas (ex: Cadastro, Login)
 ├── middlewares/    # Interceptadores de requisição (ex: Proteção de rotas com JWT)
 ├── models/         # Contém os esquemas e regras (hooks) do banco de dados
 ├── db.js           # Configuração de conexão com o MongoDB
 ├── routes.js       # Centralizador de todos os endpoints (públicos e privados)
index.js             # Ponto de entrada limpo e enxuto da aplicação