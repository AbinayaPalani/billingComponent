const elements = require('../utilis/element.util')
const constantsData = require('../constants')

class setmoreCheckBilling{


    //https://jucv3-dot-staging-cochii-hrd.appspot.com/logout.do


    get setmoreEmailId(){ return $("input#username") }
    get setmorePassword(){ return $("input#password") }
    get setmoreLogin(){ return $('a#login-now') }
    get settingTab() { return $('li#settings_new') }
    get accountBillingTab() { return $('ul.nav.nav-tab.nav-stacked li:nth-child(1) a') }
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
    


}