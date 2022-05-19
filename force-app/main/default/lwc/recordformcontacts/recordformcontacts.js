import { LightningElement, api } from 'lwc';
import Name from '@salesforce/schema/Contact.Name';
import Phone from '@salesforce/schema/Contact.Phone';
import Email from '@salesforce/schema/Contact.Email';
import LeadSource from '@salesforce/schema/Contact.LeadSource';

export default class Recordformcontacts extends LightningElement {
    fields=[Name, Phone, Email, LeadSource];
    objectapiname='Contact';
    callme(event){

    }
}