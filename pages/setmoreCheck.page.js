const elements = require('../utilis/element.util')
const constantsData = require('../constants')

class setmoreCheckBilling{


    //https://jucv3-dot-staging-cochii-hrd.appspot.com/logout.do


    get setmoreEmailId(){ return $("input#username") }
    get setmorePassword(){ return $("input#password") }
    get setmoreLogin(){ return $('a#login-now') }
    get settingTab() { return $('li#settings_new') }
    get accountBillingTab() { return $('ul.nav.nav-tab.nav-stacked li:nth-child(1) a') }
    get iframeBillingId() { return $('#jbillingiframe') }
    get iframeBillingTab() { return $('ul.nav.nav-pills.nav-stacked.side-list li:nth-child(3) a') }
    get setmoreSignup() { return $('a#signupbutton') }
    get nameForSignup() { return $('input#name-signup') }
    get emailForSignup() { return $('input#email-signup') }
    get passwordForSignUp() {return $('input#password-signup') }
    get submitForSignup() { return $('a.button-signup.create-account-button.create-account-text')}
    get choosingPlanForSignup() { return $('a#select-free-plan')}
    get businessNameForSignup() { return $('input#setup-companyname')}
    get industryTypeForSignup() { return $('input#industry-type')}
    get randomIndustryForChoose() { return $('ul#industry-types-list li')}
    get phoneNumForSignup() { return $('input#setup-phoneNo')}
    get nextBussinesHour() { return $('button#setup-hours-continue')}
    get contdStaffNext() { return $('setup-staff-continue')}
    get serviceContd() { return $('button#setup-service-continue')}
    get pickLivBooking() { return $('div.card.row.product-card a.button.button-pink')}
    get activatePinkButton() { return $('a#btn-activate-lb') }
    //get iframeBTHostedFieldCardNum() { return $('iframe#braintree-hosted-field-number')}
    //get CCNumber() {return $('input#credit-card-number')}
    //get iframeBTHostedFieldExpDate() {return $('iframe#braintree-hosted-field-expirationDate')}
   // get expDate() { return $('input#expiration')}
    // get iframeBTHostedFieldCVV() { return $('iframe#braintree-hosted-field-cvv')}       
    // get checkboxToAgree() { return $('ul.check-list.terms-checkbox li.selected span i')}
    // get confirmButton() { return $('button#hosted-field-confirm-button')}
    // get cardNumber() { return $('span#live-card-number-hosted')}
    // get backArrowOnPaymentPage() { return $('a#back-arrow i.setmore-icon-arrow-left')}
    

    //Total due xpath or selector definition

    get totalDuePayNowButton() { return $('div.pay-bill.flex-col-m button.btn-solid') }
    get checkPaymentInstrument() { return $('div.card-brand.container-border.chosen-card.mb-3.card-focus') }
    get newPaymentMethod() { return $('button.link.mr-a') }
    get clickNewccOrdc() { return $('div.card.flex-col.cur-ptr.card-focus') }
    get cardName() { return $('input#cardName') }
    get cardNumber() { return $('div#card-number.hosted-field.form-field.form-field--md') }
    get expireDate() { return $('div#expiry-date iframe#braintree-hosted-field-expirationDate') }
    get cvv() { return $('div#cvv iframe#braintree-hosted-field-cvv') }
    get zipCode() { return $('div#zip-code iframe#braintree-hosted-field-postalCode') }
    get payButton() { return $('button.g-btn-primary') }
    get cancelButton() { return $('button.g-btn-negative')}
    get addCardButton() { return $('button.g-btn-primary#addCard') }


    setmoreLoginEmailId(loginName){

        elements.doSetValue(this.setmoreEmailId, loginName)
    }

    setmoreLoginPassword(password){

        elements.doSetValue(this.setmorePassword, password)
    }

    setmoreLogInToAccount(){

        elements.doClick(this.setmoreLogin);
    }

    setmoreSignupClick(){

        elements.doClick(this.setmoreSignup)
        
    }

    enterLoginName(loginName){

        elements.doSetValue(this.nameForSignup, loginName)
    }

    enterEmailId(emailId){

        elements.doSetValue(this.emailForSignup, emailId)
    }

    enterPassword(password){

        elements.doSetValue(this.passwordForSignUp, password)
    }

    submitCredentials(){

        elements.doClick(this.submitForSignup)
    }

    selectPlansForSignUp(){

        elements.doClick(this.choosingPlanForSignup)
    }


    enterBusinessName(businessName){

        elements.doSetValue(this.businessNameForSignup, businessName)
    }

    chooseIndustryType(listNumber){

        elements.doSetValue("ul#industry-types-list li:nth-child("+listNumber+")")

    }

    enterPhoneNumber(){

        elements.doSetValue(this.phoneNumForSignup)
    }

    clickNextOfBusinessHours(){

        elements.doClick(this.nextBussinesHour)
    }

    clickNextOfStaffPage(){

        elements.doClick(this.contdStaffNext)
    }

    finishToServiceSetup(){

        elements.doClick(this.serviceContd)
    }

    clickSettingTab(){

        elements.doClick(this.settingTab)
    }


    clickAccountBillingTab(){

        elements.doClick(this.accountBillingTab)
    }

    clickIframeBillingTab(){

        elements.doClick(this.iframeBillingTab)
    }

    navigateToBillingPageForIframe(){

        elements.doIsDisplayed(this.iframeBillingId)
    }

    payNowForTotalDue(){

        elements.doClick(this.totalDuePayNowButton)
    }

    clickNewPayment(){

        elements.doClick(this.newPaymentMethod)
    }

    enterCardName(BTcardName){
        elements.doSetValue(this.cardName, BTcardName)
    }

    enterCardNumber(BTcardNumber){
        elements.doSetValue(this.cardNumber, BTcardNumber)
    }

    enterExpDate(BTExpDate){

        elements.doSetValue(this.expireDate, BTExpDate)
    }

    enterCvv(BTCvv){

        elements.doSetValue(this.cvv, BTCvv)
    }

    enterZipCodeOnBTPage(BTzipCode){

        elements.doSetValue(this.zipCode, BTzipCode)
    }
    selectExistingPaymentInstrument(){

        elements.doClick(this.checkPaymentInstrument)
    }
    clickPayButton(){
        elements.doClick(this.payButton);
    }

    cancelPayButton(){

        elements.doClick(this.cancelButton)
    }

    selectCCoptions(){

        elements.doClick(this.clickNewccOrdc)
    }

    clickAddButton(){

        elements.doClick(this.addCardButton)
    }





}
module.exports = new setmoreCheckBilling();