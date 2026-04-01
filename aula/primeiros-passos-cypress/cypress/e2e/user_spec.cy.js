import userData from '../fixtures/user/userData.json'

describe('Orage HRM Testes', () => {

  const selectorList = {
    username: '[name="username"]',
    password: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    alertInputMessage: '.oxd-input-group__message',
    alertInvalidCredentials: '.oxd-alert-content',
    buttonDetails: '[href="/web/index.php/pim/viewMyDetails"]',
    firstName: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastName: '[name="lastName"]',
  }


  it.only('Login com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.username).type(userData.userSuccess.username)
    cy.get(selectorList.password).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorList.buttonDetails).click()

    cy.contains('label', 'Employee Id').parent().next().find('input').clear().type('333456')
    cy.contains('label', 'Other Id').parent().next().find('input').clear().type('654321')
    cy.contains('label', "Driver's License Number").parent().next().find('input').clear().type('abc123')
    cy.contains('label', 'Nationality').parent().next().find('.oxd-select-text-input').click()
    cy.contains('.oxd-select-option', 'Brazilian').click()
    cy.contains('label', 'Marital Status').parent().next().find('.oxd-select-text-input').click()
    cy.contains('.oxd-select-option', 'Single').click()

    cy.contains('label', 'Date of Birth').parent().next().find('input').type('1980-15-06')
    cy.get('.--close').click()

    cy.get('.oxd-button').eq(1).click()

    cy.get('.oxd-toast').should('be.visible').and('contain', 'Success')
  })

  it('Login sem credenciais', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.alertInputMessage).should('have.length', 2)
  })

  it('Login com usuario incorrento', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.username).type(userData.userNameFail.username)
    cy.get(selectorList.password).type(userData.userNameFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.alertInvalidCredentials).should('contain', 'Invalid credentials')

  })

  it('Login com senha incorreta', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.username).type(userData.userNameFail.username)
    cy.get(selectorList.password).type(userData.userNameFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.alertInvalidCredentials).should('contain', 'Invalid credentials')
  })
})