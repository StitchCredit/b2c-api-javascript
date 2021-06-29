# ecredit-direct-api

EcreditDirectApi - JavaScript client for ecredit-direct-api
StitchCredit API
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.3
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ecredit-direct-api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your ecredit-direct-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var EcreditDirectApi = require('ecredit-direct-api');

var defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
var accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

var api = new EcreditDirectApi.DirectControllerApi()
var id = null; // {String} 
var DirectChangeEmailReqDTO = new EcreditDirectApi.DirectChangeEmailReqDTO(); // {DirectChangeEmailReqDTO} 
api.changeEmail(id, DirectChangeEmailReqDTO).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://efx-dev.stitchcredit.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EcreditDirectApi.DirectControllerApi* | [**changeEmail**](docs/DirectControllerApi.md#changeEmail) | **POST** /direct/change-email/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**changeHost**](docs/DirectControllerApi.md#changeHost) | **POST** /direct/change-host/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**changeMobile**](docs/DirectControllerApi.md#changeMobile) | **POST** /direct/change-mobile/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**closeAccount**](docs/DirectControllerApi.md#closeAccount) | **POST** /direct/close-account/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**efxAlert**](docs/DirectControllerApi.md#efxAlert) | **GET** /direct/efx-alert/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**efxConfig**](docs/DirectControllerApi.md#efxConfig) | **GET** /direct/efx-config/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**efxLatestEFXScore**](docs/DirectControllerApi.md#efxLatestEFXScore) | **GET** /direct/efx-latest-efx-score/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**efxLatestReport**](docs/DirectControllerApi.md#efxLatestReport) | **GET** /direct/efx-latest-report/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**efxLatestScores**](docs/DirectControllerApi.md#efxLatestScores) | **GET** /direct/efx-latest-scores/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**efxScoreHistory**](docs/DirectControllerApi.md#efxScoreHistory) | **GET** /direct/efx-score-history/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**efxScores**](docs/DirectControllerApi.md#efxScores) | **GET** /direct/efx-scores/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**getUser**](docs/DirectControllerApi.md#getUser) | **GET** /direct/user/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**login**](docs/DirectControllerApi.md#login) | **POST** /direct/login | 
*EcreditDirectApi.DirectControllerApi* | [**preauthToken**](docs/DirectControllerApi.md#preauthToken) | **GET** /direct/preauth-token/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**refreshToken**](docs/DirectControllerApi.md#refreshToken) | **GET** /direct/refresh-token | 
*EcreditDirectApi.DirectControllerApi* | [**register**](docs/DirectControllerApi.md#register) | **POST** /direct/user-reg | 
*EcreditDirectApi.DirectControllerApi* | [**registerOld**](docs/DirectControllerApi.md#registerOld) | **POST** /direct/register | 
*EcreditDirectApi.DirectControllerApi* | [**updateRefresh**](docs/DirectControllerApi.md#updateRefresh) | **POST** /direct/update-refresh/{id} | 
*EcreditDirectApi.DirectControllerApi* | [**userTokenOld**](docs/DirectControllerApi.md#userTokenOld) | **GET** /direct/user-token/{id} | 


## Documentation for Models

 - [EcreditDirectApi.AlertRespDTO](docs/AlertRespDTO.md)
 - [EcreditDirectApi.BankruptcyReport](docs/BankruptcyReport.md)
 - [EcreditDirectApi.CodeDescriptionReport](docs/CodeDescriptionReport.md)
 - [EcreditDirectApi.CollectionItemReport](docs/CollectionItemReport.md)
 - [EcreditDirectApi.ConsumerStatementReport](docs/ConsumerStatementReport.md)
 - [EcreditDirectApi.ContactInformationReport](docs/ContactInformationReport.md)
 - [EcreditDirectApi.CountryReport](docs/CountryReport.md)
 - [EcreditDirectApi.CreditReportAccountReport](docs/CreditReportAccountReport.md)
 - [EcreditDirectApi.CreditReportProviderDisputeInformationReport](docs/CreditReportProviderDisputeInformationReport.md)
 - [EcreditDirectApi.CreditReportProviderViewReport](docs/CreditReportProviderViewReport.md)
 - [EcreditDirectApi.CreditReportReport](docs/CreditReportReport.md)
 - [EcreditDirectApi.CreditReportSummaryAccountsReport](docs/CreditReportSummaryAccountsReport.md)
 - [EcreditDirectApi.CreditReportSummaryReport](docs/CreditReportSummaryReport.md)
 - [EcreditDirectApi.CreditScoreAbstractScore](docs/CreditScoreAbstractScore.md)
 - [EcreditDirectApi.CreditScoreHistoryProviderViewScore](docs/CreditScoreHistoryProviderViewScore.md)
 - [EcreditDirectApi.CreditScoreHistoryScore](docs/CreditScoreHistoryScore.md)
 - [EcreditDirectApi.CreditScoreLoanRiskRangeReport](docs/CreditScoreLoanRiskRangeReport.md)
 - [EcreditDirectApi.CreditScoreLoanRiskRangeScore](docs/CreditScoreLoanRiskRangeScore.md)
 - [EcreditDirectApi.CreditScoreProviderViewScore](docs/CreditScoreProviderViewScore.md)
 - [EcreditDirectApi.CreditScoreRangeReport](docs/CreditScoreRangeReport.md)
 - [EcreditDirectApi.CreditScoreRangeScore](docs/CreditScoreRangeScore.md)
 - [EcreditDirectApi.CreditScoreReasonReport](docs/CreditScoreReasonReport.md)
 - [EcreditDirectApi.CreditScoreReasonScore](docs/CreditScoreReasonScore.md)
 - [EcreditDirectApi.CreditScoreReport](docs/CreditScoreReport.md)
 - [EcreditDirectApi.CreditScoreScore](docs/CreditScoreScore.md)
 - [EcreditDirectApi.DirectChangeEmailReqDTO](docs/DirectChangeEmailReqDTO.md)
 - [EcreditDirectApi.DirectChangeMobileReqDTO](docs/DirectChangeMobileReqDTO.md)
 - [EcreditDirectApi.DirectLoginReqDTO](docs/DirectLoginReqDTO.md)
 - [EcreditDirectApi.DirectUserRegReqDTO](docs/DirectUserRegReqDTO.md)
 - [EcreditDirectApi.EfxConfigRespDTO](docs/EfxConfigRespDTO.md)
 - [EcreditDirectApi.EmployerReport](docs/EmployerReport.md)
 - [EcreditDirectApi.InquiryReport](docs/InquiryReport.md)
 - [EcreditDirectApi.InternationalAddressReport](docs/InternationalAddressReport.md)
 - [EcreditDirectApi.InternationalPhoneReport](docs/InternationalPhoneReport.md)
 - [EcreditDirectApi.JudgmentReport](docs/JudgmentReport.md)
 - [EcreditDirectApi.LienReport](docs/LienReport.md)
 - [EcreditDirectApi.LoginRespDTO](docs/LoginRespDTO.md)
 - [EcreditDirectApi.MoneyReport](docs/MoneyReport.md)
 - [EcreditDirectApi.PaymentHistoryMonthReport](docs/PaymentHistoryMonthReport.md)
 - [EcreditDirectApi.PaymentHistoryYearReport](docs/PaymentHistoryYearReport.md)
 - [EcreditDirectApi.PersonNameReport](docs/PersonNameReport.md)
 - [EcreditDirectApi.PersonSubjectReport](docs/PersonSubjectReport.md)
 - [EcreditDirectApi.PreauthTokenDTO](docs/PreauthTokenDTO.md)
 - [EcreditDirectApi.PublicRecordsReport](docs/PublicRecordsReport.md)
 - [EcreditDirectApi.TrendedDataHistoryReport](docs/TrendedDataHistoryReport.md)
 - [EcreditDirectApi.TrendedDataReport](docs/TrendedDataReport.md)
 - [EcreditDirectApi.TrendedDataYearReport](docs/TrendedDataYearReport.md)
 - [EcreditDirectApi.UserLoginRespDTO](docs/UserLoginRespDTO.md)
 - [EcreditDirectApi.UserRespDTO](docs/UserRespDTO.md)


## Documentation for Authorization



### accessToken

- **Type**: Bearer authentication (JWT)

