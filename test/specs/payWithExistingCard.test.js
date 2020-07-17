const setmoreBillingpage = require('../../pages/setmoreCheck.page');



class PayWithOwingBalance{

    payingWithOwingBalanceForPostiveBalance(){

        describe('Pay with owing balance if that customer had positive total Due with existing card', function(){

            it('Click the pay button for total due', function(){

                setmoreBillingpage.payNowForTotalDue();

            })

            it('Pay with existing payment instrument, click the pay button', function(){
                
                setmoreBillingpage.clickPayButton();
                
            })
        })

    }
        goPayThenCancelPayment(){

            describe('Click the payment button when customer had the postive owing balance and cancel the payment', function(){

                it('Click the pay button for total due', function(){
                    
                    setmoreBillingpage.payNowForTotalDue();
                    
                })

                it('Go And Cancel the payment with existing payment instrument', function(){
                    
                    setmoreBillingpage.cancelPayButton();
                    
                })    
             })
        }

        payWithNewCard(){

            describe('Click the payment button when customer had the postive owing balance with new payment method and add the payment instrument', function(){

                it('Click the pay button for total due', function(){
                    
                    setmoreBillingpage.payNowForTotalDue();
                    
                })

                it('Go And click new payment method', function(){
                    
                    setmoreBillingpage.clickNewPayment();
                    
                })

                it('Select CC details options', function(){
                    
                    setmoreBillingpage.selectCCoptions();
                    
                })

                it('Enter Card Name', function(){
                    
                    setmoreBillingpage.enterCardName('Abinaya');
                    
                })


                it('Enter Card Number', function(){
                    
                    setmoreBillingpage.enterCardNumber('4111111111111111');
                    
                })


                it('Enter CVV number', function(){
                    
                    setmoreBillingpage.enterCvv('232');
                    
                })

                it('Enter Expiration Date', function(){
                    
                    setmoreBillingpage.enterExpDate('09/2021');
                    
                })

                it('Enter Zip code', function(){
                    
                    setmoreBillingpage.enterZipCodeOnBTPage('937743');
                    
                })


                it('Add the payment instrument', function(){
                    
                    setmoreBillingpage.clickAddButton();
                    
                })

            })
        }



            cancelWithNewPaymentInstrument(){
                
                describe('Click the payment button when customer had the postive owing balance with new payment method and add the payment instrument', function(){
    
                    it('Click the pay button for total due', function(){
                        
                        setmoreBillingpage.payNowForTotalDue();
                        
                    })
    
                    it('Go And click new payment method', function(){
                        
                        setmoreBillingpage.clickNewPayment();
                        
                    })
    
                    it('Select CC details options', function(){
                        
                        setmoreBillingpage.selectCCoptions();
                        
                    })
    
                    it('Enter Card Name', function(){
                        
                        setmoreBillingpage.enterCardName('Abinaya');
                        
                    })
    
    
                    it('Enter Card Number', function(){
                        
                        setmoreBillingpage.enterCardNumber('4111111111111111');
                        
                    })
    
    
                    it('Enter CVV number', function(){
                        
                        setmoreBillingpage.enterCvv('232');
                        
                    })
    
                    it('Enter Expiration Date', function(){
                        
                        setmoreBillingpage.enterExpDate('09/2021');
                        
                    })
    
                    it('Enter Zip code', function(){
                        
                        setmoreBillingpage.enterZipCodeOnBTPage('937743');
                        
                    })
    
    
                    it('Cancel to save and pay in that payment instrument', function(){
                        
                        setmoreBillingpage.cancelPayButton();
                        
                    })
    
                })
                
        }

  


}