# EcreditDirectApi.DirectControllerApi

All URIs are relative to *http://localhost:8081/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeEmail**](DirectControllerApi.md#changeEmail) | **POST** /direct/change-email/{id} | 
[**changeHost**](DirectControllerApi.md#changeHost) | **POST** /direct/change-host/{id} | 
[**changeMobile**](DirectControllerApi.md#changeMobile) | **POST** /direct/change-mobile/{id} | 
[**closeAccount**](DirectControllerApi.md#closeAccount) | **POST** /direct/close-account/{id} | 
[**efxAlert**](DirectControllerApi.md#efxAlert) | **GET** /direct/efx-alert/{id} | 
[**efxConfig**](DirectControllerApi.md#efxConfig) | **GET** /direct/efx-config/{id} | 
[**efxLatestEFXScore**](DirectControllerApi.md#efxLatestEFXScore) | **GET** /direct/efx-latest-efx-score/{id} | 
[**efxLatestReport**](DirectControllerApi.md#efxLatestReport) | **GET** /direct/efx-latest-report/{id} | 
[**efxLatestScores**](DirectControllerApi.md#efxLatestScores) | **GET** /direct/efx-latest-scores/{id} | 
[**efxScoreHistory**](DirectControllerApi.md#efxScoreHistory) | **GET** /direct/efx-score-history/{id} | 
[**efxScores**](DirectControllerApi.md#efxScores) | **GET** /direct/efx-scores/{id} | 
[**getUser**](DirectControllerApi.md#getUser) | **GET** /direct/user/{id} | 
[**login**](DirectControllerApi.md#login) | **POST** /direct/login | 
[**preauthToken**](DirectControllerApi.md#preauthToken) | **GET** /direct/preauth-token/{id} | 
[**refreshToken**](DirectControllerApi.md#refreshToken) | **GET** /direct/refresh-token | 
[**register**](DirectControllerApi.md#register) | **POST** /direct/user-reg | 
[**registerOld**](DirectControllerApi.md#registerOld) | **POST** /direct/register | 
[**updateRefresh**](DirectControllerApi.md#updateRefresh) | **POST** /direct/update-refresh/{id} | 
[**userTokenOld**](DirectControllerApi.md#userTokenOld) | **GET** /direct/user-token/{id} | 



## changeEmail

> changeEmail(id, DirectChangeEmailReqDTO)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
let DirectChangeEmailReqDTO = new EcreditDirectApi.DirectChangeEmailReqDTO(); // DirectChangeEmailReqDTO | 
apiInstance.changeEmail(id, DirectChangeEmailReqDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **DirectChangeEmailReqDTO** | [**DirectChangeEmailReqDTO**](DirectChangeEmailReqDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## changeHost

> changeHost(id, host)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
let host = "host_example"; // String | 
apiInstance.changeHost(id, host, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **host** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## changeMobile

> changeMobile(id, DirectChangeMobileReqDTO)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
let DirectChangeMobileReqDTO = new EcreditDirectApi.DirectChangeMobileReqDTO(); // DirectChangeMobileReqDTO | 
apiInstance.changeMobile(id, DirectChangeMobileReqDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **DirectChangeMobileReqDTO** | [**DirectChangeMobileReqDTO**](DirectChangeMobileReqDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## closeAccount

> closeAccount(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.closeAccount(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## efxAlert

> AlertRespDTO efxAlert(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.efxAlert(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**AlertRespDTO**](AlertRespDTO.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## efxConfig

> EfxConfigRespDTO efxConfig(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.efxConfig(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**EfxConfigRespDTO**](EfxConfigRespDTO.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## efxLatestEFXScore

> CreditScoreScore efxLatestEFXScore(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.efxLatestEFXScore(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**CreditScoreScore**](CreditScoreScore.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## efxLatestReport

> CreditReportReport efxLatestReport(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.efxLatestReport(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**CreditReportReport**](CreditReportReport.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## efxLatestScores

> CreditScoreScore efxLatestScores(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.efxLatestScores(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**CreditScoreScore**](CreditScoreScore.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## efxScoreHistory

> [CreditScoreHistoryScore] efxScoreHistory(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.efxScoreHistory(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**[CreditScoreHistoryScore]**](CreditScoreHistoryScore.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## efxScores

> [CreditScoreAbstractScore] efxScores(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.efxScores(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**[CreditScoreAbstractScore]**](CreditScoreAbstractScore.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getUser

> UserRespDTO getUser(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.getUser(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**UserRespDTO**](UserRespDTO.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## login

> LoginRespDTO login(DirectLoginReqDTO)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let DirectLoginReqDTO = new EcreditDirectApi.DirectLoginReqDTO(); // DirectLoginReqDTO | 
apiInstance.login(DirectLoginReqDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **DirectLoginReqDTO** | [**DirectLoginReqDTO**](DirectLoginReqDTO.md)|  | 

### Return type

[**LoginRespDTO**](LoginRespDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## preauthToken

> PreauthTokenDTO preauthToken(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
apiInstance.preauthToken(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**PreauthTokenDTO**](PreauthTokenDTO.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## refreshToken

> LoginRespDTO refreshToken(opts)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let opts = {
  'token': "token_example" // String | 
};
apiInstance.refreshToken(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | [optional] 

### Return type

[**LoginRespDTO**](LoginRespDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## register

> PreauthTokenDTO register(DirectUserRegReqDTO)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let DirectUserRegReqDTO = new EcreditDirectApi.DirectUserRegReqDTO(); // DirectUserRegReqDTO | 
apiInstance.register(DirectUserRegReqDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **DirectUserRegReqDTO** | [**DirectUserRegReqDTO**](DirectUserRegReqDTO.md)|  | 

### Return type

[**PreauthTokenDTO**](PreauthTokenDTO.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## registerOld

> UserLoginRespDTO registerOld(DirectUserRegReqDTO)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let DirectUserRegReqDTO = new EcreditDirectApi.DirectUserRegReqDTO(); // DirectUserRegReqDTO | 
apiInstance.registerOld(DirectUserRegReqDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **DirectUserRegReqDTO** | [**DirectUserRegReqDTO**](DirectUserRegReqDTO.md)|  | 

### Return type

[**UserLoginRespDTO**](UserLoginRespDTO.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## updateRefresh

> updateRefresh(id, rmonly)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | 
let rmonly = true; // Boolean | 
apiInstance.updateRefresh(id, rmonly, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **rmonly** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## userTokenOld

> UserLoginRespDTO userTokenOld(id)



### Example

```javascript
import EcreditDirectApi from 'ecredit-direct-api';
let defaultClient = EcreditDirectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EcreditDirectApi.DirectControllerApi();
let id = null; // String | UserId to generate preauth token for
apiInstance.userTokenOld(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| UserId to generate preauth token for | 

### Return type

[**UserLoginRespDTO**](UserLoginRespDTO.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

