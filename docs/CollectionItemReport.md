# EcreditDirectApi.CollectionItemReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**reportedDate** | **Date** |  | [optional] 
**assignedDate** | **Date** |  | [optional] 
**agencyClient** | **String** |  | [optional] 
**orginalAmountOwed** | [**MoneyReport**](MoneyReport.md) |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**accountDesignatorCode** | **String** |  | [optional] 
**balanceDate** | **Date** |  | [optional] 
**statusDate** | **Date** |  | [optional] 
**status** | **String** |  | [optional] 
**amount** | [**MoneyReport**](MoneyReport.md) |  | [optional] 



## Enum: ProviderEnum


* `EFX` (value: `"EFX"`)

* `TU` (value: `"TU"`)

* `EXP` (value: `"EXP"`)

* `UNKNOWN` (value: `"UNKNOWN"`)





## Enum: AccountDesignatorCodeEnum


* `AUTHORIZED_USER` (value: `"AUTHORIZED_USER"`)

* `CO_MAKER` (value: `"CO_MAKER"`)

* `DECEASED` (value: `"DECEASED"`)

* `INDIVIDUAL_ACCOUNT` (value: `"INDIVIDUAL_ACCOUNT"`)

* `JOINT_ACCOUNT` (value: `"JOINT_ACCOUNT"`)

* `MAKER` (value: `"MAKER"`)

* `ON_BEHALF_OF_ANOTHER_PERSON` (value: `"ON_BEHALF_OF_ANOTHER_PERSON"`)

* `SHARED` (value: `"SHARED"`)

* `TERMINATED` (value: `"TERMINATED"`)

* `UNDESIGNATED` (value: `"UNDESIGNATED"`)





## Enum: StatusEnum


* `CLOSED` (value: `"CLOSED"`)

* `FROZEN` (value: `"FROZEN"`)

* `OPEN` (value: `"OPEN"`)

* `REFINANCED` (value: `"REFINANCED"`)

* `TRANSFERRED` (value: `"TRANSFERRED"`)

* `ACCOUNT_DISPUTED` (value: `"ACCOUNT_DISPUTED"`)

* `ADJUSTMENT` (value: `"ADJUSTMENT"`)

* `CHECKED` (value: `"CHECKED"`)

* `FINANCIAL_COUNSELOR` (value: `"FINANCIAL_COUNSELOR"`)

* `IN_BANKRUPTCY` (value: `"IN_BANKRUPTCY"`)

* `NEW_LISTING` (value: `"NEW_LISTING"`)

* `OTHER` (value: `"OTHER"`)

* `PAID` (value: `"PAID"`)

* `PAYMENT` (value: `"PAYMENT"`)

* `SETTLED` (value: `"SETTLED"`)

* `STATUS_UNKNOWN` (value: `"STATUS_UNKNOWN"`)

* `SUPPRESS_COLLECTION` (value: `"SUPPRESS_COLLECTION"`)

* `UNPAID` (value: `"UNPAID"`)

* `UNSETTLED` (value: `"UNSETTLED"`)

* `WAGE_EARNER` (value: `"WAGE_EARNER"`)




