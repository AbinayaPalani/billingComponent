const loginPage = require('../../pages/login.page')
const configData = require('../../config')
const constantsData = require('../../constants')
const billingPage = require('../../pages/fetch.page')
const setmoreBillingpage = require('../../pages/setmoreCheck.page')

class setmoreBilling{

    setmoreBillingCheck(){

        describe('Launch the browser and then load the setmore url', function(){
            
                   it('Launch the setmore url', function(){

                     browser.url('https://staging.setmore.com/')
                    
                   })
    })
}
}

module.exports = new setmoreBilling(); 