import { LightningElement,api } from 'lwc';
 
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import SITE_FIELD from '@salesforce/schema/Account.Site';
import ANNUALREVENNU_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class inputfield extends LightningElement {
  @api recordId;
  name = NAME_FIELD;
  industry = INDUSTRY_FIELD;
  site = SITE_FIELD;
  annualrevenue = ANNUALREVENNU_FIELD;
  handleReset(event){
      const input = this.template.querySelectorAll('lightning-input-field');
      input.forEach(element => {
          element.value='';
      });
  }
}

