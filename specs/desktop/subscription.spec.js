import SubscriptionPage from '../../pageobjects/desktop/subscription.page'
const expect = require('chai').expect 

describe('Enter the email address in the subscription form', () => {
   beforeEach(() => { SubscriptionPage.open() } )
    
   it('Subscribe to the newsletter with a non-existing email address', () => {
        SubscriptionPage.writeEmail('12345@qwerty.qq')
        SubscriptionPage.pressSubscribeButton()
        SubscriptionPage.waitForErrorText()   
        expect(SubscriptionPage.emailErrorText.getText()).to.equal('Ошибка:\nПожалуйста, укажите действительный электронный адрес')
     }),

     it('Subscribe to the newsletter with an existing email address', () => {
        SubscriptionPage.writeEmail('12345@gmail.com')
        SubscriptionPage.pressSubscribeButton()
        SubscriptionPage.waitForSuccessText()
        expect(SubscriptionPage.emailSuccessText.getText()).to.equal('Вы подписались! Скоро вы получите электронное сообщение с нашим приветствием.')
     })
})