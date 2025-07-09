import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
   value;
    checkboxSearchHandler(event) {
        this.value = event.target.value;

    }
    checkboxSelectHandler() {
        alert('alert was called ' +this.value);
        let childComponent = this.template.querySelector('c-public-method-child').selectedValues(this.value);
    }
}