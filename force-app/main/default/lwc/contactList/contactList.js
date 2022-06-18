import { LightningElement, wire } from 'lwc';
import abc from '@salesforce/apex/ContactController.getContacts';
const columns=[
    {Label:'Email', fieldName: 'Email', type:'Email'},
    { Label:'LastName', fieldName:'LastName', type:'String'},
    { Label:'FirstName', fieldName: 'FirstName', type:'string'}]

export default class ContactList extends LightningElement {
    @wire(abc) contactlist;
    columns = columns;
    

}