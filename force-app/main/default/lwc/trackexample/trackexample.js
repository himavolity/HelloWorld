import { LightningElement, track } from 'lwc';

export default class Trackexample extends LightningElement {
    @track fullname={ firstname : 'jelly', lastname: 'Doe'};
    callme(event){
        const n=event.target.name;
        if(n=="fn"){
            this.fullname.firstname= event.target.value;
        }
        if(n=='sn'){
            this.fullname.lastname= event.target.value;
        }
        if(n=='a'){
            this.fullname.age=event.target.value;
        }

    }
}