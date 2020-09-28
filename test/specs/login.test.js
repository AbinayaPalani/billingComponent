const loginPage = require('../../pages/login.page')
const configData = require('../../config')
const constantsData = require('../../constants')
//const billingTest = require('../test/fetch.test')
const fetchPage = require('../../pages/fetch.page');
const setmoreBillingpage = require('../../pages/setmoreCheck.page')
var chai = require('chai');
var expect = chai.expect;
var rmdir = require('rmdir');
rmdir('./allure-results', function (err, dirs, files) {
});

class LoginTest{
    
login(){
    describe('login page feature test', function(){

    it('verify login page title', function(){
        browser.url('/')
        const title = loginPage.getPageTitle()
        console.log('login page title is ',title)
        expect(title).to.equal(constantsData.LOGIN_PAGE_TITLE);
        
       //expect(title).toHaveText(constantsData.LOGIN_PAGE_TITLE,{ ignoreCase: true })
    
    })

    it('verify google button', function(){
        const boolean_expect = loginPage.isLoginButtonExist()
        console.log('Testing verify google button '+boolean_expect);

        expect(loginPage.isLoginButtonExist()).to.be.true;

        //expect(loginPage.googleButton).
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

