
const elements = require('../utilis/element.util')
const constantsData = require('../constants')

class LoginPage{

    //pageLocators:
    get username() { return $("input[name='email']")}
    get password() { return $("input[name='password']")}
    get submit() { return $("button.button-primary span") } 
    get googleButton() {return $("button.button-default img")}


    getPageTitle(){

        return elements.doGetPageTitle(constantsData.LOGIN_PAGE_TITLE)
    }

    isLoginButtonExist(){

        return elements.doIsDisplayed(this.googleButton)
    }
    doLogin(email, password){

        elements.doSetValue(this.username, email)
        elements.doSetValue(this.password, password)
        elements.doClick(this.submit)
    }



}

module.exports = new LoginPage();