```markdown
# Cypress Best Practices

> Guia e repositório de referência com padrões, diretrizes e boas práticas para testes automatizados eficientes e sustentáveis com Cypress.

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- Git
- Node.js
- Um editor de código, como o VSCode

## 🗂 Estrutura do projeto

```text
cypress-best-practices/
  ├─ cypress/
  │   ├─ e2e/          # Exemplos de cenários estruturados
  │   ├─ fixtures/     # Massa de dados de exemplo
  │   └─ support/      # Comandos customizados e boas práticas aplicadas
  ├─ cypress.config.js # Configurações globais do Cypress
  ├─ package.json      # Dependências e scripts
  └─ package-lock.json

```

## ⚙️ Configuração e Instalação

1. Clone o repositório:
```bash
git clone [https://github.com/GalileoGuilherme/cypress-best-practices.git](https://github.com/GalileoGuilherme/cypress-best-practices.git)

```


2. Acesse a pasta do projeto:
```bash
cd cypress-best-practices

```


3. Instale as dependências:
```bash
npm install

```



## 🚀 Scripts NPM disponíveis

```bash
# Abrir o Cypress em modo interativo
npx cypress open

# Executar os testes em modo headless
npm run cypress:run

```

## 📌 Principais Tópicos & Padrões Abordados

* Utilização de seletores resilientes e isolados (ex: atributos customizados `data-testid`).
* Organização de testes limpos e legíveis evitando acoplamentos excessivos.
* Boas práticas em requisições de API integradas aos fluxos de UI.
* Gerenciamento eficiente de massa de dados e interceptação de rede (`cy.intercept`).

## ⚡ Objetivo

Servir como um repositório de consulta rápida para demonstrar domínio sobre arquitetura de testes limpa, escalável e alinhada com as recomendações oficiais da engenharia de qualidade moderna.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

## 👤 Autor

Desenvolvido por **Galileo Guilherme**

LinkedIn • GitHub • Email: galileoguilhermeqa@gmail.com
