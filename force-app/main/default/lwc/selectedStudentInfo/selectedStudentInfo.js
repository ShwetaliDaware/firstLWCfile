import { LightningElement, wire, track } from 'lwc';
import { registerListener } from 'c/pubSub';
import {CurrentPageReference} from 'lightning/navigation';

export default class SelectedStudentInfo extends LightningElement {

    @track studentInfo = {};
    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        this.onStudentSelectHandler;
        registerListener('pubsubtileClick', this.onStudentSelectHandler, this);
    }
    onStudentSelectHandler(payload) {
        // payload pass to the child cmp
        console.log('on student select handler called '+JSON.stringify(payload));
        this.studentInfo = payload;
    }


}