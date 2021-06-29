"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CodeDescriptionReport = _interopRequireDefault(require("./CodeDescriptionReport"));

var _ContactInformationReport = _interopRequireDefault(require("./ContactInformationReport"));

var _MoneyReport = _interopRequireDefault(require("./MoneyReport"));

var _PaymentHistoryYearReport = _interopRequireDefault(require("./PaymentHistoryYearReport"));

var _TrendedDataHistoryReport = _interopRequireDefault(require("./TrendedDataHistoryReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreditReportAccountReport model module.
 * @module model/CreditReportAccountReport
 * @version 1.0.0
 */
var CreditReportAccountReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditReportAccountReport</code>.
   * @alias module:model/CreditReportAccountReport
   */
  function CreditReportAccountReport() {
    _classCallCheck(this, CreditReportAccountReport);

    CreditReportAccountReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditReportAccountReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditReportAccountReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditReportAccountReport} obj Optional instance to populate.
     * @return {module:model/CreditReportAccountReport} The populated <code>CreditReportAccountReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditReportAccountReport();

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('accountOpen')) {
          obj['accountOpen'] = _ApiClient["default"].convertToType(data['accountOpen'], 'Boolean');
        }

        if (data.hasOwnProperty('accountName')) {
          obj['accountName'] = _ApiClient["default"].convertToType(data['accountName'], 'String');
        }

        if (data.hasOwnProperty('contactInformation')) {
          obj['contactInformation'] = _ContactInformationReport["default"].constructFromObject(data['contactInformation']);
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('accountStatus')) {
          obj['accountStatus'] = _ApiClient["default"].convertToType(data['accountStatus'], 'String');
        }

        if (data.hasOwnProperty('paymentResponsibility')) {
          obj['paymentResponsibility'] = _ApiClient["default"].convertToType(data['paymentResponsibility'], 'String');
        }

        if (data.hasOwnProperty('highCreditAmount')) {
          obj['highCreditAmount'] = _MoneyReport["default"].constructFromObject(data['highCreditAmount']);
        }

        if (data.hasOwnProperty('accountType')) {
          obj['accountType'] = _ApiClient["default"].convertToType(data['accountType'], 'String');
        }

        if (data.hasOwnProperty('creditLimitAmount')) {
          obj['creditLimitAmount'] = _MoneyReport["default"].constructFromObject(data['creditLimitAmount']);
        }

        if (data.hasOwnProperty('termDurationMonths')) {
          obj['termDurationMonths'] = _ApiClient["default"].convertToType(data['termDurationMonths'], 'Number');
        }

        if (data.hasOwnProperty('termFrequency')) {
          obj['termFrequency'] = _ApiClient["default"].convertToType(data['termFrequency'], 'String');
        }

        if (data.hasOwnProperty('dateOpened')) {
          obj['dateOpened'] = _ApiClient["default"].convertToType(data['dateOpened'], 'Date');
        }

        if (data.hasOwnProperty('balanceAmount')) {
          obj['balanceAmount'] = _MoneyReport["default"].constructFromObject(data['balanceAmount']);
        }

        if (data.hasOwnProperty('reportedDate')) {
          obj['reportedDate'] = _ApiClient["default"].convertToType(data['reportedDate'], 'Date');
        }

        if (data.hasOwnProperty('pastDueAmount')) {
          obj['pastDueAmount'] = _MoneyReport["default"].constructFromObject(data['pastDueAmount']);
        }

        if (data.hasOwnProperty('lastPaymentDate')) {
          obj['lastPaymentDate'] = _ApiClient["default"].convertToType(data['lastPaymentDate'], 'Date');
        }

        if (data.hasOwnProperty('actualPayment')) {
          obj['actualPayment'] = _MoneyReport["default"].constructFromObject(data['actualPayment']);
        }

        if (data.hasOwnProperty('monthlyPayment')) {
          obj['monthlyPayment'] = _MoneyReport["default"].constructFromObject(data['monthlyPayment']);
        }

        if (data.hasOwnProperty('lastActivityDate')) {
          obj['lastActivityDate'] = _ApiClient["default"].convertToType(data['lastActivityDate'], 'Date');
        }

        if (data.hasOwnProperty('majorDelinquencyFirstReportedDate')) {
          obj['majorDelinquencyFirstReportedDate'] = _ApiClient["default"].convertToType(data['majorDelinquencyFirstReportedDate'], 'Date');
        }

        if (data.hasOwnProperty('monthsReviewed')) {
          obj['monthsReviewed'] = _ApiClient["default"].convertToType(data['monthsReviewed'], 'Number');
        }

        if (data.hasOwnProperty('creditorClassification')) {
          obj['creditorClassification'] = _ApiClient["default"].convertToType(data['creditorClassification'], 'String');
        }

        if (data.hasOwnProperty('activityDesignator')) {
          obj['activityDesignator'] = _ApiClient["default"].convertToType(data['activityDesignator'], 'String');
        }

        if (data.hasOwnProperty('chargeOffAmount')) {
          obj['chargeOffAmount'] = _MoneyReport["default"].constructFromObject(data['chargeOffAmount']);
        }

        if (data.hasOwnProperty('deferredPaymentStartDate')) {
          obj['deferredPaymentStartDate'] = _ApiClient["default"].convertToType(data['deferredPaymentStartDate'], 'Date');
        }

        if (data.hasOwnProperty('balloonPaymentAmount')) {
          obj['balloonPaymentAmount'] = _MoneyReport["default"].constructFromObject(data['balloonPaymentAmount']);
        }

        if (data.hasOwnProperty('balloonPaymentDate')) {
          obj['balloonPaymentDate'] = _ApiClient["default"].convertToType(data['balloonPaymentDate'], 'Date');
        }

        if (data.hasOwnProperty('dateClosed')) {
          obj['dateClosed'] = _ApiClient["default"].convertToType(data['dateClosed'], 'Date');
        }

        if (data.hasOwnProperty('loanType')) {
          obj['loanType'] = _CodeDescriptionReport["default"].constructFromObject(data['loanType']);
        }

        if (data.hasOwnProperty('firstDelinquencyDate')) {
          obj['firstDelinquencyDate'] = _ApiClient["default"].convertToType(data['firstDelinquencyDate'], 'Date');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], [_CodeDescriptionReport["default"]]);
        }

        if (data.hasOwnProperty('paymentHistory')) {
          obj['paymentHistory'] = _ApiClient["default"].convertToType(data['paymentHistory'], [_PaymentHistoryYearReport["default"]]);
        }

        if (data.hasOwnProperty('trendedDataHistory')) {
          obj['trendedDataHistory'] = _TrendedDataHistoryReport["default"].constructFromObject(data['trendedDataHistory']);
        }

        if (data.hasOwnProperty('isNegative')) {
          obj['isNegative'] = _ApiClient["default"].convertToType(data['isNegative'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CreditReportAccountReport;
}();
/**
 * @member {module:model/CreditReportAccountReport.ProviderEnum} provider
 */


CreditReportAccountReport.prototype['provider'] = undefined;
/**
 * @member {String} id
 */

CreditReportAccountReport.prototype['id'] = undefined;
/**
 * @member {Boolean} accountOpen
 */

CreditReportAccountReport.prototype['accountOpen'] = undefined;
/**
 * @member {String} accountName
 */

CreditReportAccountReport.prototype['accountName'] = undefined;
/**
 * @member {module:model/ContactInformationReport} contactInformation
 */

CreditReportAccountReport.prototype['contactInformation'] = undefined;
/**
 * @member {String} accountNumber
 */

CreditReportAccountReport.prototype['accountNumber'] = undefined;
/**
 * @member {module:model/CreditReportAccountReport.AccountStatusEnum} accountStatus
 */

CreditReportAccountReport.prototype['accountStatus'] = undefined;
/**
 * @member {module:model/CreditReportAccountReport.PaymentResponsibilityEnum} paymentResponsibility
 */

CreditReportAccountReport.prototype['paymentResponsibility'] = undefined;
/**
 * @member {module:model/MoneyReport} highCreditAmount
 */

CreditReportAccountReport.prototype['highCreditAmount'] = undefined;
/**
 * @member {module:model/CreditReportAccountReport.AccountTypeEnum} accountType
 */

CreditReportAccountReport.prototype['accountType'] = undefined;
/**
 * @member {module:model/MoneyReport} creditLimitAmount
 */

CreditReportAccountReport.prototype['creditLimitAmount'] = undefined;
/**
 * @member {Number} termDurationMonths
 */

CreditReportAccountReport.prototype['termDurationMonths'] = undefined;
/**
 * @member {String} termFrequency
 */

CreditReportAccountReport.prototype['termFrequency'] = undefined;
/**
 * @member {Date} dateOpened
 */

CreditReportAccountReport.prototype['dateOpened'] = undefined;
/**
 * @member {module:model/MoneyReport} balanceAmount
 */

CreditReportAccountReport.prototype['balanceAmount'] = undefined;
/**
 * @member {Date} reportedDate
 */

CreditReportAccountReport.prototype['reportedDate'] = undefined;
/**
 * @member {module:model/MoneyReport} pastDueAmount
 */

CreditReportAccountReport.prototype['pastDueAmount'] = undefined;
/**
 * @member {Date} lastPaymentDate
 */

CreditReportAccountReport.prototype['lastPaymentDate'] = undefined;
/**
 * @member {module:model/MoneyReport} actualPayment
 */

CreditReportAccountReport.prototype['actualPayment'] = undefined;
/**
 * @member {module:model/MoneyReport} monthlyPayment
 */

CreditReportAccountReport.prototype['monthlyPayment'] = undefined;
/**
 * @member {Date} lastActivityDate
 */

CreditReportAccountReport.prototype['lastActivityDate'] = undefined;
/**
 * @member {Date} majorDelinquencyFirstReportedDate
 */

CreditReportAccountReport.prototype['majorDelinquencyFirstReportedDate'] = undefined;
/**
 * @member {Number} monthsReviewed
 */

CreditReportAccountReport.prototype['monthsReviewed'] = undefined;
/**
 * @member {module:model/CreditReportAccountReport.CreditorClassificationEnum} creditorClassification
 */

CreditReportAccountReport.prototype['creditorClassification'] = undefined;
/**
 * @member {module:model/CreditReportAccountReport.ActivityDesignatorEnum} activityDesignator
 */

CreditReportAccountReport.prototype['activityDesignator'] = undefined;
/**
 * @member {module:model/MoneyReport} chargeOffAmount
 */

CreditReportAccountReport.prototype['chargeOffAmount'] = undefined;
/**
 * @member {Date} deferredPaymentStartDate
 */

CreditReportAccountReport.prototype['deferredPaymentStartDate'] = undefined;
/**
 * @member {module:model/MoneyReport} balloonPaymentAmount
 */

CreditReportAccountReport.prototype['balloonPaymentAmount'] = undefined;
/**
 * @member {Date} balloonPaymentDate
 */

CreditReportAccountReport.prototype['balloonPaymentDate'] = undefined;
/**
 * @member {Date} dateClosed
 */

CreditReportAccountReport.prototype['dateClosed'] = undefined;
/**
 * @member {module:model/CodeDescriptionReport} loanType
 */

CreditReportAccountReport.prototype['loanType'] = undefined;
/**
 * @member {Date} firstDelinquencyDate
 */

CreditReportAccountReport.prototype['firstDelinquencyDate'] = undefined;
/**
 * @member {Array.<module:model/CodeDescriptionReport>} comments
 */

CreditReportAccountReport.prototype['comments'] = undefined;
/**
 * @member {Array.<module:model/PaymentHistoryYearReport>} paymentHistory
 */

CreditReportAccountReport.prototype['paymentHistory'] = undefined;
/**
 * @member {module:model/TrendedDataHistoryReport} trendedDataHistory
 */

CreditReportAccountReport.prototype['trendedDataHistory'] = undefined;
/**
 * @member {Boolean} isNegative
 */

CreditReportAccountReport.prototype['isNegative'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportAccountReport['ProviderEnum'] = {
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
/**
 * Allowed values for the <code>accountStatus</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportAccountReport['AccountStatusEnum'] = {
  /**
   * value: "BANKRUPTCY_OR_WAGE_EARNER_PLAN"
   * @const
   */
  "BANKRUPTCY_OR_WAGE_EARNER_PLAN": "BANKRUPTCY_OR_WAGE_EARNER_PLAN",

  /**
   * value: "COLLECTION_OR_CHARGEOFF"
   * @const
   */
  "COLLECTION_OR_CHARGEOFF": "COLLECTION_OR_CHARGEOFF",

  /**
   * value: "FORECLOSURE"
   * @const
   */
  "FORECLOSURE": "FORECLOSURE",

  /**
   * value: "FORECLOSURE_OR_REPOSSESSION"
   * @const
   */
  "FORECLOSURE_OR_REPOSSESSION": "FORECLOSURE_OR_REPOSSESSION",

  /**
   * value: "LATE_30_DAYS"
   * @const
   */
  "LATE_30_DAYS": "LATE_30_DAYS",

  /**
   * value: "LATE_60_DAYS"
   * @const
   */
  "LATE_60_DAYS": "LATE_60_DAYS",

  /**
   * value: "LATE_90_DAYS"
   * @const
   */
  "LATE_90_DAYS": "LATE_90_DAYS",

  /**
   * value: "WAGE_EARNER_PLAN"
   * @const
   */
  "WAGE_EARNER_PLAN": "WAGE_EARNER_PLAN",

  /**
   * value: "TOO_NEW_TO_RATE"
   * @const
   */
  "TOO_NEW_TO_RATE": "TOO_NEW_TO_RATE",

  /**
   * value: "PAYS_AS_AGREED"
   * @const
   */
  "PAYS_AS_AGREED": "PAYS_AS_AGREED",

  /**
   * value: "NOT_MORE_THAN_TWO_PAYMENTS_PAST_DUE"
   * @const
   */
  "NOT_MORE_THAN_TWO_PAYMENTS_PAST_DUE": "NOT_MORE_THAN_TWO_PAYMENTS_PAST_DUE",

  /**
   * value: "NOT_MORE_THAN_THREE_PAYMENTS_PAST_DUE"
   * @const
   */
  "NOT_MORE_THAN_THREE_PAYMENTS_PAST_DUE": "NOT_MORE_THAN_THREE_PAYMENTS_PAST_DUE",

  /**
   * value: "NOT_MORE_THAN_FOUR_PAYMENTS_PAST_DUE"
   * @const
   */
  "NOT_MORE_THAN_FOUR_PAYMENTS_PAST_DUE": "NOT_MORE_THAN_FOUR_PAYMENTS_PAST_DUE",

  /**
   * value: "OVER_120_DAYS_PAST_DUE"
   * @const
   */
  "OVER_120_DAYS_PAST_DUE": "OVER_120_DAYS_PAST_DUE",

  /**
   * value: "COLLECTION"
   * @const
   */
  "COLLECTION": "COLLECTION",

  /**
   * value: "INCLUDED_IN_CHAPTER_13"
   * @const
   */
  "INCLUDED_IN_CHAPTER_13": "INCLUDED_IN_CHAPTER_13",

  /**
   * value: "REPOSSESSION"
   * @const
   */
  "REPOSSESSION": "REPOSSESSION",

  /**
   * value: "CHARGE_OFF"
   * @const
   */
  "CHARGE_OFF": "CHARGE_OFF",

  /**
   * value: "ZERO_BALANCE_AND_CURRENT_ACCOUNT"
   * @const
   */
  "ZERO_BALANCE_AND_CURRENT_ACCOUNT": "ZERO_BALANCE_AND_CURRENT_ACCOUNT",

  /**
   * value: "NO_RATE_REPORTED"
   * @const
   */
  "NO_RATE_REPORTED": "NO_RATE_REPORTED",

  /**
   * value: "ACCOUNT_INACTIVE"
   * @const
   */
  "ACCOUNT_INACTIVE": "ACCOUNT_INACTIVE",

  /**
   * value: "LOST_OR_STOLEN_CARD"
   * @const
   */
  "LOST_OR_STOLEN_CARD": "LOST_OR_STOLEN_CARD",

  /**
   * value: "CONTACT_MEMBER_FOR_STATUS"
   * @const
   */
  "CONTACT_MEMBER_FOR_STATUS": "CONTACT_MEMBER_FOR_STATUS",

  /**
   * value: "REFINANCED_OR_RENEWED"
   * @const
   */
  "REFINANCED_OR_RENEWED": "REFINANCED_OR_RENEWED",

  /**
   * value: "CONSUMER_DECEASED"
   * @const
   */
  "CONSUMER_DECEASED": "CONSUMER_DECEASED",

  /**
   * value: "IN_FINANCIAL_COUNSELING"
   * @const
   */
  "IN_FINANCIAL_COUNSELING": "IN_FINANCIAL_COUNSELING",

  /**
   * value: "FORECLOSURE_PROCESS_STARTED"
   * @const
   */
  "FORECLOSURE_PROCESS_STARTED": "FORECLOSURE_PROCESS_STARTED",

  /**
   * value: "IN_WEP"
   * @const
   */
  "IN_WEP": "IN_WEP",

  /**
   * value: "ADJUSTMENT_PENDING"
   * @const
   */
  "ADJUSTMENT_PENDING": "ADJUSTMENT_PENDING",

  /**
   * value: "DISPUTE_RESOLUTION_PENDING"
   * @const
   */
  "DISPUTE_RESOLUTION_PENDING": "DISPUTE_RESOLUTION_PENDING",

  /**
   * value: "INCLUDED_IN_BANKRUPTCY"
   * @const
   */
  "INCLUDED_IN_BANKRUPTCY": "INCLUDED_IN_BANKRUPTCY",

  /**
   * value: "IN_BK"
   * @const
   */
  "IN_BK": "IN_BK",

  /**
   * value: "ASSIGNED_TO_US_DEPT_OF_ED"
   * @const
   */
  "ASSIGNED_TO_US_DEPT_OF_ED": "ASSIGNED_TO_US_DEPT_OF_ED",

  /**
   * value: "UNAVAILABLE"
   * @const
   */
  "UNAVAILABLE": "UNAVAILABLE"
};
/**
 * Allowed values for the <code>paymentResponsibility</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportAccountReport['PaymentResponsibilityEnum'] = {
  /**
   * value: "INDIVIDUAL"
   * @const
   */
  "INDIVIDUAL": "INDIVIDUAL",

  /**
   * value: "JOINT_CONTRACTUAL_LIABILITY"
   * @const
   */
  "JOINT_CONTRACTUAL_LIABILITY": "JOINT_CONTRACTUAL_LIABILITY",

  /**
   * value: "SHARED"
   * @const
   */
  "SHARED": "SHARED",

  /**
   * value: "UNDESIGNATED"
   * @const
   */
  "UNDESIGNATED": "UNDESIGNATED"
};
/**
 * Allowed values for the <code>accountType</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportAccountReport['AccountTypeEnum'] = {
  /**
   * value: "REVOLVING"
   * @const
   */
  "REVOLVING": "REVOLVING",

  /**
   * value: "MORTGAGE"
   * @const
   */
  "MORTGAGE": "MORTGAGE",

  /**
   * value: "INSTALLMENT"
   * @const
   */
  "INSTALLMENT": "INSTALLMENT",

  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER"
};
/**
 * Allowed values for the <code>creditorClassification</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportAccountReport['CreditorClassificationEnum'] = {
  /**
   * value: "ADVERTISING"
   * @const
   */
  "ADVERTISING": "ADVERTISING",

  /**
   * value: "CLOTHING"
   * @const
   */
  "CLOTHING": "CLOTHING",

  /**
   * value: "COLLECTION_SERVICES"
   * @const
   */
  "COLLECTION_SERVICES": "COLLECTION_SERVICES",

  /**
   * value: "CONTRACTORS"
   * @const
   */
  "CONTRACTORS": "CONTRACTORS",

  /**
   * value: "DEPARTMENT_AND_MAIL_ORDER"
   * @const
   */
  "DEPARTMENT_AND_MAIL_ORDER": "DEPARTMENT_AND_MAIL_ORDER",

  /**
   * value: "EMPLOYMENT"
   * @const
   */
  "EMPLOYMENT": "EMPLOYMENT",

  /**
   * value: "FARM_AND_GARDEN_SUPPLIES"
   * @const
   */
  "FARM_AND_GARDEN_SUPPLIES": "FARM_AND_GARDEN_SUPPLIES",

  /**
   * value: "FINANCE"
   * @const
   */
  "FINANCE": "FINANCE",

  /**
   * value: "GROCERY"
   * @const
   */
  "GROCERY": "GROCERY",

  /**
   * value: "HOME_FURNISHING"
   * @const
   */
  "HOME_FURNISHING": "HOME_FURNISHING",

  /**
   * value: "JEWELRY_AND_CAMERA"
   * @const
   */
  "JEWELRY_AND_CAMERA": "JEWELRY_AND_CAMERA",

  /**
   * value: "LUMBER_AND_HARDWARE"
   * @const
   */
  "LUMBER_AND_HARDWARE": "LUMBER_AND_HARDWARE",

  /**
   * value: "MEDICAL_AND_HEALTH"
   * @const
   */
  "MEDICAL_AND_HEALTH": "MEDICAL_AND_HEALTH",

  /**
   * value: "MISCELLANEOUS_AND_PUBLIC_RECORD"
   * @const
   */
  "MISCELLANEOUS_AND_PUBLIC_RECORD": "MISCELLANEOUS_AND_PUBLIC_RECORD",

  /**
   * value: "OIL_AND_NATIONAL_CREDIT_CARDS"
   * @const
   */
  "OIL_AND_NATIONAL_CREDIT_CARDS": "OIL_AND_NATIONAL_CREDIT_CARDS",

  /**
   * value: "PERSONAL_SERVICES_NOT_MEDICAL"
   * @const
   */
  "PERSONAL_SERVICES_NOT_MEDICAL": "PERSONAL_SERVICES_NOT_MEDICAL",

  /**
   * value: "REAL_ESTATE_AND_PUBLIC_ACCOMMODATION"
   * @const
   */
  "REAL_ESTATE_AND_PUBLIC_ACCOMMODATION": "REAL_ESTATE_AND_PUBLIC_ACCOMMODATION",

  /**
   * value: "SPORTING_GOODS"
   * @const
   */
  "SPORTING_GOODS": "SPORTING_GOODS",

  /**
   * value: "UTILITIES_AND_FUEL"
   * @const
   */
  "UTILITIES_AND_FUEL": "UTILITIES_AND_FUEL",

  /**
   * value: "WHOLESALE"
   * @const
   */
  "WHOLESALE": "WHOLESALE",

  /**
   * value: "AUTOMOTIVE"
   * @const
   */
  "AUTOMOTIVE": "AUTOMOTIVE",

  /**
   * value: "BANKING"
   * @const
   */
  "BANKING": "BANKING",

  /**
   * value: "CABLE_OR_CELLULAR"
   * @const
   */
  "CABLE_OR_CELLULAR": "CABLE_OR_CELLULAR",

  /**
   * value: "CHECK_GUARANTEE"
   * @const
   */
  "CHECK_GUARANTEE": "CHECK_GUARANTEE",

  /**
   * value: "CREDIT_UNION"
   * @const
   */
  "CREDIT_UNION": "CREDIT_UNION",

  /**
   * value: "EDUCATIONAL"
   * @const
   */
  "EDUCATIONAL": "EDUCATIONAL",

  /**
   * value: "FINANCIAL"
   * @const
   */
  "FINANCIAL": "FINANCIAL",

  /**
   * value: "GOVERNMENT"
   * @const
   */
  "GOVERNMENT": "GOVERNMENT",

  /**
   * value: "INSURANCE"
   * @const
   */
  "INSURANCE": "INSURANCE",

  /**
   * value: "MEDICAL_OR_HEALTH_CARE"
   * @const
   */
  "MEDICAL_OR_HEALTH_CARE": "MEDICAL_OR_HEALTH_CARE",

  /**
   * value: "OIL_COMPANY"
   * @const
   */
  "OIL_COMPANY": "OIL_COMPANY",

  /**
   * value: "PERSONAL_SERVICES"
   * @const
   */
  "PERSONAL_SERVICES": "PERSONAL_SERVICES",

  /**
   * value: "RENTAL_OR_LEASING"
   * @const
   */
  "RENTAL_OR_LEASING": "RENTAL_OR_LEASING",

  /**
   * value: "RETAIL"
   * @const
   */
  "RETAIL": "RETAIL",

  /**
   * value: "UTILITIES"
   * @const
   */
  "UTILITIES": "UTILITIES",

  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN"
};
/**
 * Allowed values for the <code>activityDesignator</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportAccountReport['ActivityDesignatorEnum'] = {
  /**
   * value: "CLOSED"
   * @const
   */
  "CLOSED": "CLOSED",

  /**
   * value: "DEFAULT"
   * @const
   */
  "DEFAULT": "DEFAULT",

  /**
   * value: "FROZEN"
   * @const
   */
  "FROZEN": "FROZEN",

  /**
   * value: "LOST_OR_STOLEN"
   * @const
   */
  "LOST_OR_STOLEN": "LOST_OR_STOLEN",

  /**
   * value: "OPEN"
   * @const
   */
  "OPEN": "OPEN",

  /**
   * value: "PAID"
   * @const
   */
  "PAID": "PAID",

  /**
   * value: "PAID_AND_CLOSED"
   * @const
   */
  "PAID_AND_CLOSED": "PAID_AND_CLOSED",

  /**
   * value: "REFINANCED"
   * @const
   */
  "REFINANCED": "REFINANCED",

  /**
   * value: "TRANSFER_OR_SOLD"
   * @const
   */
  "TRANSFER_OR_SOLD": "TRANSFER_OR_SOLD",

  /**
   * value: "TRANSFER_OR_SOLD_OR_PAID"
   * @const
   */
  "TRANSFER_OR_SOLD_OR_PAID": "TRANSFER_OR_SOLD_OR_PAID",

  /**
   * value: "TRANSFERRED"
   * @const
   */
  "TRANSFERRED": "TRANSFERRED",

  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN"
};
var _default = CreditReportAccountReport;
exports["default"] = _default;