import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChildCmp extends LightningElement {
    @track value = ['Red'];

      options=  [
            { label: 'Red', value: 'Red' },
            { label: 'Blue', value: 'Blue' },
            { label: 'Pink', value: 'Pink'},
            { label: 'Purple', value: 'Purple' },
        ];
    
    @api selectedValues(checkboxVal ) {
        alert('checkboxVal: '+checkboxVal);
       // this.value = checkboxVal;
        let selectedValue = this.options.find(findOption => {return checkboxVal === this.value});

            if(selectedValue) {
                this.value = checkboxVal;

            }

    }
}