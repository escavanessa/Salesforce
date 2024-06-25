public with sharing class StudentBrowser {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getStudents(
    String instructorId,
    String courseDeliveryId
  ) {
  }
}
