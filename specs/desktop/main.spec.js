
import MainPage from '../../pageobjects/desktop/main.page'
const expect = require('chai').expect 

describe('Enter information on the main page of the site', () => {
    beforeEach(() => { MainPage.open() })

    it('Find hotels in Budapest, indicating that there will be two adults and one child', () => {
        MainPage.pressOptionsButton()
        MainPage.pressAddChildrenButton()       
        MainPage.writeDestination('Budapest')
        MainPage.pressSearchButton()  
        MainPage.closeCalendar()
        expect(MainPage.childrenNotification.getText()).to.equal('Мы по умолчанию устанавливаем 12 лет как возраст ваших детей, но если вы введете их настоящий возраст, возможно, вы сможете найти более выгодную цену.')
    }),
     
    it('Press the search button without entering a destination', () => {        
        MainPage.pressTravelForWorkLabel()             
        MainPage.pressSearchButton()
        expect(MainPage.destinationErrorText.getText()).to.equal('Ошибка:\nЧтобы начать поиск, введите направление.')
    }),
    
    it('View hotels in Paris after selecting the date of arrival and departure', () => {
        MainPage.writeDestination("Paris")
        MainPage.pressEnterKey()   
        MainPage.chooseDate() 
        MainPage.pressSearchButton()
        MainPage.waitForFilterNotification()      
        expect(MainPage.filterNotification.getText()).to.equal('Фильтры помогут вам найти отличный вариант проживания. Отметьте то, что важно именно для вас, и мы покажем результаты поиска с учетом вашего выбора.')
    })
})




