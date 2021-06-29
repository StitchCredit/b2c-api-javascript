"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreditReportProviderDisputeInformationReport = _interopRequireDefault(require("./CreditReportProviderDisputeInformationReport"));

var _CreditReportSummaryAccountsReport = _interopRequireDefault(require("./CreditReportSummaryAccountsReport"));

var _CreditScoreReport = _interopRequireDefault(require("./CreditScoreReport"));

var _PersonSubjectReport = _interopRequireDefault(require("./PersonSubjectReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreditReportSummaryReport model module.
 * @module model/CreditReportSummaryReport
 * @version 1.0.0
 */
var CreditReportSummaryReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditReportSummaryReport</code>.
   * @alias module:model/CreditReportSummaryReport
   */
  function CreditReportSummaryReport() {
    _classCallCheck(this, CreditReportSummaryReport);

    CreditReportSummaryReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditReportSummaryReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditReportSummaryReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditReportSummaryReport} obj Optional instance to populate.
     * @return {module:model/CreditReportSummaryReport} The populated <code>CreditReportSummaryReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditReportSummaryReport();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('reportGenerated')) {
          obj['reportGenerated'] = _ApiClient["default"].convertToType(data['reportGenerated'], 'Date');
        }

        if (data.hasOwnProperty('creditFileSecurityFreezeFlag')) {
          obj['creditFileSecurityFreezeFlag'] = _ApiClient["default"].convertToType(data['creditFileSecurityFreezeFlag'], 'Boolean');
        }

        if (data.hasOwnProperty('reportType')) {
          obj['reportType'] = _ApiClient["default"].convertToType(data['reportType'], 'String');
        }

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _PersonSubjectReport["default"].constructFromObject(data['subject']);
        }

        if (data.hasOwnProperty('creditScore')) {
          obj['creditScore'] = _CreditScoreReport["default"].constructFromObject(data['creditScore']);
        }

        if (data.hasOwnProperty('revolvingAccounts')) {
          obj['revolvingAccounts'] = _CreditReportSummaryAccountsReport["default"].constructFromObject(data['revolvingAccounts']);
        }

        if (data.hasOwnProperty('mortgageAccounts')) {
          obj['mortgageAccounts'] = _CreditReportSummaryAccountsReport["default"].constructFromObject(data['mortgageAccounts']);
        }

        if (data.hasOwnProperty('installmentAccounts')) {
          obj['installmentAccounts'] = _CreditReportSummaryAccountsReport["default"].constructFromObject(data['installmentAccounts']);
        }

        if (data.hasOwnProperty('otherAccounts')) {
          obj['otherAccounts'] = _CreditReportSummaryAccountsReport["default"].constructFromObject(data['otherAccounts']);
        }

        if (data.hasOwnProperty('totalOpenAccounts')) {
          obj['totalOpenAccounts'] = _CreditReportSummaryAccountsReport["default"].constructFromObject(data['totalOpenAccounts']);
        }

        if (data.hasOwnProperty('lengthOfCreditHistoryMonths')) {
          obj['lengthOfCreditHistoryMonths'] = _ApiClient["default"].convertToType(data['lengthOfCreditHistoryMonths'], 'Number');
        }

        if (data.hasOwnProperty('totalNegativeAccounts')) {
          obj['totalNegativeAccounts'] = _ApiClient["default"].convertToType(data['totalNegativeAccounts'], 'Number');
        }

        if (data.hasOwnProperty('averageAccountAgeMonths')) {
          obj['averageAccountAgeMonths'] = _ApiClient["default"].convertToType(data['averageAccountAgeMonths'], 'Number');
        }

        if (data.hasOwnProperty('oldestAccountOpenDate')) {
          obj['oldestAccountOpenDate'] = _ApiClient["default"].convertToType(data['oldestAccountOpenDate'], 'Date');
        }

        if (data.hasOwnProperty('oldestAccountName')) {
          obj['oldestAccountName'] = _ApiClient["default"].convertToType(data['oldestAccountName'], 'String');
        }

        if (data.hasOwnProperty('mostRecentAccountOpenDate')) {
          obj['mostRecentAccountOpenDate'] = _ApiClient["default"].convertToType(data['mostRecentAccountOpenDate'], 'Date');
        }

        if (data.hasOwnProperty('mostRecentAccountName')) {
          obj['mostRecentAccountName'] = _ApiClient["default"].convertToType(data['mostRecentAccountName'], 'String');
        }

        if (data.hasOwnProperty('totalConsumerStatements')) {
          obj['totalConsumerStatements'] = _ApiClient["default"].convertToType(data['totalConsumerStatements'], 'Number');
        }

        if (data.hasOwnProperty('mostRecentInquiryDate')) {
          obj['mostRecentInquiryDate'] = _ApiClient["default"].convertToType(data['mostRecentInquiryDate'], 'Date');
        }

        if (data.hasOwnProperty('mostRecentInquiryName')) {
          obj['mostRecentInquiryName'] = _ApiClient["default"].convertToType(data['mostRecentInquiryName'], 'String');
        }

        if (data.hasOwnProperty('totalPersonalInformation')) {
          obj['totalPersonalInformation'] = _ApiClient["default"].convertToType(data['totalPersonalInformation'], 'Number');
        }

        if (data.hasOwnProperty('totalInquires')) {
          obj['totalInquires'] = _ApiClient["default"].convertToType(data['totalInquires'], 'Number');
        }

        if (data.hasOwnProperty('totalPublicRecords')) {
          obj['totalPublicRecords'] = _ApiClient["default"].convertToType(data['totalPublicRecords'], 'Number');
        }

        if (data.hasOwnProperty('totalCollections')) {
          obj['totalCollections'] = _ApiClient["default"].convertToType(data['totalCollections'], 'Number');
        }

        if (data.hasOwnProperty('disputeInformation')) {
          obj['disputeInformation'] = _CreditReportProviderDisputeInformationReport["default"].constructFromObject(data['disputeInformation']);
        }
      }

      return obj;
    }
  }]);

  return CreditReportSummaryReport;
}();
/**
 * @member {String} id
 */


