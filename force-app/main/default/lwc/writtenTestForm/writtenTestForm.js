import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class WrittenTestForm extends NavigationMixin(LightningElement) {
    handleSuccess(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Written Test record saved!',
                variant: 'success'
            })
        );
    }

    handleSaveAndNew() {
        this.template.querySelector('lightning-record-edit-form').submit();
        setTimeout(() => {
            this.template.querySelector('lightning-record-edit-form').reset();
        }, 1000);
    }

    handleCancel() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Written_Test__c',
                actionName: 'list'
            }
        });
    }
}
