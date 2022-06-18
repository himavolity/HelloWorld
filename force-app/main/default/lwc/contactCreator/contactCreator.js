import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ContactCreator extends LightningElement {
    @api recordId;
    objectApiName = CONTACT_OBJECT;
    fields = [NAME_FIELD, LAST_NAME, EMAIL];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

}