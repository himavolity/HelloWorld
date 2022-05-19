import { LightningElement, wire } from 'lwc';
import abc from '@salesforce/apex/FetchContactinfo.leadinfo';
/*  Name, Company, Leadsource, Email, Phone, Industry */
const columns=[
{Label:'Email', fieldName: 'Email', type:'Email'},
{ Label:'Leadsource', fieldName:'Leadsource', type:'String'},
{ Label:'Company', fieldName: 'Company', type:'string'},
{ Label : 'Name', fieldName: 'Name', type: 'String'},
{ Label: 'Phone', fieldName:'Phone', type: 'number'},
{ Label: 'Industry', fieldName: 'Industry', type: 'String'}
];

export default class Datatableapril extends LightningElement {
    @wire(abc) leadlist;
    columns = columns;

}