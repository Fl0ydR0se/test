
import LoginPage from '../pageobjects/login.page'
import assert from 'assert'

describe('Enter account credentials', () => {
    beforeEach(() => {
        LoginPage.open()
        LoginPage.pressSignInButton()

    });
    it('Log in with non-existing credentials', () => {        
       //LoginPage.open()
      //  LoginPage.pressSignInButton()
        LoginPage.writeEmail('12345@qwerty.qq')
        LoginPage.pressSubmitButton()
        assert.strictEqual(LoginPage.emailError.getText(), ('Похоже, у нас нет аккаунта с этим электронным адресом. Вы можете создать новый аккаунт здесь.'))             
    }),

    it('Log in with existing credentials', () => {        
      //  LoginPage.open()
      //  LoginPage.pressSignInButton()
        LoginPage.writeEmail('dan.dyachenko@gmail.com')
        LoginPage.pressSubmitButton()
        LoginPage.writePassword('0987654321')
        LoginPage.pressSubmitButton()
        assert.strictEqual(LoginPage.greeting.getText(), ('Ваш аккаунт'))             
    })
})