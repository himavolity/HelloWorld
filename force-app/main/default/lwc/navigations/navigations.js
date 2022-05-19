import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Navigations extends NavigationMixin (LightningElement) {
    navigateToAccountHome(){
        // navigate to account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            },
        });

    }
    navigateToNewContact(){
        // navigate to new contact page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new',
            },
        });

    }
    navigateToLead(){
        // navigate to account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Lead',
                actionName: 'home',
            },
        });

    }

}
