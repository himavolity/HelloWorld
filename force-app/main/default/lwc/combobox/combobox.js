import { LightningElement } from 'lwc';

export default class Combobox extends LightningElement {
    value= '';
    get options(){
        return [
            { label:'priya', value: ' priya H'},
        ]
    }
}