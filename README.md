# DevLinks API: Arquitetura MVC e Gestão de Subdocumentos

Esta é a API RESTful que alimenta a plataforma DevLinks. O projeto foi desenvolvido com foco no padrão **MVC (Model-View-Controller)**, garantindo uma separação clara de responsabilidades e uma base de código escalável e segura.

---

## Tecnologias e Conceitos

* **Node.js & Express**: Core da aplicação e gerenciamento de middlewares.
* **MongoDB & Mongoose**: Modelagem de dados NoSQL com foco em subdocumentos (links aninhados ao usuário).
* **Segurança**: Hashing de senhas com **Bcrypt** e autenticação via **JSON Web Token (JWT)**.
* **Gestão de Arquivos**: Integração com **Multer** e **Cloudinary** para processamento de avatares na nuvem.
* **Configuração Nativa**: Uso de `--env-file` (Node.js 20+) para gestão de variáveis de ambiente.

---

## Implementações Técnicas em Destaque

* **Padrão MVC Robusto**: Organização lógica dividida entre `Models` (esquemas de dados), `Controllers` (lógica de negócio) e `Routes` (endpoints).
* **Gestão de Subdocumentos com MongoDB**: Implementação de operações complexas em arrays aninhados, utilizando operadores como `$push` (adicionar links) e `$pull` (exclusão cirúrgica de itens por ID).
* **Middlewares de Proteção**: Camada de segurança que intercepta requisições privadas, valida o `Bearer Token` no cabeçalho e injeta o `usuarioId` no fluxo da requisição.
* **Hooks de Pre-save**: Criptografia automática de senhas no nível do Model antes da persistência no banco de dados.
* **Tratamento de CORS e Deploy**: Configuração de headers para comunicação segura entre domínios (Frontend na Vercel e Backend no Render).

---

## Endpoints Principais

### Autenticação (Público)
* `POST /login`: Valida credenciais e retorna o Token JWT.
* `POST /usuario`: Cria um novo registro no sistema.

### Perfil e Links (Privado - Requer Token)
* `GET /meu-perfil`: Retorna os dados do usuário logado.
* `PATCH /usuario/foto`: Faz o upload/atualização do avatar via Cloudinary.
* `POST /usuario/link`: Adiciona um novo link ao array do usuário.
* `DELETE /usuario/link/:idLink`: Remove um link específico utilizando o operador `$pull`.

### Visualização (Público)
* `GET /p/:id`: Retorna os dados públicos de um usuário específico para montagem do perfil dinâmico.

---

## Estrutura de Pastas

```text
src/
 ├── controllers/    # Lógica de negócio (Cadastro, Links, Foto)
 ├── middlewares/    # Validação de JWT e upload (Multer)
 ├── models/         # Schemas do Mongoose (User)
 ├── db.js           # Conexão com MongoDB Atlas
 ├── routes.js       # Definição de endpoints e aplicação de middlewares
index.js             # Inicialização do servidor Express
```
---

## 💻 Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/tharcio09/minha-api.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as Variáveis de Ambiente:
   Crie um arquivo `.env` na raiz do projeto e aponte para a sua API (local ou em nuvem). Você pode usar o `.env.example` como base:
   ```env
   MONGO_URL=mongodb+srv://<seu_usuario>:<sua_senha>@<seu_cluster>.mongodb.net/<seu_banco>?appName=<seu_app>
   JWT_SECRET=
   JWT_EXPIRES=

   Chaves do Cloudinary
   CLOUDINARY_CLOUD_NAME=seu_cloud_name_aqui
   CLOUDINARY_API_KEY=sua_api_key_aqui
   CLOUDINARY_API_SECRET=sua_api_secret_aqui
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
