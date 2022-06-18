public with sharing class ContactController {
    @AuraEnabled(cacheable=false)
    public static List<Contact> getContacts(Id accountId) {
        return [
            SELECT FirstName, LastName, Email
            FROM Contact
                   ];
    }
}
