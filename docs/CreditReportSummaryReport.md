# EcreditDirectApi.CreditReportSummaryReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**reportGenerated** | **Date** |  | [optional] 
**creditFileSecurityFreezeFlag** | **Boolean** |  | [optional] 
**reportType** | **String** |  | [optional] 
**provider** | **String** |  | [optional] 
**subject** | [**PersonSubjectReport**](PersonSubjectReport.md) |  | [optional] 
**creditScore** | [**CreditScoreReport**](CreditScoreReport.md) |  | [optional] 
**revolvingAccounts** | [**CreditReportSummaryAccountsReport**](CreditReportSummaryAccountsReport.md) |  | [optional] 
**mortgageAccounts** | [**CreditReportSummaryAccountsReport**](CreditReportSummaryAccountsReport.md) |  | [optional] 
**installmentAccounts** | [**CreditReportSummaryAccountsReport**](CreditReportSummaryAccountsReport.md) |  | [optional] 
**otherAccounts** | [**CreditReportSummaryAccountsReport**](CreditReportSummaryAccountsReport.md) |  | [optional] 
**totalOpenAccounts** | [**CreditReportSummaryAccountsReport**](CreditReportSummaryAccountsReport.md) |  | [optional] 
**lengthOfCreditHistoryMonths** | **Number** |  | [optional] 
**totalNegativeAccounts** | **Number** |  | [optional] 
**averageAccountAgeMonths** | **Number** |  | [optional] 
**oldestAccountOpenDate** | **Date** |  | [optional] 
**oldestAccountName** | **String** |  | [optional] 
**mostRecentAccountOpenDate** | **Date** |  | [optional] 
**mostRecentAccountName** | **String** |  | [optional] 
**totalConsumerStatements** | **Number** |  | [optional] 
**mostRecentInquiryDate** | **Date** |  | [optional] 
**mostRecentInquiryName** | **String** |  | [optional] 
**totalPersonalInformation** | **Number** |  | [optional] 
**totalInquires** | **Number** |  | [optional] 
**totalPublicRecords** | **Number** |  | [optional] 
**totalCollections** | **Number** |  | [optional] 
**disputeInformation** | [**CreditReportProviderDisputeInformationReport**](CreditReportProviderDisputeInformationReport.md) |  | [optional] 



## Enum: ReportTypeEnum


* `EFX` (value: `"US_EFX"`)

* `3B` (value: `"US_3B"`)





## Enum: ProviderEnum


* `EFX` (value: `"EFX"`)

* `TU` (value: `"TU"`)

* `EXP` (value: `"EXP"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




