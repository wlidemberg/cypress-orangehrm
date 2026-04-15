import userData from '../fixtures/user/userData.json'
import LoginPages from '../Pages/LoginPages'
import DashboardPages from '../Pages/DashboardPages'

// Criando uma instância da classe LoginPages para usar seus métodos
const loginPage = new LoginPages() 
const dashboardPage = new DashboardPages()
describe('Orage HRM Testes', () => {

  const selectorList = {
   
    //sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    alertInputMessage: '.oxd-input-group__message',
    buttonDetails: '[href="/web/index.php/pim/viewMyDetails"]',
    firstName: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastName: '[name="lastName"]',
    genericField: '.oxd-input--active'
  }


  it.only('Login com sucesso', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    cy.get(selectorList.buttonDetails).click()
    cy.get(selectorList.firstName).clear().type('NameTest')
    cy.get(selectorList.middleName).clear().type('MiddleNameTest')
    cy.get(selectorList.lastName).clear().type('LastNameTest')
    cy.get('.oxd-form-row').eq(1).find('input').eq(0).clear().type('employee')
    cy.get('.oxd-form-row').eq(1).find('input').eq(1).clear().type('otherId')
    cy.get('.oxd-form-row').eq(1).find('input').eq(2).clear().type('driverLicense')
    cy.get('.oxd-form-row').eq(1).find('input').eq(3).clear().type('2038-15-06')
    cy.get('.--close').click()
    cy.get('.oxd-form-row').eq(2).find('.oxd-select-text-input').eq(0).click()
    cy.contains('.oxd-select-option', 'Afghan').click()
    cy.get('.oxd-form-row').eq(2).find('.oxd-select-text-input').eq(1).click()
    cy.contains('.oxd-select-option', 'Single').click()
    cy.get('.oxd-form-row').eq(2).find('input').eq(0).clear().type('1980-06-15')
    cy.get('.--close').click()
    cy.get('.oxd-form-row').eq(2).find('.oxd-radio-wrapper').eq(1).click()
    cy.get('.oxd-button').eq(1).click()

    cy.get('.oxd-toast').should('be.visible').and('contain', 'Success')

    cy.get('.oxd-form-row').eq(3).find('.oxd-select-text-input').eq(0).click()
    cy.contains('.oxd-select-option', 'A-').click()
    cy.get('.oxd-form-row').eq(3).find('input').clear().type('Comment Test other')
    cy.get('.oxd-form-actions').eq(1).find('.oxd-button').click()
    cy.get('.oxd-toast').should('be.visible').and('contain', 'Success')

    cy.get('.orangehrm-action-header').find('.oxd-button').click()
    cy.get('.oxd-file-button').click()
    cy.get('input[type="file"]').selectFile('cypress/fixtures/files/test.png', {force: true})
    cy.get('.oxd-file-input-div').should('contain', 'test.png')
    cy.get('.oxd-form-row').eq(5).find('.oxd-textarea').clear().type('Arquivo anexado!')
    cy.get('.oxd-button').eq(3).click()
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