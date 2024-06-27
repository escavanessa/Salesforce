import { LightningElement, track } from "lwc";

export default class Challenge_currentDateTime extends LightningElement {
  @track dateNow

  get time() {
  }

  get date() {
    let today = new Date();
    this.dateNow = today.toISOString();
  }

  handleClick() {
    this.date();
  }
}
