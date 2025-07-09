import { LightningElement } from 'lwc';

export default class PublicMethodParentCmp extends LightningElement {
    inputVal;
    inputChangeHandler(e) {
        this.inputVal = e.target.value;
    }
    clickHandler() {
         alert('alert was called ' +this.inputVal);
        var childCmp =  this.template.querySelector('c-public-method-child-cmp').selectedValues(this.inputVal);;
        // childCmp.selectedValues(inputVal);
    }
}