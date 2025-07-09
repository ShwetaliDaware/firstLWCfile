import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
export default class LdsLwcComp extends LightningElement {
oppName;
oppStageName;
oppClosedDate;
    changeHandler(event) {
        const inpLabel = event.target.label;
        inpLabel == 'Name'?  this.oppName = event.target.value : null ;
        inpLabel == 'Stage Name' ?  this.oppStageName = event.target.value : null ;
        inpLabel == 'Closed Date' ?  this.oppClosedDate = event.target.value : null ;
      //  alert( this.oppName + ' ' + this.oppStageName + ' ' + this.oppCloseDate);
    }
    onClickHandler() {
       // alert( this.oppName + ' ' + this.oppStageName + ' ' + this.oppClosedDate);
        const objfields =  {'Name' : this.oppName, 'StageName' : this.oppStageName, 'CloseDate' : this.oppClosedDate}; 
        const recordObj = {'apiName' : 'Opportunity', 'fields': objfields};
        
        createRecord(recordObj)
        .then(result => {
            alert('result:' +JSON.stringify(result.id));
           console.log('record created '+JSON.stringify(result.id));
        }).catch(error => {
            console.log(error);
         })
    }
}