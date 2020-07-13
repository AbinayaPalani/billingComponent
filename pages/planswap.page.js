
const elements = require('../utilis/element.util')
const constantsData = require('../constants')
class planswapPage{

    get changeplanlink() { return $('article.plan div.mb-3.clearfix.ta-right button.link') }
    get liveanswering() { return $("//li[@class='accordion-item mb-3']/div[@class='accordion-toggle flex flex-j-sb align-m cur-ptr ph-5 pv-4']/div/h6[text()='Live Answering']") }
    get ivr() { return $("//li[@class='accordion-item mb-3']/div[@class='accordion-toggle flex flex-j-sb align-m cur-ptr ph-5 pv-4']/div/h6[text()='IVR']") }
    get additionalservices() { return $("//li[@class='accordion-item']/div[@class='accordion-toggle flex flex-j-sb align-m cur-ptr ph-5 pv-4']/div/h6[text()='Additional Services']") }
    get confirmPay() { return $(".//button[@class='g-btn-primary full-w'][text()='Confirm & Pay']") }
    get cancel() { return $(".//button[@class='g-btn-negative full-w'][text()='Cancel']") }
    get planswaptitle() { return $("//header[@class='g-modal-head']/h4[text()='Change Plan']") }
    get newlabelonplan() { return $("//div[@class='accordion-toggle flex flex-j-sb align-m cur-ptr ph-5 pv-4']/div/label[text()='NEW']") }
    get planswapclose() { return $("//header[@class='g-modal-head']/i[3]") }



    doPlanswapClick(){

        elements.doClick(this.changeplanlink)

    }

    doLiveAnsweringClick(){

        elements.doClick(this.doLiveAnsweringClick)
    }

    doIvrClick(){

        elements.doClick(this.doIvrClick)
    }

    doAdditionalService(){

        elements.doClick(this.doAdditionalService)
    }

    doPaymentClick(){

        elements.doClick(this.confirmPay)
    }

    doCancelClick(){

        elements.doClick(this.cancel)
    }

    doPlanswapTitle(){

        return elements.doGetValue(this.doPlanswapTitle)
    }

    doNewlabelExistforNewPlanChoose(){

        return elements.doIsDisplayed(this.newlabelonplan)
    }

    doPlanswapClick(){

        return elements.doClick(this.planswapclose)
    }


}

module.exports = new planswapPage();