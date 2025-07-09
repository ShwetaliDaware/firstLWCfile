import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubSub';
import {CurrentPageReference} from 'lightning/navigation';

export default class StudentInfoChild extends LightningElement {
    @wire(CurrentPageReference) PageReference;
 
    //this is public property it will be access by studentInfo parent component
    //public property is always read only property in the componet where you declared it.
   //it will holds the value like {name:'testName', age:20, rollno:101}
    @api studentInfo;
    // tileClickHandler() {
    //     const tileClickEvent = new CustomEvent('tileclick', {detail: this.studentInfo, bubbles: true});
    //     this.dispat
    //     chEvent(tileClickEvent);
    // }
    tileClickHandler() {
        console.log('Inside the child component');
        // const tileClickEvent = new CustomEvent('pubsubtileClick', {detail: this.studentInfo}); // {detail: this.studentInfo} - payload, // fireEvent this.studentInfo: its a JSON object 
        // this.dispatchEvent(tileClickEvent);
         fireEvent(this.PageReference, 'pubsubtileClick', this.studentInfo);
     }
}