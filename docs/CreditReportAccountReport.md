# EcreditDirectApi.CreditReportAccountReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**accountOpen** | **Boolean** |  | [optional] 
**accountName** | **String** |  | [optional] 
**contactInformation** | [**ContactInformationReport**](ContactInformationReport.md) |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**accountStatus** | **String** |  | [optional] 
**paymentResponsibility** | **String** |  | [optional] 
**highCreditAmount** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**accountType** | **String** |  | [optional] 
**creditLimitAmount** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**termDurationMonths** | **Number** |  | [optional] 
**termFrequency** | **String** |  | [optional] 
**dateOpened** | **Date** |  | [optional] 
**balanceAmount** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**reportedDate** | **Date** |  | [optional] 
**pastDueAmount** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**lastPaymentDate** | **Date** |  | [optional] 
**actualPayment** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**monthlyPayment** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**lastActivityDate** | **Date** |  | [optional] 
**majorDelinquencyFirstReportedDate** | **Date** |  | [optional] 
**monthsReviewed** | **Number** |  | [optional] 
**creditorClassification** | **String** |  | [optional] 
**activityDesignator** | **String** |  | [optional] 
**chargeOffAmount** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**deferredPaymentStartDate** | **Date** |  | [optional] 
**balloonPaymentAmount** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**balloonPaymentDate** | **Date** |  | [optional] 
**dateClosed** | **Date** |  | [optional] 
**loanType** | [**CodeDescriptionReport**](CodeDescriptionReport.md) |  | [optional] 
**firstDelinquencyDate** | **Date** |  | [optional] 
**comments** | [**[CodeDescriptionReport]**](CodeDescriptionReport.md) |  | [optional] 
**paymentHistory** | [**[PaymentHistoryYearReport]**](PaymentHistoryYearReport.md) |  | [optional] 
**trendedDataHistory** | [**TrendedDataHistoryReport**](TrendedDataHistoryReport.md) |  | [optional] 
**isNegative** | **Boolean** |  | [optional] 



## Enum: ProviderEnum


* `EFX` (value: `"EFX"`)

* `TU` (value: `"TU"`)

* `EXP` (value: `"EXP"`)

* `UNKNOWN` (value: `"UNKNOWN"`)





## Enum: AccountStatusEnum


* `BANKRUPTCY_OR_WAGE_EARNER_PLAN` (value: `"BANKRUPTCY_OR_WAGE_EARNER_PLAN"`)

* `COLLECTION_OR_CHARGEOFF` (value: `"COLLECTION_OR_CHARGEOFF"`)

* `FORECLOSURE` (value: `"FORECLOSURE"`)

* `FORECLOSURE_OR_REPOSSESSION` (value: `"FORECLOSURE_OR_REPOSSESSION"`)

* `LATE_30_DAYS` (value: `"LATE_30_DAYS"`)

* `LATE_60_DAYS` (value: `"LATE_60_DAYS"`)

* `LATE_90_DAYS` (value: `"LATE_90_DAYS"`)

* `WAGE_EARNER_PLAN` (value: `"WAGE_EARNER_PLAN"`)

* `TOO_NEW_TO_RATE` (value: `"TOO_NEW_TO_RATE"`)

* `PAYS_AS_AGREED` (value: `"PAYS_AS_AGREED"`)

* `NOT_MORE_THAN_TWO_PAYMENTS_PAST_DUE` (value: `"NOT_MORE_THAN_TWO_PAYMENTS_PAST_DUE"`)

* `NOT_MORE_THAN_THREE_PAYMENTS_PAST_DUE` (value: `"NOT_MORE_THAN_THREE_PAYMENTS_PAST_DUE"`)

* `NOT_MORE_THAN_FOUR_PAYMENTS_PAST_DUE` (value: `"NOT_MORE_THAN_FOUR_PAYMENTS_PAST_DUE"`)

* `OVER_120_DAYS_PAST_DUE` (value: `"OVER_120_DAYS_PAST_DUE"`)

* `COLLECTION` (value: `"COLLECTION"`)

* `INCLUDED_IN_CHAPTER_13` (value: `"INCLUDED_IN_CHAPTER_13"`)

* `REPOSSESSION` (value: `"REPOSSESSION"`)

* `CHARGE_OFF` (value: `"CHARGE_OFF"`)

* `ZERO_BALANCE_AND_CURRENT_ACCOUNT` (value: `"ZERO_BALANCE_AND_CURRENT_ACCOUNT"`)

* `NO_RATE_REPORTED` (value: `"NO_RATE_REPORTED"`)

* `ACCOUNT_INACTIVE` (value: `"ACCOUNT_INACTIVE"`)

* `LOST_OR_STOLEN_CARD` (value: `"LOST_OR_STOLEN_CARD"`)

* `CONTACT_MEMBER_FOR_STATUS` (value: `"CONTACT_MEMBER_FOR_STATUS"`)

* `REFINANCED_OR_RENEWED` (value: `"REFINANCED_OR_RENEWED"`)

* `CONSUMER_DECEASED` (value: `"CONSUMER_DECEASED"`)

* `IN_FINANCIAL_COUNSELING` (value: `"IN_FINANCIAL_COUNSELING"`)

* `FORECLOSURE_PROCESS_STARTED` (value: `"FORECLOSURE_PROCESS_STARTED"`)

* `IN_WEP` (value: `"IN_WEP"`)

