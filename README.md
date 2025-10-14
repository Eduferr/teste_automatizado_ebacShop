# 🧪 Projeto de Teste Automatizado – EBACSHOP

Este repositório contém o projeto de automação de testes do **EBACSHOP**, uma aplicação de e-commerce desenvolvida para fins educacionais.  
Os testes foram implementados utilizando **Cypress**, seguindo uma arquitetura organizada em **Page Objects**, **Actions**, **Fixtures** e **Factories** (com uso de **Faker.js** para geração de dados dinâmicos).

---

## 📂 Estrutura do Projeto

```bash
TESTE_AUTOMATIZADO_EBACSHOP
├── cypress
│   ├── e2e
│   │   ├── carrinhoCompras
│   │   │   └── compra.cy.js
│   │   │ 
│   │   └── usuario
│   │       ├── cadastro.cy.js
│   │       └── login.cy.js
│   │   
│   ├── factories
│   │   └── usuarioFaker.js
│   │   
│   ├── fixtures
│   │   └── produtos.json
│   │    
│   ├── support
│   │   ├── actions
│   │   │   ├── cadastroActions.js
│   │   │   ├── compraActions.js
│   │   │   └── loginActions.js
│   │   │ 
│   │   ├── pageObjects
│   │   │   ├── cadastroPage.js
│   │   │   ├── compraPage.js
│   │   │   └── loginPage.js
│   │   │ 
│   │   ├── commands.js
│   │   └── e2e.js
├── Documentos
│   └── Casos de Teste.docx
├── .gitignore
├── cypress.config.js
├── cypress.env.json
├── package-lock.json
└── package.json
```
---

🧩 Tecnologias Utilizadas
| Tecnologia                             | Descrição                                             |
| -------------------------------------- | ----------------------------------------------------- |
| **[Cypress](https://www.cypress.io/)** | Framework principal de automação de testes end-to-end |
| **[Node.js](https://nodejs.org/)**     | Ambiente de execução JavaScript                       |
| **[Faker.js](https://fakerjs.dev/)**   | Geração dinâmica e aleatória de massa de dados        |
| **JavaScript (ES6+)**                  | Linguagem utilizada na automação                      |
| **VS Code**                            | IDE utilizada para desenvolvimento                    |

---

## 🗂️ Estrutura de Pastas e Responsabilidades

| Diretório / Arquivo                 | Descrição                                                |
| ----------------------------------- | -------------------------------------------------------- |
| `cypress/e2e`                       | Contém as suítes de testes automatizados                 |
| `cypress/fixtures`                  | Massa de dados estática para produtos                    |
| `cypress/factories/usuarioFaker.js` | Geração dinâmica de usuários com Faker.js                |
| `cypress/support/actions`           | Fluxos de ações que combinam métodos de Page Objects     |
| `cypress/support/pageObjects`       | Mapeamento dos elementos e métodos de páginas            |
| `cypress.env.json`                  | Armazena variáveis de ambiente (credenciais, URLs, etc.) |

---

## 🧱 Arquitetura de Teste

A estrutura segue o padrão modular e escalável, com responsabilidades bem definidas:

- Page Object (POM) → Centraliza os elementos e ações de cada página.
- Actions → Executam fluxos completos reutilizáveis.
- Factories (Faker.js) → Criam dados de teste dinâmicos.
- Fixtures → Armazenam dados estáticos.
- Testes (E2E) → Validam o fluxo completo do usuário.

---

## Suítes e Cenários Automatizados

### 🔹 Suíte – Criar Conta de Usuário
- ✅ Deve realizar o cadastro de usuário com sucesso *(dados dinâmicos via Faker)*  
- ⚠️ Deve apresentar mensagem de erro para email já cadastrado  

### 🔹 Suíte – Testes de Login
- ✅ Deve realizar o login com sucesso  
- ⚠️ Deve exibir erro ao tentar logar sem informar o usuário  
- ⚠️ Deve exibir erro ao tentar logar com email inválido  
- ⚠️ Deve exibir erro ao tentar logar com senha incorreta  
- ⚠️ Deve exibir erro ao tentar logar com o campo senha vazio  

### 🔹 Suíte – Carrinho de Compras
- ✅ Deve efetuar a compra buscando pelo nome do produto *(dados via fixtures)* 

---

## 📦 Exemplo de Fixture (produtos.json)
```bash
[
  {
    "nome": "Lando Gym Jacket",
    "tamanho": "XS",
    "cor": "Gray",
    "quantidade": 1
  },
]
```

---

## ⚙️ Instalação e Configuração
| Etapa                                        | Descrição                          | Comando                                                                   |
| :------------------------------------------- | :--------------------------------- | :------------------------------------------------------------------------ |
| **1️⃣ Clonar o repositório**                 | Baixa o projeto localmente         | `git clone https://github.com/Eduferr/teste_automatizado_ebacShop.git` |
| **2️⃣ Entrar no diretório**                  | Acessa a pasta do projeto          | `cd teste_automatizado_ebacShop`                                          |
| **3️⃣ Iniciar o projeto e instalar dependências** | Cria o `package.json` e instala as dependências básicas | `npm init -y` <br> `npm install` |                                                       |
| **4️⃣ Instalar o Cypress** | Instala o framework de testes | `npm install -D cypress` |
| **5️⃣ Instalar o Faker.js** | Gera dados dinâmicos (nomes, e-mails, etc.) | `npm install @faker-js/faker` |                                                      |

---

## 🚀 Execução dos Testes

| Modo                          | Descrição                            | Comando                                                    |
| :---------------------------- | :----------------------------------- | :--------------------------------------------------------- |
| **Interativo (GUI)**          | Abre o painel do Cypress             | `npx cypress open`                                         |
| **Headless (terminal)**       | Executa os testes direto no terminal | `npx cypress run`                                          |
| **Executar teste específico** | Define um arquivo alvo               | `npx cypress run --spec "cypress/e2e/usuario/login.cy.js"` |
| **Com logs detalhados**       | Mostra detalhes no terminal          | `npx cypress run --browser chrome --headed`                |

---

## ✍️ Assinatura do QA

**Eduardo Ferreira**  
*Quality Assurance (QA) Engineer*  
🔗 *Automação de Testes | API | Cypress | JavaScript*  
🌐 [LinkedIn – Eduardo Ferreira](https://www.linkedin.com/in/edufgs/)  
📅 Projeto desenvolvido para fins educacionais e de prática em automação de testes.

---