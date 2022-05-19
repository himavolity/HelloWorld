import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import STUDENT_DETAILS from '@salesforce/schema/Student_Details__c';
import NAME_FIELD from '@salesforce/schema/Student_Details__c.Name';
import MIDDLE_NAME_FIELD from '@salesforce/schema/Student_Details__c.Middle_Name__c';
import LAST_NAME_FIELD from '@salesforce/schema/Student_Details__c.Last_Name__c';
import DATE_OF_BIRTH from '@salesforce/schema/Student_Details__c.Date_of_Birth__c';
import GENDER_FIELD from '@salesforce/schema/Student_Details__c.Gender__c';
import DOCUMENT_TYPE_FIELD from '@salesforce/schema/Student_Details__c.Document_Type__c';
import DOCUMENT_NUMBER_FIELD from '@salesforce/schema/Student_Details__c.Document_Number__c';

export default class Createrecorduiapi extends LightningElement {
    formfields= {
        Name:'',
        LastName:'',
        MiddleName:'',
        DoB:'',
        Gender:'',
        DType:'',
        DNum:''
    }
    changeHandler(event){
        const { Value, name }=event.target;
        this.formfields ={ ...this.formfields, [name]:value}
    }
    pressclick(){
       const  fields={}
       fields[NAME_FIELD.fieldApiName]=this.formfields.Name
       fields[MIDDLE_NAME_FIELD.fieldApiName]=this.formfields.MiddleName
       fields[LAST_NAME_FIELD.fieldApiName]=this.formfields.LastName
       fields[DATE_OF_BIRTH.fieldApiName]=this.formfields.DoB
       fields[GENDER_FIELD.fieldApiName]=this.formfields.Gender
       fields[DOCUMENT_TYPE_FIELD.fieldApiName]=this.formfields.DType
       fields[DOCUMENT_NUMBER_FIELD.fieldApiName]=this.formfields.DNum
              let recordInput={ apiName: STUDENT_DETAILS.objectApiName, fields}
        createRecord(recordInput).then(result=>{
            this.formfields={}
                    }).catch(error=>{
console.error(error)
                    })
    }


}