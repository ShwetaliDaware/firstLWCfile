import { LightningElement } from 'lwc';

export default class IterationLoopingCMP extends LightningElement {
    language = ['Java', 'apex', 'python', 'swift', 'kotlin', 'corona', 'ruby'];

    changeHandler(event) {
        this.language = event.target.value;
    }
    handleClick() {
        if(this.language) {
            this.languages = [...this.languages, this.language]
            this.language = '';
        }
    }
}