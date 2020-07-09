const elements = require('../utilis/element.util')
const constantsData = require('../constants')
class FetchPage{


    get fetchAccount() { return $('#fetchAccountInput')}
    get fetchAccountClick() {return $('a#fetch_ac_btn')}
    get billingTab() {return $('li#billing')}
    

    doFetchAccount(accountNumber){

        elements.doSetValue(this.fetchAccount, accountNumber)

    }

    doFetch(){
        
        elements.doDoubleClick(this.fetchAccountClick)
    }

    doFetchOnce(){
        
        elements.doClick(this.fetchAccountClick)
    }
    
    doBillingTab(){

        elements.doDoubleClick(this.billingTab)
    }


}
module.exports = new FetchPage();