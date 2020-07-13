const loginPage = require('../../pages/login.page')
const configData = require('../../config')
const constantsData = require('../../constants')
//const billingTest = require('../test/fetch.test')
const billingPage = require('../../pages/fetch.page');

class LoginTest{
    
login(){
    describe('login page feature test', function(){

    it('verify login page title', function(){
        browser.url('/')
        const title = loginPage.getPageTitle()
        console.log('login page title is ',title)
       expect(title).toHaveText(constantsData.LOGIN_PAGE_TITLE,{ ignoreCase: true })
       
        

    })

    it('verify google button', function(){
        const boolean_expect = loginPage.isLoginButtonExist()
        console.log('Testing verify google button '+boolean_expect);

        expect(loginPage.isLoginButtonExist()).toExist()
       //assert.equal(true, loginPage.isLoginButtonExist(), 'Google Button is not present')
    })

    it('verify Login page in cwa', function(){
        
        loginPage.doLogin(configData.userName, configData.password)
        browser.pause(4000);
     })
    
    
})
}
}
module.exports = {LoginTest};

