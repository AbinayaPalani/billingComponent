const configData = require('../../config')
const constantsData = require('../../constants')
const fetchPage = require('../../pages/fetch.page');
class FetchTest{

fetch() {

 describe('Fetch the account and then enter into billing page feature test', function(){
 
        it('fetch the account', function(){
        
            fetchPage.doFetchAccount('9223300144')
            fetchPage.doFetch()
            browser.pause(5000)
            fetchPage.doFetchOnce();
            browser.pause(12000)
           
            
        })



        it('go to billing page', function(){
          
            fetchPage.doBillingTab();
            browser.pause(2000)
        })
    
       
    })
}
}
module.exports ={FetchTest};