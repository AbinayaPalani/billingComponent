const elements = require('../utilis/element.util')
const constantsData = require('../constants')

class invoiceDetailsPage{

    get editButton() { return $(".//article[@class='invoice-details mr-a']/div/button") }
    get detailsButton() { return $(".//button[text()='Details']") }
    get subscribersButton() { return $(".//button[text()='Subscribers']") }
    get companyName() { return $(".//input[@data-attr='Statement Name 1']") }
    get invoiceAddress() { return $(".//input[@data-attr='Statement Address 1']") }
    get clickState() { return $("div.g-dropdown-wrap.has-search.form-field.form-field--md.mt-3.open div button.g-drop-btn") }
    get SearchKeyState() { return $("div.g-dropdown-wrap.has-search.form-field.form-field--md.mt-3.open div div.g-dropmenu.has-arrow div.g-searchbox input") }
    get StatementCity() { return $(".//input[@data-attr='Statement City']") }
    get StatementZip() { return $(".//input[@data-attr='Statement ZIP']")}
    get SaveButton() { return $('button.g-btn-primary') }
    get CancelButton() { return $('button.g-btn-negative') }
    get RemoveBillingContact() { return $("button[data-attr='billingContact1']") }
    
    

    getInvoiceTitle(){
        
         return elements.doGetPageTitle(constantsData.BILLING_INVOICE_DETAILS_TITLE)
    }

    clickEditButtonOnInvoiceDetails(){

        return elements.doClick(this.editButton)
    }

    setKeyIDCompanyName(companyName){
        return elements.doSetValue(this.companyName, companyName)
    }

    setKeyIDInvoiceAddress(Address){
        return elements.doSetValue(this.invoiceAddress, Address)
    }

    setKeyIDState(State){

        return elements.doClick(this.SearchKeyState)
        return elements.doSetValue(this.SearchKeyState, State)
    }

    setKeyIDZip(zip){

        return elements.doSetValue(this.setKeyIDZip, zip)
    }

    saveInvoiceDetails(){

        return elements.doClick(this.SaveButton)
    }

    cancelInvoiceDetails(){

        return elements.doClick(this.CancelButton)
    }

    removeBillingContactDetails(){

        return elements.doClick(this.RemoveBillingContact)
    }

    afterSaveCheckOnInvoiceDetails(){

        return elements.doClick()
    }


}
module.exports = new invoiceDetailsPage();