/*import { LightningElement,api, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import MY_CUSTOM_OBJECT from '@salesforce/schema/namespace__Student_Details__c';
import REVIEW_OBJECT from '@salesforce/schema/Student_Details__c'; 

export default class review2 extends LightningElement { 

    @api recordId;
    @wire(getObjectInfo, { objectApiName: REVIEW_OBJECT })
    propertyOrFunction;


}*/
/*import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class review2 extends LightningElement {
    @api recordId;
    @track record;
    @track error;

    @wire(getRecord, { recordId: '$recordId', fields: ['Student_Details__c.Name'] })
    wiredAccount({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }
    }
    get name() {
        return this.record.fields.Name.value;
    }
}*/

import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Student_Details__c.Name',
    'Student_Details__c.Middle_Name__c',
    'Student_Details__c.Last_Name__c',
    'Student_Details__c.Date_of_Birth__c',
];

export default class review2 extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    Student_Details__c;

    get name() {
        return this.Student_Details__c.data.fields.Name.value;
    }

    get title() {
        return this.Student_Details__c.data.fields.Middle_Name__c.value;
    }

    get phone() {
        return this.Student_Details__c.data.fields.Last_Name__c.value;
    }

    get email() {
        return this.Student_Details__c.data.fields.Date_of_Birth__c.value;
    }
}