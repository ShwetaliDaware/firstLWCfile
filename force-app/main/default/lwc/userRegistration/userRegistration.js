import { LightningElement } from 'lwc';
import registerUser from '@salesforce/apex/UserController.registerUser';
// import login from '@salesforce/apex/UserController.loginUser';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UserRegistration extends LightningElement {
     firstName = '';
    lastName = '';
    email = '';
    company = '';
    country = '';
    postalCode = '';
    username = '';
    password = '';

    handleChange(event) {
        this[event.target.name] = event.target.value;
    }

    registerUser() {
        const user = {
            First_Name__c: this.firstName,
            Last_Name__c: this.lastName,
            Email_ID__c: this.email,
            Company_Name__c: this.company,
            Country__c: this.country,
            Postal_Code__c: this.postalCode,
            Username__c: this.username,
            Password__c: this.password
        };

        registerUser({ user })
            .then(() => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'User registered successfully!',
                    variant: 'success'
                }));
            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                }));
            });
    }

    handleCancel() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'UserController__c',
                actionName: 'list'
            }
        });
    }

    
}