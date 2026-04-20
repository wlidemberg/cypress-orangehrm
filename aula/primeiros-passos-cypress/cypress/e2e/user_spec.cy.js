import userData from '../fixtures/user/userData.json'
import Menu from '../Pages/Menu'
import LoginPages from '../Pages/LoginPages'
import DashboardPages from '../Pages/DashboardPages'
import MyInfoPages from '../Pages/MyInfoPages'

// Criando uma instância da classe LoginPages para usar seus métodos
const loginPage = new LoginPages() 
const dashboardPage = new DashboardPages()
const menu = new Menu()
const myInfoPages = new MyInfoPages()
describe('Orage HRM Testes', () => {

  const selectorList = {
   
    //sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    alertInputMessage: '.oxd-input-group__message',

  }


  it.only('Login com sucesso', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password) 
    dashboardPage.checkDashboardPage()
    menu.accessMyInfo()
    myInfoPages.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myInfoPages.fillEmployee('EmployeeId', 'Other Id', 'Car', '2028-05-12')
    myInfoPages.fillPersonalData('Brazilian', 'Married', '1980-06-15', '1')
    myInfoPages.fillCustomFields('A-', 5123)
    myInfoPages.fillAttachments()

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