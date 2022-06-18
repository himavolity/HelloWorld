import { LightningElement,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class StudentPortal extends LightningElement {
    @track value = 'NewYork';

    get options() {
        return [
                 { label: 'NewYork', value: 'newyork' },
                 { label: 'California', value: 'california' },
                 { label: 'Kentucky', value: 'kentucky' },
               ];
    }
    get countyoptions() {
        return [
                 { label: 'Jefferson', value: 'Jefferson' },
                 { label: 'Waterson', value: 'Waterson' },
                 { label: 'Pearson', value: 'Pearson' },
               ];
    }
    get genderoptions() {
        return [
                 { label: 'Male', value: 'Male' },
                 { label: 'Female', value: 'Female' },                 
               ];
    }
    get paymentoptions() {
        return [
                 { label: 'Master Card', value: 'MasterCard' },
                 { label: 'VISA', value: 'VISA' }, 
                 { label: 'American Express', value: 'AmericanExpress' },                 
               ];
    }

    step;
    

    //First Page
    showFirstPage = true;
    

    //Second Page
    showSecondPage;

    //Third Page
    showThirdPage;

    //Fourth Page
    showFourthPage;

    //Fifth Page
    showFifthPage;
    

    nextPage(event) {
        this.setAllStepsToFalse();
        this.step = event.target.value;

        if(this.step === "1") {
            this.showFirstPage = true;
        } else if(this.step === "2") {
            this.showSecondPage = true;
        } else if(this.step === "3") {
            this.showThirdPage = true;
        } else if(this.step === "4") {
            this.showFourthPage = true;
        } else if(this.step === "5") {
            this.showFifthPage = true;
        }

    }

    previousPage(event) {
        this.setAllStepsToFalse();
        this.step = event.target.value;

        if(this.step === "1") {
            this.showFirstPage = true;
        } else if(this.step === "2") {
            this.showSecondPage = true;
        } else if(this.step === "3") {
            this.showThirdPage = true;
        } else if(this.step === "4") {
            this.showFourthPage = true;
        }
    }

    
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Success Message',
            message: 'Record saved sucessfully',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    setAllStepsToFalse() {
        this.showFirstPage = false;
        this.showSecondPage = false;
        this.showThirdPage = false;
        this.showFourthPage = false;
        this.showFifthPage = false;
    }
    

}