import { LightningElement, track, api } from 'lwc';

export default class JavaScriptProperties extends LightningElement {
   @track cities = ['Pune', 'Mumbai', 'Nagpur', 'Kolkata',  'New Delhi'];
   @api flag = false;
}