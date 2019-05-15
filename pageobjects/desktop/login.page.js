import Page from '../page'
class LoginPage extends Page 
{
    open () { super.open ("") };
    get greeting () { return $(".header_name.user_firstname.ge-no-yellow-bg") };
    get emailError () { return $("#username-error") };
    pressSignInButton () { $("#current_account").click() }; 
    writeEmail (email) { $("#username").addValue(email) };
    pressSubmitButton () {$(".bui-button.bui-button--primary.bui-button--large.bui-button--wide").click() };
    writePassword (password) { $("#password").addValue(password) };   
}
export default new LoginPage()