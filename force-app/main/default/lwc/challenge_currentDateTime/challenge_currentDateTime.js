import { LightningElement } from "lwc";

export default class Challenge_currentDateTime extends LightningElement {
  get currentDateTime() {
    return new Date().toLocaleString();
  }
}
