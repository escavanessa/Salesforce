import { LightningElement, track } from "lwc";

export default class Challenge_currentDateTime extends LightningElement {
  @track timenow;
  @track datenow;

  get time() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let timenow = `${hours}:${minutes}:${seconds}`;
    this.timenow = timenow;
    return timenow;
  }

  get date() {
    const dateNow = new Date();
    const month = dateNow.getMonth() + 1;
    const day = dateNow.getDate();
    const year = dateNow.getFullYear();
    let datenow = `${month}/${day}/${year}`;
    this.datenow = datenow;
    return datenow;
  }

  handleClick() {
    this.timenow = "check1";
    this.datenow = "check2";
  }
}
