# Teste_automatizado_ebacShop
Automação do fluxo de cadastro de usuário e compra na loja virtual EBAC-Shop, com Cypress

# Projeto de Teste Automatizado – EBACSHOP

Este repositório contém o projeto de automação de testes do **EBACSHOP**, uma aplicação de e-commerce desenvolvida para fins educacionais.  
Os testes foram implementados utilizando **Cypress**, seguindo uma arquitetura organizada em **Page Objects**, **Actions**, **Fixtures** e **Factories** (com uso de **Faker.js** para geração de dados dinâmicos).

---

## Estrutura do Projeto
```bash
TESTE_AUTOMATIZADO_EBACSHOP
├── cypress
│ ├── e2e
│ │ ├── carrinhoCompras
│ │ │ └── comprasTest.cy.js
│ │ ├── usuario
│ │ │ ├── cadastroTest.cy.js
│ │ │ └── loginTest.cy.js
│ ├── factories
│ │ └── Faker.js
│ ├── fixtures
│ │ └── produtos.json
│ ├── support
│ │ ├── actions
│ │ │ ├── cadastroActions.js
│ │ │ ├── comprasActions.js
│ │ │ └── loginActions.js
│ │ ├── page_objects
│ │ │ ├── CadastroPage.js
│ │ │ ├── ComprasPage.js
│ │ │ └── LoginPage.js
│ │ ├── commands.js
│ │ └── e2e.js
├── node_modules
├── cypress.config.js
├── cypress.env.json
├── Jenkinsfile
├── package-lock.json
└── package.json
```
---

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) → Framework principal de automação  
- [Node.js](https://nodejs.org/) → Ambiente de execução JavaScript 
- [Faker.js](https://fakerjs.dev/) → Geração dinâmica de massa de dados

---

## Estrutura de Pastas e Responsabilidades

| Diretório / Arquivo | Descrição |
|----------------------|-----------|
| `cypress/e2e` | Contém os arquivos de testes (divididos por suíte) |
| `fixtures` | Massa de dados fixa para produtos |
| `factories/Faker.js` | Geração dinâmica de dados para usuários e formulário de cadastro |
| `support/actions` | Conjunto de funções de alto nível que realizam fluxos completos |
| `support/page_objects` | Definição de elementos e métodos das páginas |

---

## Arquitetura de Teste

O projeto foi estruturado seguindo uma abordagem **modular e escalável**:

1. **Page Object (POM)** → Representa os elementos e ações básicas de cada página.  
2. **Actions** → Combina métodos do POM para formar fluxos funcionais.  
3. **Factories (Faker.js)** → Cria dados falsos, realistas e dinâmicos.  
4. **Fixtures** → Armazena massas estáticas.  
5. **Testes (E2E)** → Executam as suítes de testes com base nos cenários definidos.
6. **cypress.env.json** → Para armazenar as credenciais de acesso.

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
- ✅ Deve efetuar a compra selecionando na lista de produtos  

---

## Exemplo de Fixture (`produtos.json`)

```json
[
  {
    "nome": "Lando Gym Jacket",
    "tamanho": "XS",
    "cor": "Gray",
    "quantidade": 1
  },
  {
    "nome": "Aero Daily Fitness Tee",
    "tamanho": "M",
    "cor": "Black",
    "quantidade": 2
  }
]


