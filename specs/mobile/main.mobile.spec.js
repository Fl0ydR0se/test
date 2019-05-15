
import MainMobilePage from '../../pageobjects/mobile/main.mobile.page'
const expect = require('chai').expect 

describe('-----', () => {
    beforeEach(() => { MainMobilePage.open() })
     
    it('-----', () => {
        MainMobilePage.openMobileVersion()
        MainMobilePage.chooseDate()
        MainMobilePage.writeDestination('Paris')
        MainMobilePage.pressEnterKey()
        MainMobilePage.pressFilterButton()
        MainMobilePage.pressBudgetButton()
        MainMobilePage.pressPropertyType()
        MainMobilePage.pressConfirm()
        MainMobilePage.chooseHotel()
        //browser.switchToWindow("handle")
       // $("//a[@class='bui-button bui-button--wide bui-button--large bui-button--primary js-hp-quick-book']").isFocused()
      //  $("//a[@class='bui-button bui-button--wide bui-button--large bui-button--primary js-hp-quick-book']").click()
      $(".m_hp_lower_accordion__icon_heading").scrollIntoView()
      $(".m_hp_lower_accordion__icon_heading").click()
      // MainMobilePage.pressShareButton()
     // MainMobilePage.copyLink()
    // expect($("//div[contains(@class,'bui-alert bui-alert--info bui-u-bleed@small')]").getText()).to.equal("Париж — на нашем сайте не осталось доступных вариантов!")   
    })
})