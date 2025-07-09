import { LightningElement } from 'lwc';
7
export default class LwcLifeCycleChildCMP extends LightningElement {
        error;
        stack;
     renderedCallback()
    {
         console.log('child renderedCallback called =>');
       
    }
    connectedCallback()
    {
        let varElement = this.template;
        console.log('child ConnectedCallback called =>'+varElement.isConnected);
    }
    constructor()
    {
        super();//Calling Constructor of LightningElement
        console.log(' child Constructor called =>');
    }
    disconnectedCallback()
    {
        console.log('Disconnected Callback =>');
    }
}