import Page from '../page'
require('webdriverio')
class MainPage extends Page 
{
    open () { super.open ('') }
  
    get destinationErrorText () { return $('#destination__error') }
    get childrenNotification () { return $('.searchbox_children_age_default_12_dropdown__text') }
    get filterNotification () { return $("//p[@class='inspire_filter_text']") }
  
    writeDestination (destination) { $('#ss').addValue(destination) }
    pressSearchButton () { $("//div[contains(@class,'sb-searchbox-submit-col -submit-button')]//button[contains(@class,'')]").click()}  
    pressTravelForWorkLabel () { $('.bui-checkbox__label').click() }  
    pressAddChildrenButton () { $(".sb-group-children .bui-stepper__add-button").click() }
    pressOptionsButton () { 
      $(".xp__guests__count").click();
      $(".sb-group-children .bui-stepper__add-button").waitForDisplayed() } 
    closeCalendar() { 
      $('.c2-calendar').waitForDisplayed();
      $('.c2-calendar-close-button-icon').click() }
    chooseDate() {
      $('.c2-calendar').waitForDisplayed();
      $("//div[contains(@class,'sb-dates__col --checkin-field')]//div[contains(@class,'c2-calendar-body')]//div[2]//table[1]//tbody[1]//tr[4]//td[1]//span[1]").click() }
    waitForFilterNotification() { $("#inspire_filter_block").scrollIntoView() }
    pressEnterKey () { browser.keys("Enter") }
}  

  export default new MainPage()