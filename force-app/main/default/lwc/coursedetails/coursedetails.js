import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class coursedetails extends LightningElement(NavigationMixin) {
    @api objectApiName;
    redirect = true;
    resetpage = false;
    @api handlesaveandnext(event) {
        console.log("I am in course handlesaveandnext")
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    handleSucess(event) {
        const RecordNumber = event.detail.id;
        console.log('onsuccess: ', RecordNumber);
       /* this.recordId=event.detail.id;*/
        const evt = new ShowToastEvent({
            title: "Course created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    handlechange() {

    }
    homepage(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home',
            },
        });      }


}
