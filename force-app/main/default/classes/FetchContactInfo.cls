public with sharing class FetchContactInfo {
    @AuraEnabled( cacheable=true)

    public static List<Lead> leadinfo(){
        List<Lead> ll= [select id, Name, Company, Leadsource, Email, Phone, Industry from Lead LIMIT 20];
        return ll;
    }
}
