import { LightningElement } from "lwc";

export default class StudentBrowser extends LightningElement {
  studentList = [];

  constructor() {
    super();
    const studentNames = [
      "rad",
      "luke",
      "stuart",
      "alissa",
      "korina",
      "miquella"
    ];
    this.studentList = studentNames.map((studentName, index) => {
      return {
        sobjectType: "Contact",
        Name: studentName,
        PhotoUrl: "/services/images/photo/003B0FakePictId",
        Id: index
      };
    });
  }
}
