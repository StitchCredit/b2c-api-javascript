"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AlertRespDTO = _interopRequireDefault(require("../model/AlertRespDTO"));

var _CreditReportReport = _interopRequireDefault(require("../model/CreditReportReport"));

var _CreditScoreAbstractScore = _interopRequireDefault(require("../model/CreditScoreAbstractScore"));

var _CreditScoreHistoryScore = _interopRequireDefault(require("../model/CreditScoreHistoryScore"));

var _CreditScoreScore = _interopRequireDefault(require("../model/CreditScoreScore"));

var _DirectChangeEmailReqDTO = _interopRequireDefault(require("../model/DirectChangeEmailReqDTO"));

var _DirectChangeMobileReqDTO = _interopRequireDefault(require("../model/DirectChangeMobileReqDTO"));

var _DirectLoginReqDTO = _interopRequireDefault(require("../model/DirectLoginReqDTO"));

var _DirectUserRegReqDTO = _interopRequireDefault(require("../model/DirectUserRegReqDTO"));

var _EfxConfigRespDTO = _interopRequireDefault(require("../model/EfxConfigRespDTO"));

var _LoginRespDTO = _interopRequireDefault(require("../model/LoginRespDTO"));

var _PreauthTokenDTO = _interopRequireDefault(require("../model/PreauthTokenDTO"));

var _UserLoginRespDTO = _interopRequireDefault(require("../model/UserLoginRespDTO"));

