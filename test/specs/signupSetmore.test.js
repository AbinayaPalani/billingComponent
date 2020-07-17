const loginPage = require('../../pages/login.page')
const configData = require('../../config')
const constantsData = require('../../constants')
const billingPage = require('../../pages/fetch.page')
const setmoreBillingpage = require('../../pages/setmoreCheck.page')
var rn = require('random-number');


class SetmoreSignUp{
    
    setmoreSignUp(){

        var options = {
            min:  1
          , max:  100
          , integer: true
          }
          var numbers = rn(options)

        describe('SignUp of setmore page', function(){
            
            it('Launch the setmore signup page', function(){

                    browser.url('https://jucv2-dot-staging-cochii-hrd.appspot.com/logout.do')
                    const title = loginPage.getPageTitle()
                    console.log('login page title is ',title)
                    expect(title).to.equal(constantsData.SETMORE_PAGE_TITLE);       
                    //expect(title).toHaveText(constantsData.SETMORE_PAGE_TITLE,{ ignoreCase: true })                   
            })

            it('Click the signup pages', function(){

                setmoreBillingpage.setmoreSignupClick()
                
            })

            it('Enter the login name on setmore signup', function(){
      
                setmoreBillingpage.enterLoginName('Testing'+numbers+'')
                
            })


            it('Enter the emailId  on setmore signup', function(){
              
                setmoreBillingpage.enterLoginName('Testing'+numbers+'@mail.com')
                
            })
            
            it('Enter the password on setmore signup', function(){

                setmoreBillingpage.enterPassword('password12345')
            })

            it('submit the setmore signup', function(){

                setmoreBillingpage.submitCredentials()
            })


            it('submit the setmore signup', function(){
                
                setmoreBillingpage.submitCredentials()
            })

            it('Choose the plans in entrance page  on setmore', function(){
                
              setmoreBillingpage.selectPlansForSignUp();
            })
                
            it('Enter the busniessName on setmore', function(){
                
                setmoreBillingpage.enterBusinessName('Billingcomponent')
            })

            it('choose the industry type on setmore', function(){
                
                setmoreBillingpage.enterBusinessName('Billingcomponent')
            })

            it('Enter the phone number', function(){
                
                setmoreBillingpage.enterPhoneNumber('9837843784')
            })

            it('Enter the phone number', function(){
                
                setmoreBillingpage.enterPhoneNumber('9837843784')
            })

            

        })


    }
    
    
    }
    
    module.exports = new SetmoreSignUp(); 