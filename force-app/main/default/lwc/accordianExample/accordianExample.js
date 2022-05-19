import { LightningElement } from 'lwc';

export default class AccordianExample extends LightningElement {
    activesection;
    callme(event){
        this.activesection='you have clicked on '+event.detail.openSections;

    }
}