import { LightningElement } from 'lwc';
 import registerUser from '@salesforce/apex/UserController.registerUser';
import loginUser from '@salesforce/apex/UserController.loginUser';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UserComponent extends LightningElement {
    username = '';
    password = '';
    isFormVisible = false;
    // isListVisible = false;

    handleUsernameChange(event) {
        this.username = event.target.value;
    }
 
    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    handleRegister() {
        this.isFormVisible = true;

        // registerUser({ username: this.username, password: this.password })
        //     .then(() => {
        //         this.dispatchEvent(
        //             new ShowToastEvent({
        //                 title: 'Registered',
        //                 message: 'User successfully registered!',
        //                 variant: 'success'
        //             })
        //         );
        //     })
        //     .catch(error => {
        //         this.dispatchEvent(
        //             new ShowToastEvent({
        //                 title: 'Registration Failed',
        //                 message: error.body.message,
        //                 variant: 'error'
        //             })
        //         );
        //     });
    }

    loginUser() {
        loginUser({ username: this.username, password: this.password })
            .then(result => {
                if (result) {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Login Successful',
                            message: 'Welcome!',
                            variant: 'success'
                        })
                    );
                } else {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Login Failed',
                            message: 'Invalid username or password, or user not registered.',
                            variant: 'error'
                        })
                    );
                }
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}