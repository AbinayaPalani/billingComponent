const loginPage = require('../../pages/login.page')
const configData = require('../../config')
const constantsData = require('../../constants')
const billingPage = require('../../pages/fetch.page')
const setmoreBillingpage = require('../../pages/setmoreCheck.page')

class setmoreLoginTest{

    setmoreLogin(){

        describe('Launch the browser and then load the setmore url', function(){
            
                it('Launch the setmore url', function(){

                     browser.url('/logout.do')
                    
                });
            })

        describe('Enter the credential to loginto setmore', function(){

            it('Enter the user name', function(){
                
                setmoreBillingpage.setmoreLoginEmailId('dgthfhjg@test.com')
                
            });
            it('Enter the user name', function(){
                                    
                setmoreBillingpage.setmoreLoginPassword('password12345')
                
            });
                
            it('submit the credentials', function(){
                                        
                setmoreBillingpage.setmoreLogInToAccount()
                    
            });
        })
        
        describe('Go to Billing Page', function(){
               
                 it(' click the setting tab', function(){

                        setmoreBillingpage.clickSettingTab();
                });

                it(' click the account tab to move for billing section', function(){
                        
                       setmoreBillingpage.clickAccountBillingTab();

                });
                it(' click billing history to view the billing component', function(){
                        
                       setmoreBillingpage.clickNewPayment();

                });

            })
        

                    



    
}
}

module.exports = {setmoreLoginTest}; 