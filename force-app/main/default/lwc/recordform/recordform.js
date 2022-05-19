import { LightningElement, api } from 'lwc';
import FirstName from '@salesforce/schema/Lead.FirstName';
import LastName from '@salesforce/schema/Lead.LastName';
import LeadSource from '@salesforce/schema/Lead.LeadSource';
import Email from '@salesforce/schema/Lead.Email';
import Phone from '@salesforce/schema/Lead.Phone';
import Company from '@salesforce/schema/Lead.Company';


export default class Recordform extends LightningElement {
   
     objectapiname='Lead';
    fields=[FirstName, LastName, LeadSource, Email, Phone, Company];
    callme(event){
        
    }


}