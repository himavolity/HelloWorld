import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class contactdetails extends NavigationMixin(LightningElement) {
    @api objectApiName;
    redirect = true;
    resetpage = false;
    @api
    handlesaveandnext(event) {
        if (this.checkError()) {
            event.preventDefault();
            const fields = event.detail.fields;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
            const even = new ShowToastEvent({
                title: 'Success!',
                message: 'Record created!',
                variant: 'success'
            });
            this.dispatchEvent(even);
        }
        else {
            alert('Please fill the required fields')
        }
    } checkError() {
        const areAllValid = true;
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            if (!element.reportValidity()) {
                element.reportValidity();
                areAllValid = false;
            };
        }); return areAllValid;
    }

    handleSucess(event) {
        const RecordNumber = event.detail.id;
        console.log('onsuccess: ', RecordNumber);
        this.recordId = event.detail.id;
        const evt = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }

    handlechange() {

    }
    homepage(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home',
            },
        });
    }


}