var _UserRespDTO = _interopRequireDefault(require("../model/UserRespDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DirectController service.
* @module api/DirectControllerApi
* @version 1.0.0
*/
var DirectControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DirectControllerApi. 
  * @alias module:api/DirectControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DirectControllerApi(apiClient) {
    _classCallCheck(this, DirectControllerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {String} id 
   * @param {module:model/DirectChangeEmailReqDTO} DirectChangeEmailReqDTO 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(DirectControllerApi, [{
    key: "changeEmailWithHttpInfo",
    value: function changeEmailWithHttpInfo(id, DirectChangeEmailReqDTO) {
      var postBody = DirectChangeEmailReqDTO; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling changeEmail");
      } // verify the required parameter 'DirectChangeEmailReqDTO' is set


      if (DirectChangeEmailReqDTO === undefined || DirectChangeEmailReqDTO === null) {
        throw new Error("Missing the required parameter 'DirectChangeEmailReqDTO' when calling changeEmail");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;
      return this.apiClient.callApi('/direct/change-email/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/DirectChangeEmailReqDTO} DirectChangeEmailReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "changeEmail",
    value: function changeEmail(id, DirectChangeEmailReqDTO) {
      return this.changeEmailWithHttpInfo(id, DirectChangeEmailReqDTO).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {String} host 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "changeHostWithHttpInfo",
    value: function changeHostWithHttpInfo(id, host) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling changeHost");
      } // verify the required parameter 'host' is set


      if (host === undefined || host === null) {
        throw new Error("Missing the required parameter 'host' when calling changeHost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'host': host
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;
      return this.apiClient.callApi('/direct/change-host/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} host 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "changeHost",
    value: function changeHost(id, host) {
      return this.changeHostWithHttpInfo(id, host).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:model/DirectChangeMobileReqDTO} DirectChangeMobileReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "changeMobileWithHttpInfo",
    value: function changeMobileWithHttpInfo(id, DirectChangeMobileReqDTO) {
      var postBody = DirectChangeMobileReqDTO; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling changeMobile");
      } // verify the required parameter 'DirectChangeMobileReqDTO' is set


      if (DirectChangeMobileReqDTO === undefined || DirectChangeMobileReqDTO === null) {
        throw new Error("Missing the required parameter 'DirectChangeMobileReqDTO' when calling changeMobile");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;
      return this.apiClient.callApi('/direct/change-mobile/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:model/DirectChangeMobileReqDTO} DirectChangeMobileReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "changeMobile",
    value: function changeMobile(id, DirectChangeMobileReqDTO) {
      return this.changeMobileWithHttpInfo(id, DirectChangeMobileReqDTO).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "closeAccountWithHttpInfo",
    value: function closeAccountWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling closeAccount");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;
      return this.apiClient.callApi('/direct/close-account/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "closeAccount",
    value: function closeAccount(id) {
      return this.closeAccountWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AlertRespDTO} and HTTP response
     */

  }, {
    key: "efxAlertWithHttpInfo",
    value: function efxAlertWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling efxAlert");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _AlertRespDTO["default"];
      return this.apiClient.callApi('/direct/efx-alert/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AlertRespDTO}
     */

  }, {
    key: "efxAlert",
    value: function efxAlert(id) {
      return this.efxAlertWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EfxConfigRespDTO} and HTTP response
     */

  }, {
    key: "efxConfigWithHttpInfo",
    value: function efxConfigWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling efxConfig");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _EfxConfigRespDTO["default"];
      return this.apiClient.callApi('/direct/efx-config/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EfxConfigRespDTO}
     */

  }, {
    key: "efxConfig",
    value: function efxConfig(id) {
      return this.efxConfigWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditScoreScore} and HTTP response
     */

  }, {
    key: "efxLatestEFXScoreWithHttpInfo",
    value: function efxLatestEFXScoreWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling efxLatestEFXScore");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _CreditScoreScore["default"];
      return this.apiClient.callApi('/direct/efx-latest-efx-score/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditScoreScore}
     */

  }, {
    key: "efxLatestEFXScore",
    value: function efxLatestEFXScore(id) {
      return this.efxLatestEFXScoreWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditReportReport} and HTTP response
     */

  }, {
    key: "efxLatestReportWithHttpInfo",
    value: function efxLatestReportWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling efxLatestReport");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _CreditReportReport["default"];
      return this.apiClient.callApi('/direct/efx-latest-report/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditReportReport}
     */

  }, {
    key: "efxLatestReport",
    value: function efxLatestReport(id) {
      return this.efxLatestReportWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreditScoreScore} and HTTP response
     */

  }, {
    key: "efxLatestScoresWithHttpInfo",
    value: function efxLatestScoresWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling efxLatestScores");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _CreditScoreScore["default"];
      return this.apiClient.callApi('/direct/efx-latest-scores/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditScoreScore}
     */

  }, {
    key: "efxLatestScores",
    value: function efxLatestScores(id) {
      return this.efxLatestScoresWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CreditScoreHistoryScore>} and HTTP response
     */

  }, {
    key: "efxScoreHistoryWithHttpInfo",
    value: function efxScoreHistoryWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling efxScoreHistory");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_CreditScoreHistoryScore["default"]];
      return this.apiClient.callApi('/direct/efx-score-history/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CreditScoreHistoryScore>}
     */

  }, {
    key: "efxScoreHistory",
    value: function efxScoreHistory(id) {
      return this.efxScoreHistoryWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CreditScoreAbstractScore>} and HTTP response
     */

  }, {
    key: "efxScoresWithHttpInfo",
    value: function efxScoresWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling efxScores");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_CreditScoreAbstractScore["default"]];
      return this.apiClient.callApi('/direct/efx-scores/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CreditScoreAbstractScore>}
     */

  }, {
    key: "efxScores",
    value: function efxScores(id) {
      return this.efxScoresWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserRespDTO} and HTTP response
     */

  }, {
    key: "getUserWithHttpInfo",
    value: function getUserWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUser");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _UserRespDTO["default"];
      return this.apiClient.callApi('/direct/user/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserRespDTO}
     */

  }, {
    key: "getUser",
    value: function getUser(id) {
      return this.getUserWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {module:model/DirectLoginReqDTO} DirectLoginReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoginRespDTO} and HTTP response
     */

  }, {
    key: "loginWithHttpInfo",
    value: function loginWithHttpInfo(DirectLoginReqDTO) {
      var postBody = DirectLoginReqDTO; // verify the required parameter 'DirectLoginReqDTO' is set

      if (DirectLoginReqDTO === undefined || DirectLoginReqDTO === null) {
        throw new Error("Missing the required parameter 'DirectLoginReqDTO' when calling login");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _LoginRespDTO["default"];
      return this.apiClient.callApi('/direct/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/DirectLoginReqDTO} DirectLoginReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoginRespDTO}
     */

  }, {
    key: "login",
    value: function login(DirectLoginReqDTO) {
      return this.loginWithHttpInfo(DirectLoginReqDTO).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PreauthTokenDTO} and HTTP response
     */

  }, {
    key: "preauthTokenWithHttpInfo",
    value: function preauthTokenWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling preauthToken");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _PreauthTokenDTO["default"];
      return this.apiClient.callApi('/direct/preauth-token/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PreauthTokenDTO}
     */

  }, {
    key: "preauthToken",
    value: function preauthToken(id) {
      return this.preauthTokenWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoginRespDTO} and HTTP response
     */

  }, {
    key: "refreshTokenWithHttpInfo",
    value: function refreshTokenWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'token': opts['token']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _LoginRespDTO["default"];
      return this.apiClient.callApi('/direct/refresh-token', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoginRespDTO}
     */

  }, {
    key: "refreshToken",
    value: function refreshToken(opts) {
      return this.refreshTokenWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {module:model/DirectUserRegReqDTO} DirectUserRegReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PreauthTokenDTO} and HTTP response
     */

  }, {
    key: "registerWithHttpInfo",
    value: function registerWithHttpInfo(DirectUserRegReqDTO) {
      var postBody = DirectUserRegReqDTO; // verify the required parameter 'DirectUserRegReqDTO' is set

      if (DirectUserRegReqDTO === undefined || DirectUserRegReqDTO === null) {
        throw new Error("Missing the required parameter 'DirectUserRegReqDTO' when calling register");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _PreauthTokenDTO["default"];
      return this.apiClient.callApi('/direct/user-reg', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/DirectUserRegReqDTO} DirectUserRegReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PreauthTokenDTO}
     */

  }, {
    key: "register",
    value: function register(DirectUserRegReqDTO) {
      return this.registerWithHttpInfo(DirectUserRegReqDTO).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {module:model/DirectUserRegReqDTO} DirectUserRegReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserLoginRespDTO} and HTTP response
     */

  }, {
    key: "registerOldWithHttpInfo",
    value: function registerOldWithHttpInfo(DirectUserRegReqDTO) {
      var postBody = DirectUserRegReqDTO; // verify the required parameter 'DirectUserRegReqDTO' is set

      if (DirectUserRegReqDTO === undefined || DirectUserRegReqDTO === null) {
        throw new Error("Missing the required parameter 'DirectUserRegReqDTO' when calling registerOld");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _UserLoginRespDTO["default"];
      return this.apiClient.callApi('/direct/register', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/DirectUserRegReqDTO} DirectUserRegReqDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserLoginRespDTO}
     */

  }, {
    key: "registerOld",
    value: function registerOld(DirectUserRegReqDTO) {
      return this.registerOldWithHttpInfo(DirectUserRegReqDTO).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {Boolean} rmonly 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateRefreshWithHttpInfo",
    value: function updateRefreshWithHttpInfo(id, rmonly) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRefresh");
      } // verify the required parameter 'rmonly' is set


      if (rmonly === undefined || rmonly === null) {
        throw new Error("Missing the required parameter 'rmonly' when calling updateRefresh");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'rmonly': rmonly
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;
      return this.apiClient.callApi('/direct/update-refresh/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {Boolean} rmonly 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateRefresh",
    value: function updateRefresh(id, rmonly) {
      return this.updateRefreshWithHttpInfo(id, rmonly).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id UserId to generate preauth token for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserLoginRespDTO} and HTTP response
     */

  }, {
    key: "userTokenOldWithHttpInfo",
    value: function userTokenOldWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling userTokenOld");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _UserLoginRespDTO["default"];
      return this.apiClient.callApi('/direct/user-token/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id UserId to generate preauth token for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserLoginRespDTO}
     */

  }, {
    key: "userTokenOld",
    value: function userTokenOld(id) {
      return this.userTokenOldWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DirectControllerApi;
}();

exports["default"] = DirectControllerApi;