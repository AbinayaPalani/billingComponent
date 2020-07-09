const invoicepage = require('../../pages/invoiceDetails.page');
const constantsData = require('../../constants')

class InvoiceTest{



    updateInvoiceAddress(){
        describe('Testing update on invoice address', function(){
    
            it('Validate the invoice title', function(){

                const invoiceDetailsTitle = invoicepage.getInvoiceTitle();
                console.log('login page title is ',invoiceDetailsTitle)
                expect(invoiceDetailsTitle).toHaveValue(constantsData.BILLING_INVOICE_DETAILS_TITLE,{ ignoreCase: true })
                
            })

            it('click the edit on invoice detail section', function(){

                invoicepage.clickEditButtonOnInvoiceDetails()
            })

            it('Enter a new invoice address details', function(){
                
                invoicepage.setKeyIDCompanyName('BillingComponent')
                invoicepage.setKeyIDInvoiceAddress('10 SE Street')
                invoicepage.setKeyIDState('Alabama')
                invoicepage.setKeyIDZip('91223')
                                
             })

             it('save the process', function(){

                invoicepage.saveInvoiceDetails()
             })


    
    })
}

CancelInvoiceAddress(){
    describe('Testing cancel on invoice address', function(){

        it('Validate the invoice title', function(){

            const invoiceDetailsTitle = invoicepage.getInvoiceTitle();
            console.log('login page title is ',invoiceDetailsTitle)
            expect(invoiceDetailsTitle).toHaveValue(constantsData.BILLING_INVOICE_DETAILS_TITLE,{ ignoreCase: true })
            
        })

        it('click the edit on invoice detail section', function(){
            
             invoicepage.clickEditButtonOnInvoiceDetails()
         })
            

        it('Enter a new invoice address details', function(){
            
            invoicepage.setKeyIDCompanyName('BillingComponent')
            invoicepage.setKeyIDInvoiceAddress('10 SE Street')
            invoicepage.setKeyIDState('Alabama')
            invoicepage.setKeyIDZip('91223')
                            
         })

         it('save the process', function(){

            invoicepage.cancelInvoiceDetails()
         })

})
}

RemoveSubscriberDetailsAndSave(){
    describe('Testing Remove on billing contact details', function(){

        it('Validate the invoice title', function(){

            const invoiceDetailsTitle = invoicepage.getInvoiceTitle();
            console.log('login page title is ',invoiceDetailsTitle)
            expect(invoiceDetailsTitle).toHaveValue(constantsData.BILLING_INVOICE_DETAILS_TITLE,{ ignoreCase: true })
            
        })

        it('click the edit on invoice detail section', function(){
            
             invoicepage.clickEditButtonOnInvoiceDetails()
         })
            

        it('Remove the billing contact details', function(){
            
            invoicepage.removeBillingContactDetails()
         })

         it('save the process', function(){

            invoicepage.saveInvoiceDetails()
         })

})
}

RemoveSubscriberDetailsAndCancel(){
    describe('Testing Remove on billing contact details', function(){

        it('Validate the invoice title', function(){

            const invoiceDetailsTitle = invoicepage.getInvoiceTitle();
            console.log('login page title is ',invoiceDetailsTitle)
            expect(invoiceDetailsTitle).toHaveValue(constantsData.BILLING_INVOICE_DETAILS_TITLE,{ ignoreCase: true })
            
        })

        it('click the edit on invoice detail section', function(){
            
             invoicepage.clickEditButtonOnInvoiceDetails()
         })
            

        it('Remove the billing contact details', function(){
            
            invoicepage.removeBillingContactDetails()
         })

         it('save the process', function(){

            invoicepage.cancelInvoiceDetails()
         })

})
}






}

module.exports = {InvoiceTest};
