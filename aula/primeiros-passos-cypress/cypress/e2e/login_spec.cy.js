describe('Orage HRM Testes', () => {

  const selectorList = {
    username: '[name="username"]',
    password: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    alertInputMessage: '.oxd-input-group__message',
    alertInvalidCredentials: '.oxd-alert-content',


  }

  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.username).type('Admin')
    cy.get(selectorList.password).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login sem credenciais', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.alertInputMessage).should('have.length', 2)
  })

  it('Login com usuario incorrento', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.username).type('AdminTeste')
    cy.get(selectorList.password).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.alertInvalidCredentials).should('contain', 'Invalid credentials')

  })

  it('Login com senha incorreta', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.username).type('Admin')
    cy.get(selectorList.password).type('admin123Teste')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.alertInvalidCredentials).should('contain', 'Invalid credentials')
  })
})