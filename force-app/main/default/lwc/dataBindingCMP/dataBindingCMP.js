import { LightningElement } from 'lwc';

export default class DataBindingCMP extends LightningElement {
    name = 'Shwetali';

    clickHandler() {
        alert('click handler was called');
        // this.name='shweta';
         alert('Button Tag '+this.template.querySelector('[data-shwetali="shwetaliSecondCustomAttr"]').label);
         alert('Button Tag '+this.template.querySelector('[data-shwetali="shwetaliCustomAttr"]').label);

    }

}