CreditReportSummaryReport.prototype['id'] = undefined;
/**
 * @member {Date} reportGenerated
 */

CreditReportSummaryReport.prototype['reportGenerated'] = undefined;
/**
 * @member {Boolean} creditFileSecurityFreezeFlag
 */

CreditReportSummaryReport.prototype['creditFileSecurityFreezeFlag'] = undefined;
/**
 * @member {module:model/CreditReportSummaryReport.ReportTypeEnum} reportType
 */

CreditReportSummaryReport.prototype['reportType'] = undefined;
/**
 * @member {module:model/CreditReportSummaryReport.ProviderEnum} provider
 */

CreditReportSummaryReport.prototype['provider'] = undefined;
/**
 * @member {module:model/PersonSubjectReport} subject
 */

CreditReportSummaryReport.prototype['subject'] = undefined;
/**
 * @member {module:model/CreditScoreReport} creditScore
 */

CreditReportSummaryReport.prototype['creditScore'] = undefined;
/**
 * @member {module:model/CreditReportSummaryAccountsReport} revolvingAccounts
 */

CreditReportSummaryReport.prototype['revolvingAccounts'] = undefined;
/**
 * @member {module:model/CreditReportSummaryAccountsReport} mortgageAccounts
 */

CreditReportSummaryReport.prototype['mortgageAccounts'] = undefined;
/**
 * @member {module:model/CreditReportSummaryAccountsReport} installmentAccounts
 */

CreditReportSummaryReport.prototype['installmentAccounts'] = undefined;
/**
 * @member {module:model/CreditReportSummaryAccountsReport} otherAccounts
 */

CreditReportSummaryReport.prototype['otherAccounts'] = undefined;
/**
 * @member {module:model/CreditReportSummaryAccountsReport} totalOpenAccounts
 */

CreditReportSummaryReport.prototype['totalOpenAccounts'] = undefined;
/**
 * @member {Number} lengthOfCreditHistoryMonths
 */

CreditReportSummaryReport.prototype['lengthOfCreditHistoryMonths'] = undefined;
/**
 * @member {Number} totalNegativeAccounts
 */

CreditReportSummaryReport.prototype['totalNegativeAccounts'] = undefined;
/**
 * @member {Number} averageAccountAgeMonths
 */

CreditReportSummaryReport.prototype['averageAccountAgeMonths'] = undefined;
/**
 * @member {Date} oldestAccountOpenDate
 */

CreditReportSummaryReport.prototype['oldestAccountOpenDate'] = undefined;
/**
 * @member {String} oldestAccountName
 */

CreditReportSummaryReport.prototype['oldestAccountName'] = undefined;
/**
 * @member {Date} mostRecentAccountOpenDate
 */

CreditReportSummaryReport.prototype['mostRecentAccountOpenDate'] = undefined;
/**
 * @member {String} mostRecentAccountName
 */

CreditReportSummaryReport.prototype['mostRecentAccountName'] = undefined;
/**
 * @member {Number} totalConsumerStatements
 */

CreditReportSummaryReport.prototype['totalConsumerStatements'] = undefined;
/**
 * @member {Date} mostRecentInquiryDate
 */

CreditReportSummaryReport.prototype['mostRecentInquiryDate'] = undefined;
/**
 * @member {String} mostRecentInquiryName
 */

CreditReportSummaryReport.prototype['mostRecentInquiryName'] = undefined;
/**
 * @member {Number} totalPersonalInformation
 */

CreditReportSummaryReport.prototype['totalPersonalInformation'] = undefined;
/**
 * @member {Number} totalInquires
 */

CreditReportSummaryReport.prototype['totalInquires'] = undefined;
/**
 * @member {Number} totalPublicRecords
 */

CreditReportSummaryReport.prototype['totalPublicRecords'] = undefined;
/**
 * @member {Number} totalCollections
 */

CreditReportSummaryReport.prototype['totalCollections'] = undefined;
/**
 * @member {module:model/CreditReportProviderDisputeInformationReport} disputeInformation
 */

CreditReportSummaryReport.prototype['disputeInformation'] = undefined;
/**
 * Allowed values for the <code>reportType</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportSummaryReport['ReportTypeEnum'] = {
  /**
   * value: "US_EFX"
   * @const
   */
  "EFX": "US_EFX",

  /**
   * value: "US_3B"
   * @const
   */
  "3B": "US_3B"
};
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportSummaryReport['ProviderEnum'] = {
  /**
   * value: "EFX"
   * @const
   */
  "EFX": "EFX",

  /**
   * value: "TU"
   * @const
   */
  "TU": "TU",

  /**
   * value: "EXP"
   * @const
   */
  "EXP": "EXP",

  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN"
};
var _default = CreditReportSummaryReport;
exports["default"] = _default;