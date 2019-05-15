import Page from '../page'
class SubscriptionPage extends Page 
{   
    open () { super.open ('') }

    get emailErrorText () { return $('.emk-feedback-msg.use_sprites_no_back.-invalid') } 
    get emailSuccessText () { return $('.emk-feedback-msg.use_sprites_no_back.-success') }

    pressSubscribeButton () { $('#newsletter_button_footer').click() }
    waitForErrorText () { this.emailErrorText.waitForDisplayed() } 
    waitForSuccessText () { this.emailSuccessText.waitForDisplayed() }  
    writeEmail (email) { $('#newsletter_to.input_newsletter_subscription_to').addValue(email) }
}

export default new SubscriptionPage()