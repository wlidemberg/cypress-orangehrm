describe('Orage HRM Testes', () => {
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })

  it('Login sem credenciais', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input-group__message').should('have.length', 2)
  })

  it('Login com usuario incorrento', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('AdminTeste')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')

  })

  it('Login com senha incorreta', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123Teste')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
  })
})