import { LightningElement, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
value = ['Pratiksha'];

options = [
            {label: 'Shwetali checkbox', value:'Shwetali' },  
            {label: 'Sanu checkbox', value:'Sanu' },
            {label: 'Payal checkbox', value:'Payal' },
            {label: 'Teju checkbox', value:'Teju' },   
            {label: 'Pratiksha checkbox', value:'Pratiksha' },
            {label: 'Vaidehi checkbox', value:'Vaidehi' }
        ];
        @api selectedValues( checkboxVal) {
            alert(' selectedValue '+checkboxVal);
            let selectedValue = this.options.find(findOption => {return checkboxVal === this.value});

            if(selectedValue) {
                this.value = checkboxVal;

            }
        }
    
}