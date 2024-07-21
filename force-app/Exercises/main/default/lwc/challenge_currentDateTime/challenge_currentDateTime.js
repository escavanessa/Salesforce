import { LightningElement } from "lwc";

export default class Challenge_currentDateTime extends LightningElement {
  //init the date
  currentDate = new Date();

  //youre referencing the date created earlier in the handle click - it displays the date (???)
  //the point of the button is lost on me because the time refreshes every second
  handleClick() {
    this.currentDate = new Date();
  }
  //the connectedcallback reloads the component everytime the interval happens, showing you the seconds change.
  connectedCallback() {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
