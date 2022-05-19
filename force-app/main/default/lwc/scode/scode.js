import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class scode extends NavigationMixin(LightningElement) {
   @api value;
    handlethis(event){
       
        this.value=event.target.value;
        console.log("this.vale="+this.value);
    } 
    studentpage(event){  
        this.value=event.target.value;
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'studentdetails'
                     },
        });
        
    }
    contactpage(event)
    {
        this.value=event.target.value;
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'contactdetails'         
            },
        });
        
    }
    coursepage(event)
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'coursedetails'         
            },
        });
        this.value=event.target.value;
    }
    paymentpage(event)
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'paymentdetails'
         
            },
        });
        this.value=event.target.value;
    }

}