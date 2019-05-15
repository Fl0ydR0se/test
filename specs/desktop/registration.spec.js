import assert from 'assert'
import RegistrationPage from '../../pageobjects/desktop/registration.page'

describe('Fill in the registration form', () => {
    beforeEach(() => { 
        RegistrationPage.open()
        RegistrationPage.pressRegistrationButton() 
    })
    
    it('Register with an already registered email address', () => {        
        RegistrationPage.writeEmail('dan.dyachenko@gmail.com')
        RegistrationPage.pressSubmitButton()
        assert.strictEqual(RegistrationPage.registrationError.getText(),
        ('У вас уже есть аккаунт на Booking.com с этим электронным адресом: dan.dyachenko@gmail.com. Вы можете войти в систему здесь.'))
    }),

    it('Register with unregistered email address', () => { 
        RegistrationPage.writeEmail('d.dyachenko@gmail.com')
        RegistrationPage.pressSubmitButton()
        RegistrationPage.waitForPasswordText()
        assert.strictEqual(RegistrationPage.newPasswordText.getText(), ('Создание пароля'))
    })
})