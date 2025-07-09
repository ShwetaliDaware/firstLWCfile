import { LightningElement } from 'lwc';

export default class LifecycleHook extends LightningElement {
    showChildTemplate = true;
    error;
    stack;
    connectedCallback()
    {
        let varElement = this.template;
        console.log('ConnectedCallback called =>'+varElement.isConnected);
    }
    constructor()
    {
        super();//Calling Constructor of LightningElement
        console.log('Constructor called =>');
    }
    renderedCallback()
    {
         console.log('renderedCallback called =>');
       
    }
    disconnectedCallback()
    {
        console.log('Disconnected Callback =>');
    }
    errorCallback(error, stack){
        console.log('Error callBack called =>');
        this.error = error;
        this.stack = stack;
    }
    clickHandler() {
        this.showChildTemplate = false;
    }
}