import { LightningElement, wire } from 'lwc';
import getWrittenTests from '@salesforce/apex/WrittenTestController.getWrittenTests';
import deleteWrittenTest from '@salesforce/apex/WrittenTestController.deleteWrittenTest';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class WrittenTestList extends LightningElement {
    writtenTests = [];
    wiredResult;

    columns = [
        { label: 'Written Test Name', fieldName: 'Written_Test_Name__c' },
        { label: 'College ID', fieldName: 'College_ID__c' },
         { label: 'Name', fieldName: 'Name' },
        { label: 'College Name', fieldName: 'College_Name__c' },
        { label: 'Email Id', fieldName: 'Email_Id__c' },
        {
            type: 'action',
            typeAttributes: {
                rowActions: [
                    { label: 'Edit', name: 'edit' },
                    { label: 'Delete', name: 'delete' }
                ]
            }
        }
    ];

    @wire(getWrittenTests)
    wiredWrittenTests(result) {
        this.wiredResult = result;
        if (result.data) {
            this.writtenTests = result.data;
        }
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;

        if (actionName === 'edit') {
            // 👉 Event fire karaun parent la record data pathav
            const editEvent = new CustomEvent('editrecord', {
                detail: row
            });
            this.dispatchEvent(editEvent);
        } else if (actionName === 'delete') {
            this.deleteWrittenTestRecord(row.Id);
        }
    }

    deleteWrittenTestRecord(recordId) {
        deleteWrittenTest({ recordId })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record deleted successfully',
                        variant: 'success'
                    })
                );
                return refreshApex(this.wiredResult);
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}
