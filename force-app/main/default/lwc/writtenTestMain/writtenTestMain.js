import { LightningElement } from 'lwc';

export default class WrittenTestMain extends LightningElement {
    isFormVisible = false;
    isListVisible = false;

    showForm() {
        this.isFormVisible = true;
        this.isListVisible = false;
    }

    showList() {
        this.isListVisible = true;
        this.isFormVisible = false;
    }

}