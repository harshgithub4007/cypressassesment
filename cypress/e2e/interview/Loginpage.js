const URL = 'https://www.saucedemo.com'
const UsernameInput = '#user-name'
const PasswordInput = '#password'
const LoginBtn = '#login-button'
const ValidationMsg = 'h3[data-test=error]'

class Loginpage{
    static url(){
        cy.visit(URL)
    }

    static fillusername(name){
        cy.get(UsernameInput).type(name)
    }

    static fillpassword(password){
        cy.get(PasswordInput).type(password)
    }

    static login(){ 
        cy.get(LoginBtn).click()
    }

    static validation(param){
        cy.get(ValidationMsg).should(param)
    }
}

export default Loginpage