import { LightningElement, track, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { getRecord } from 'lightning/uiRecordApi';
import { createRecord } from 'lightning/uiRecordApi';
import STUDENT_OBJECT from '@salesforce/schema/Student_Details__c';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const pathItems = [
  { label: 'Student Details', value: '1', visible: false },
  { label: 'Contact Details', value: '2', visible: false },
  { label: 'Course Details', value: '3', visible: false },
  { label: 'Payment Details', value: '4', visible: false },
  { label: 'Review Details', value: '5', visible: false }
];
const pathElements = ['0', '1', '2', '3', '4', '5'];
export { pathItems, pathElements };
export default class Parentnavigation extends NavigationMixin(LightningElement) {
  @api recordId;
  @api currentState = '1';
  @api steps;
  step = 1;
  pathItems = pathItems;
  pathElements = pathElements;
  currentPath = pathElements[0];
  get isStep1() {
    console.log("isStep1");
    return this.step === 1
  }
  get isStep2() {
    console.log("isStep2");
    return this.step === 2
  }
  get isStep3() {
    console.log("isStep3");
    return this.step === 3
  }
  get isStep4() {
    console.log("isStep4");
    return this.step === 4
  }
  get isStep5() {
    console.log("isStep5");
    return this.step === 5
  }
  selectedpath(event) {
    console.log("I am in selectedpath");
    this.step = this.pathElements.indexOf(event.detail);
    console.log("I am in selectedpath " + this.step);
    this.currentPath = event.detail;
  }

  /*
  
     Create the recordInput object
    const fields = {};
    fields[ID_FIELD.fieldApiName] = this.contactId;
    fields[FIRSTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='FirstName']").value;
    fields[LASTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='LastName']").value;

    
  const recordInput = { fields };
  updateRecord(recordInput)
        .then(() =>
        {
            this.showToast('Enrollment "'+this.enrollmentName+'" Saved','','success');
        })
        .catch(error =>
        {
            this.showToast(error.body.message,'','error');
});
*/
  nextHandler(event) {
    if (this.step === 1) {
      event.preventDefault();
      console.log("I am in parent");
      /*      this.template.querySelector('c-studentdetails').querySelectorAll('lightning-input-fields')
                  .reduce((validSoFar, inputFields) => {
                      //inputFields.reportValidity();
                     console.log(" >> "+inputFields);
                  }, true);
      */
      var isValid = this.template.querySelector('c-studentdetails').validateForm(event);
      console.log("Checking in parent is valid  " + isValid);
      if (isValid) {
        console.log("I can call student handlesave and next " + isValid);
        this.template.querySelector('c-studentdetails').handlesaveandnext(event);
        this.step = this.step + 1;
        this.currentPath = this.pathElements[this.step];
        console.log("I am in next in path " + this.step);
      }
    }
    else if (this.step === 2) {
      var isValid = this.template.querySelector('c-contactdetails').validateForm(event);
      console.log(" calling contact details from parent");
      if (isvalid) {
        this.template.querySelector('c-contactdetails').handlesaveandnext(event);
        this.step = this.step + 1;
        this.currentPath = this.pathElements[this.step];
        console.log("I am in next in path " + this.step);
      }
    } else if (this.step === 3) {
      var isValid = this.template.querySelector('c-coursedetails').validateForm(event);
      console.log(" calling contact details from parent");
      if (isvalid) {
      this.template.querySelector('c-coursedetails').handlesaveandnext(event);
      this.step = this.step + 1;
      this.currentPath = this.pathElements[this.step];
      console.log("I am in next in path " + this.step);
    } 
  }else if (this.step === 4) {
    var isValid = this.template.querySelector('c-paymentdetails').validateForm(event);
      console.log(" calling contact details from parent");
      if (isvalid) {
      this.template.querySelector('c-paymentdetails').handlesaveandnext(event);
      this.step = this.step + 1;
      this.currentPath = this.pathElements[this.step];
      console.log("I am in next in path " + this.step);
    } 
  }else {
      this.template.querySelector('c-review').handlesaveandnext(event);
      this.step = this.step + 1;
      this.currentPath = this.pathElements[this.step];
      console.log("I am in next in path " + this.step);
    }

  }
  backHandler(event) {
    this.step = this.step - 1;
    this.currentPath = this.pathElements[this.step];
  }
  exithome(event) {
    console.log('Hi');
    this[NavigationMixin.Navigate]({
      type: 'standard__namedPage',
      attributes: {
        pageName: 'home'
      },
    });

  }
  pathHandler(event) {
    this.currentState = event.currentTarget.value;
    console.log("event target " + event.target);
    this.step = this.currentState;
    event.target.dispatchEvent(new CustomEvent('selectedpath', {
      detail: this.step
    }));
    //this.currentPath = this.pathElements[this.step];
    // console.log("pathHandler  "+this.currentPath);
  }
}