import { LightningElement, track } from 'lwc';
import getAccRecords from '@salesforce/apex/imperativeApexCntrl.getAccRecords';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {clabel} from 'c./customLabelUtility';

export default class ImperativeApexCMP extends LightningElement {
    @track result = [];
    clabel = {custom_button_label}; //blank object means -> {}
      clickHandler() {
         alert('label from custom'+custom_button_label);
        // getAccRecords this a apex method whenever its call after then(true function) function called function(is a anonymous function) he jar
        //  successs asel tr call hoil otherwise catch function call hoil(else form madhe) == apexMethod().then().catch()

        // javascript code synchronous la execute hoto jar async keyword use kela tr to asynhronous ni execute hoto
        // async means multithreading -parallerycode executed. multiple code executed, use await keyword to get the return values
        // and synchronous means one by one code exceuted
          getAccRecords().then(res =>{
            this.result = res;
            
        const event = new ShowToastEvent({
            title: 'Get account records successfully',
            message: this.result[0].Name,
        });
        this.dispatchEvent(event);
     
            console.log(res);          
        }).catch(error => {
 
        }) 

    }
}