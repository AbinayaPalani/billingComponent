const elements = require('../utilis/element.util')
const constantsData = require('../constants')


class BillingPage{
    
    get b_Title(){ return $('h1.mb-1.heavy') }
    get b_SummaryTitle() { return $('h2.mb-3') }
    get b_PlanChangeTitle() { return $('article.plan div.mb-3.clearfix.ta-right h2.float-l') }
    get b_InvoiceTitle() { return $('article.invoice-details.mr-a div.mb-3.clearfix h2.float-l') }
    get b_PaymentTitle() { return $('article.payment div.mb-3.clearfix h2.float-l') }
    get b_InvoiceDetailTitle() { return $("button[value='invoice']") }
    get b_TranscationDetailTitle() {return $("button[value='transaction']") }
    

    doBillingPageTitle(){
         
        return elements.doGetValue(this.b_Title)
    }

    doBillingSummaryTitle(){

        return elements.doGetValue(this.b_SummaryTitle)
    }

    doBillingPaymentTitle(){

        return elements.doGetValue(this.b_PaymentTitle)
    }

    doBillingInvoiceTitle(){

        return elements.doGetValue(this.b_InvoiceTitle)
    }

    doBillingPlanswapTitle(){

        return elements.doGetValue(this.b_PlanChangeTitle)
    }

    doBillingTransactionTitle(){

        return elements.doGetValue(this.b_TranscationDetailTitle)
    }

    doBillingInvoiceDetailTitle(){

        return elements.doGetValue(this.b_InvoiceDetailTitle)
    }
    


}
    
    module.exports = new BillingPage();