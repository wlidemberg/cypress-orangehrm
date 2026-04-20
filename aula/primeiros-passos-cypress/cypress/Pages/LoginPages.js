// Primeiro cria classe de login.
class LoginPages {
     // Cria o método para cada ação, como acessar a página, preencher campos e clicar
     // No Page object colocamos a inteligencia [ACT](clicar, esperar, selecionar, etc)
     selectorList(){
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            alertInvalidCredentials: '.oxd-alert-content',
        }
        return selectors
     }

     accessLoginPage(){
        cy.visit('/auth/login')
     }

     loginWithUser(username, password){
        cy.get(this.selectorList().usernameField).should('be.visible').type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
     }
}
export default LoginPages;