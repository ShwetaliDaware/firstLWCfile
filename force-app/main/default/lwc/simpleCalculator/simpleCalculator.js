import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    // firstNumber;
    // secondNumber;
    // result;
    // output = 'Result';
  
    // inpputHandler(event) {
    //     // const field = event.target.label;

    //     if (event.target.label === 'First Number') {
    //         this.firstNumber = parseFloat(event.target.value);
    //     } else if (event.target.label === 'Second Number') {
    //         this.secondNumber = parseFloat(event.target.value);
    //     }
    // }

    // addHandler() {
    //     this.result = this.firstNumber + this.secondNumber;
    // }

    // subHandler() {
    //     this.result = this.firstNumber - this.secondNumber;
    // }

    // mulHandler() {
    //     this.result = this.firstNumber * this.secondNumber;
    // }

    // divHandler() {
    //     if (this.secondNumber !== 0) {
    //         this.result = this.firstNumber / this.secondNumber;
    //     } else {
    //         this.result = 'Cannot divide by 0';
    //     }
    // }


   firstNumber ;
    secondNumber;
    result;
    showHistory = false;
    history = [];

    inpChangeHandler(event) {
        const label = event.target.label;
        const value = parseFloat(event.target.value);
        if (label === 'First Number') {
            this.firstNumber = value;
        } else if (label === 'Second Number') {
            this.secondNumber = value;
        }
    }

    addHandler() {
        this.result = this.firstNumber + this.secondNumber;
        this.appendHistory('+');
    }

    subHandler() {
        this.result = this.firstNumber - this.secondNumber;
        this.appendHistory('-');
    }

    mulHandler() {
        this.result = this.firstNumber * this.secondNumber;
        this.appendHistory('*');
    }

    divHandler() {
        if (this.secondNumber === 0) {
            this.result = 'Cannot divide by 0';
        } else {
            this.result = this.firstNumber / this.secondNumber;
            this.appendHistory('÷');
        }
    }

    appendHistory(operator) {
        const expression = `${this.firstNumber} ${operator} ${this.secondNumber} = ${this.result}`;
        this.history.push(expression);
    }

    toggleHistory(event) {
        this.showHistory = event.target.checked;
    }

    get historyText() {
        return this.history.length > 0
            ? this.history.map(item => `<p>${item}</p>`).join('')
            : '<p>No history yet.</p>';
    }

}