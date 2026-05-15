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

  it('Login com sucesso', () => {

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
    loginPage.accessLoginPage()
    loginPage.loginWithoutUsernameAndPassword()

  })

  it('Login com usuario incorrento', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userNameFail.username, userData.userNameFail.password)
    loginPage.checkAccessInvalid()

  })

  it('Login com senha incorreta', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userPassFail.username, userData.userPassFail.password)
    loginPage.checkAccessInvalid()
    // cy.get(selectorList.alertInvalidCredentials).should('contain', 'Invalid credentials')
  })
})