import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import {createRecord } from 'lightning/uiRecordApi';
import {updateRecord } from 'lightning/uiRecordApi';
export default class studentdetails extends LightningElement(NavigationMixin) {
    @api objectApiName='Student_Details__c';
    @api recordId;
     /*  redirect = true;
    resetpage = false; */

    @api handlesaveandnext(event) {
        console.log("I am in contact handlesaveandnext")
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    @api validateForm(event) {
        console.log("validate call from parent");
        let isValid = true;
        let i;
        var formFields = Array.from(this.template.querySelectorAll('lightning-input-field'));

        for (i = 0; i < formFields.length; i++) {
            if(!formFields[i].reportValidity()) {
                isValid=false;
                break;
            }
        }
        console.log("Valid  "+isValid);
        return isValid;
    }
    handleSucess(event) {
        this.recordId = event.detail.id;
        const finalEvent = new CustomEvent('complete',{detail: this.recordId});
        this.dispatchEvent(finalEvent);
        const RecordNumber = event.detail.id;
        console.log('onsuccess: ', RecordNumber);
        this.recordId=event.detail.id;
        const evt = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    handleNextOnly()
    {
        const finalEvent = new CustomEvent('complete',{detail: this.recordId});
        this.dispatchEvent(finalEvent);
        this.spinner = false;
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