* `ADJUSTMENT_PENDING` (value: `"ADJUSTMENT_PENDING"`)

* `DISPUTE_RESOLUTION_PENDING` (value: `"DISPUTE_RESOLUTION_PENDING"`)

* `INCLUDED_IN_BANKRUPTCY` (value: `"INCLUDED_IN_BANKRUPTCY"`)

* `IN_BK` (value: `"IN_BK"`)

* `ASSIGNED_TO_US_DEPT_OF_ED` (value: `"ASSIGNED_TO_US_DEPT_OF_ED"`)

* `UNAVAILABLE` (value: `"UNAVAILABLE"`)





## Enum: PaymentResponsibilityEnum


* `INDIVIDUAL` (value: `"INDIVIDUAL"`)

* `JOINT_CONTRACTUAL_LIABILITY` (value: `"JOINT_CONTRACTUAL_LIABILITY"`)

* `SHARED` (value: `"SHARED"`)

* `UNDESIGNATED` (value: `"UNDESIGNATED"`)





## Enum: AccountTypeEnum


* `REVOLVING` (value: `"REVOLVING"`)

* `MORTGAGE` (value: `"MORTGAGE"`)

* `INSTALLMENT` (value: `"INSTALLMENT"`)

* `OTHER` (value: `"OTHER"`)





## Enum: CreditorClassificationEnum


* `ADVERTISING` (value: `"ADVERTISING"`)

* `CLOTHING` (value: `"CLOTHING"`)

* `COLLECTION_SERVICES` (value: `"COLLECTION_SERVICES"`)

* `CONTRACTORS` (value: `"CONTRACTORS"`)

* `DEPARTMENT_AND_MAIL_ORDER` (value: `"DEPARTMENT_AND_MAIL_ORDER"`)

* `EMPLOYMENT` (value: `"EMPLOYMENT"`)

* `FARM_AND_GARDEN_SUPPLIES` (value: `"FARM_AND_GARDEN_SUPPLIES"`)

* `FINANCE` (value: `"FINANCE"`)

* `GROCERY` (value: `"GROCERY"`)

* `HOME_FURNISHING` (value: `"HOME_FURNISHING"`)

* `JEWELRY_AND_CAMERA` (value: `"JEWELRY_AND_CAMERA"`)

* `LUMBER_AND_HARDWARE` (value: `"LUMBER_AND_HARDWARE"`)

* `MEDICAL_AND_HEALTH` (value: `"MEDICAL_AND_HEALTH"`)

* `MISCELLANEOUS_AND_PUBLIC_RECORD` (value: `"MISCELLANEOUS_AND_PUBLIC_RECORD"`)

* `OIL_AND_NATIONAL_CREDIT_CARDS` (value: `"OIL_AND_NATIONAL_CREDIT_CARDS"`)

* `PERSONAL_SERVICES_NOT_MEDICAL` (value: `"PERSONAL_SERVICES_NOT_MEDICAL"`)

* `REAL_ESTATE_AND_PUBLIC_ACCOMMODATION` (value: `"REAL_ESTATE_AND_PUBLIC_ACCOMMODATION"`)

* `SPORTING_GOODS` (value: `"SPORTING_GOODS"`)

* `UTILITIES_AND_FUEL` (value: `"UTILITIES_AND_FUEL"`)

* `WHOLESALE` (value: `"WHOLESALE"`)

* `AUTOMOTIVE` (value: `"AUTOMOTIVE"`)

* `BANKING` (value: `"BANKING"`)

* `CABLE_OR_CELLULAR` (value: `"CABLE_OR_CELLULAR"`)

* `CHECK_GUARANTEE` (value: `"CHECK_GUARANTEE"`)

* `CREDIT_UNION` (value: `"CREDIT_UNION"`)

* `EDUCATIONAL` (value: `"EDUCATIONAL"`)

* `FINANCIAL` (value: `"FINANCIAL"`)

* `GOVERNMENT` (value: `"GOVERNMENT"`)

* `INSURANCE` (value: `"INSURANCE"`)

* `MEDICAL_OR_HEALTH_CARE` (value: `"MEDICAL_OR_HEALTH_CARE"`)

* `OIL_COMPANY` (value: `"OIL_COMPANY"`)

* `PERSONAL_SERVICES` (value: `"PERSONAL_SERVICES"`)

* `RENTAL_OR_LEASING` (value: `"RENTAL_OR_LEASING"`)

* `RETAIL` (value: `"RETAIL"`)

* `UTILITIES` (value: `"UTILITIES"`)

* `UNKNOWN` (value: `"UNKNOWN"`)





## Enum: ActivityDesignatorEnum


* `CLOSED` (value: `"CLOSED"`)

* `DEFAULT` (value: `"DEFAULT"`)

* `FROZEN` (value: `"FROZEN"`)

* `LOST_OR_STOLEN` (value: `"LOST_OR_STOLEN"`)

* `OPEN` (value: `"OPEN"`)

* `PAID` (value: `"PAID"`)

* `PAID_AND_CLOSED` (value: `"PAID_AND_CLOSED"`)

* `REFINANCED` (value: `"REFINANCED"`)

* `TRANSFER_OR_SOLD` (value: `"TRANSFER_OR_SOLD"`)

* `TRANSFER_OR_SOLD_OR_PAID` (value: `"TRANSFER_OR_SOLD_OR_PAID"`)

* `TRANSFERRED` (value: `"TRANSFERRED"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




