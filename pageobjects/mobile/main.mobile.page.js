import MobilePage from '../mobile.page'
class MainMobilePage extends MobilePage 
{ 
    open () { super.open ('') }
    
    get bookingAlert () { return $("//div[@class='c-alert c-alert--deconstructive u-font-size:12 u-margin:0 js-soldout-alert']") }
    
    openMobileVersion () {
      $("//a[contains(text(),'Мобильная версия')]").scrollIntoView();
      $("//a[contains(text(),'Мобильная версия')]").click()  }
    pressEnterKey () { browser.keys("Enter") } 
    writeDestination (destination) { $('#input_destination').addValue(destination) }
    chooseDate () { 
      $("//body[@id='b2indexPage']/div[@id='main_container']/div[@id='main_content']/div[3]/div[1]/div[2]/div[1]/form[1]/div[4]/div[1]/div[1]").click();  
      $("//div[1]//div[2]//div[1]//form[1]//div[4]//div[2]//div[2]//div[1]//div[4]//div[2]//table[1]//tbody[1]//tr[4]//td[1]").click();
      $("//div[1]//div[2]//div[1]//form[1]//div[4]//div[2]//div[2]//div[1]//div[4]//div[2]//table[1]//tbody[1]//tr[4]//td[7]").click(); 
      $("//div[@class='searchbox_cross_product__overlay--calendar searchbox_cross_product__overlay']//button[@class='bui-button bui-button--primary']").click(); }     
    pressFilterButton () { $("//a[contains(@class,'sr-controls__item sr-controls__item--clickable sr-controls__item--filter')]").click() }
    pressBudgetButton () { $("//div[contains(@class,'sr-filters--group sr-filters--group--price')]//div[2]//label[1]").click() }
    pressPropertyType () { browser.pause(800); $("//div[contains(@class,'sr-filters--group sr-filters--group--district')]//div[@class='checkbox-filters__item bui-container js-checkbox-filters__item']").click() } 
    pressConfirm () { browser.pause(800); $(".bui-button__text.bui-button__regular-text").click() }
    chooseHotel() { browser.pause(800); $("//li[@id='hotel_2144887']//a[@class='sr-card__row bui-card__content']").click() } 
    pressShareButton () {
     $("//li[@class='bui-accordion__row m_hp_accordion--property_details js-m-share-list']//*[@class='bk-icon -iconset-navarrow_down bui-accordion__icon']  ").click()} 
    copyLink () { $("//div[1]//div[1]//div[1]//div[1]//div[11]//ul[1]//li[5]//div[1]//ul[1]//li[1]").click() } 
  }
  

export default new MainMobilePage()