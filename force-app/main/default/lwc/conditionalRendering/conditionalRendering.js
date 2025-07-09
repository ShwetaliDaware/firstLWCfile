import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    dispayDiv;
    showDivHandler(event) {
  //  alert(event.target.checked+'display ');
    this.dispayDiv = event.target.checked;
    console.log(event.target.checked);
  }
  @track status = 'Morning';
  changeHandler(event) {
    this.status = event.target.value;
  }
  get isMorning() {
    return this.status == 'Morning';
  }
  get isAfternoon() {
    return this.status == 'Afternoon';
  } 
}