class ElementUtil{
    
        doClick(element){
            element.waitForDisplayed({ timeout: 10000 })
            element.click()
        }
    
        doDoubleClick(element){
            element.waitForDisplayed({ timeout: 10000 })
            element.doubleClick()
        }
    
    
        doSetValue(element, value){
            element.waitForDisplayed()
            element.setValue(value)
        }
    
        doGetValue(element){
            element.waitForDisplayed()
            return element.getText()
        }
    
        doIsDisplayed(element){
            element.waitForDisplayed()
            return element.isDisplayed()
        }
    
        doGetPageTitle(pageTitle){
            browser.waitUntil(function(){
    
                return (browser.getTitle() === pageTitle)
    
            }), 5000, 'title is not displayed even after given time intervals'
            return browser.getTitle()
        }
    
    
    
    
    
    
    }
    
    module.exports = new ElementUtil()