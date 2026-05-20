# Cypress OrangeHRM Automation

Projeto de automação de testes End-to-End (E2E) utilizando Cypress na aplicação OrangeHRM.

Este projeto foi desenvolvido com foco na validação de fluxos críticos da aplicação, aplicação de boas práticas de QA e estruturação de uma automação escalável em um cenário próximo ao ambiente real.

---

## Objetivos do Projeto

- Validar fluxos críticos do OrangeHRM
- Praticar automação de testes End-to-End
- Aplicar padrões reutilizáveis de automação
- Melhorar a organização e manutenção dos testes
- Simular fluxos profissionais de automação QA

---

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

---

## Cenários Automatizados

Atualmente o projeto contempla automações dos seguintes cenários:

- Autenticação de usuários
- Validação de login inválido
- Acesso ao dashboard
- Navegação entre módulos
- Validação de elementos da interface
- Fluxos básicos da aplicação

---

## Estrutura do Projeto

```bash
cypress/
├── e2e/
├── fixtures/
├── pages/
├── support/
```

O projeto utiliza o padrão Page Object Model (POM), visando melhorar a legibilidade, reutilização e manutenção dos testes automatizados.

### Conceitos de QA Aplicados

- Testes End-to-End (E2E)
- Page Object Model (POM)
- Assertions e validações
- Seletores CSS
- Testes de fluxo de autenticação
- Organização de cenários
- Estrutura reutilizável de automação
- Validação de fluxos críticos

---

## Instalação do Projeto

Clone o repositório:

```bash
git clone https://github.com/wlidemberg/cypress-orangehrm.git
```

Acesse a pasta do projeto:

```bash
cd cypress-orangehrm
```

Instale as dependências:

```bash
npm install
```

---

## Execução dos Testes

- **Executar em modo interface gráfica:**
  ```bash
  npx cypress open
  ```

- **Executar em modo headless:**
  ```bash
  npx cypress run
  ```

---

## Ambiente Utilizado nos Testes

OrangeHRM Demo:

[https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)

---

## Evidências dos Testes

O projeto suporta geração de:

- Screenshots
- Logs de execução
- Evidências de falha
- Vídeos de execução
- Relatórios de testes

---

## Melhorias Planejadas

- Integração com CI/CD utilizando GitHub Actions
- Relatórios automatizados
- Fixtures avançadas
- Custom Commands
- Cenários negativos
- Configuração por ambientes
- Ampliação da cobertura de testes

---

## Autor

**Wlidemberg Sousa**

- GitHub: [https://github.com/wlidemberg](https://github.com/wlidemberg)
- LinkedIn: [https://www.linkedin.com/in/wlidembergsousa](https://www.linkedin.com/in/wlidembergsousa)