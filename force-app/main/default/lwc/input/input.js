import { LightningElement } from 'lwc';

export default class Input extends LightningElement {
    name;
    id;
    eligible;

    callme(event){
        const n=event.target.name;
        if(n=='fn'){
            this.name=event.target.value;
                }
                if(n=='id'){
                    this.id=event.target.value;

                }
                if(n=='eli'){
                    this.eligible=event.target.value;
                }

    }
}