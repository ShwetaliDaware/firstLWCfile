import { LightningElement } from 'lwc';

export default class StudentInfoParent extends LightningElement {
    selectedStudInfo;
    selectedName;
    selectedRollno;
    selectedAge;

    studentsInfo = [
        {Name:'Shwetali', rollno: 10,  age:20},
        {Name:'teju', rollno: 11,  age:22},
        {Name:'priya', rollno: 12,  age:24},
        {Name:'supriya', rollno: 13,  age: 26},
    ]

    // tileSelectedHandler(event) {
    //     alert(' Payload: '+JSON.stringify(event.detail));
    //     this.selectedName = event.detail.Name;
    //     this.selectedRollno = event.detail.rollno;
    //     this.selectedAge = event.detail.age;  
    // } 
    constructor() {
        
        super();   
        alert('constructor was called: ');
        this.template.addEventListener('tileclick', this.tileSelectedHandler.bind(this));
    }

    tileSelectedHandler(event) {
        alert(' addEvent listener Payload: '+JSON.stringify(event.detail));
        this.selectedName = event.detail.Name;
        this.selectedRollno = event.detail.rollno;
        this.selectedAge = event.detail.age; 
    }
}