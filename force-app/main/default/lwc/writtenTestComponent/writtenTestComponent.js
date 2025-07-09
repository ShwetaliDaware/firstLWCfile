import { LightningElement } from 'lwc';

export default class WrittenTestComponent extends LightningElement {
    candidateName = '';
    password = '';
    showResult = false;

    handleNameChange(event) {
        this.candidateName = event.target.value;
    }

    handleScoreChange(event) {
        this.password = event.target.value;
    }

    recordDetails() {
        alert(`Recorded: ${this.candidateName} - ${this.password}`);
        this.showResult = false;
        // Call Apex to save the test result
    }

    showDetails() {
        this.showResult = true;
    }
}
