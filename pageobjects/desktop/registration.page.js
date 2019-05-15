import Page from '../page'

class RegistrationPage extends Page 
{
    open () {super.open ('')}
    
    get registrationError () { return $('#login_name_register-error') }
    get newPasswordText () { return $('.bui_font_display_two.bui_font_heading--bold.bui-spacer--medium.nw-step-header') } 

    pressRegistrationButton() { $('#current_account_create').click() }
    writeEmail(email) { $('#login_name_register').addValue(email) }
    pressSubmitButton() { $('.bui-button.bui-button--primary.bui-button--large.bui-button--wide').click() }
    waitForPasswordText () { $('h4=Создание пароля').waitForDisplayed()}
}

export default new RegistrationPage()