"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MoneyReport = _interopRequireDefault(require("./MoneyReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreditReportSummaryAccountsReport model module.
 * @module model/CreditReportSummaryAccountsReport
 * @version 1.0.0
 */
var CreditReportSummaryAccountsReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditReportSummaryAccountsReport</code>.
   * @alias module:model/CreditReportSummaryAccountsReport
   */
  function CreditReportSummaryAccountsReport() {
    _classCallCheck(this, CreditReportSummaryAccountsReport);

    CreditReportSummaryAccountsReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditReportSummaryAccountsReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditReportSummaryAccountsReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditReportSummaryAccountsReport} obj Optional instance to populate.
     * @return {module:model/CreditReportSummaryAccountsReport} The populated <code>CreditReportSummaryAccountsReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditReportSummaryAccountsReport();

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _MoneyReport["default"].constructFromObject(data['balance']);
        }

        if (data.hasOwnProperty('creditLimit')) {
          obj['creditLimit'] = _MoneyReport["default"].constructFromObject(data['creditLimit']);
        }

        if (data.hasOwnProperty('available')) {
          obj['available'] = _MoneyReport["default"].constructFromObject(data['available']);
        }

        if (data.hasOwnProperty('monthlyPaymentAmount')) {
          obj['monthlyPaymentAmount'] = _MoneyReport["default"].constructFromObject(data['monthlyPaymentAmount']);
        }

        if (data.hasOwnProperty('debtToCreditRatio')) {
          obj['debtToCreditRatio'] = _ApiClient["default"].convertToType(data['debtToCreditRatio'], 'Number');
        }

        if (data.hasOwnProperty('totalAccounts')) {
          obj['totalAccounts'] = _ApiClient["default"].convertToType(data['totalAccounts'], 'Number');
        }

        if (data.hasOwnProperty('totalNegativeAccounts')) {
          obj['totalNegativeAccounts'] = _ApiClient["default"].convertToType(data['totalNegativeAccounts'], 'Number');
        }

        if (data.hasOwnProperty('totalAccountsWithBalance')) {
          obj['totalAccountsWithBalance'] = _ApiClient["default"].convertToType(data['totalAccountsWithBalance'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CreditReportSummaryAccountsReport;
}();
/**
 * @member {module:model/MoneyReport} balance
 */


CreditReportSummaryAccountsReport.prototype['balance'] = undefined;
/**
 * @member {module:model/MoneyReport} creditLimit
 */

CreditReportSummaryAccountsReport.prototype['creditLimit'] = undefined;
/**
 * @member {module:model/MoneyReport} available
 */

CreditReportSummaryAccountsReport.prototype['available'] = undefined;
/**
 * @member {module:model/MoneyReport} monthlyPaymentAmount
 */

CreditReportSummaryAccountsReport.prototype['monthlyPaymentAmount'] = undefined;
/**
 * @member {Number} debtToCreditRatio
 */

CreditReportSummaryAccountsReport.prototype['debtToCreditRatio'] = undefined;
/**
 * @member {Number} totalAccounts
 */

CreditReportSummaryAccountsReport.prototype['totalAccounts'] = undefined;
/**
 * @member {Number} totalNegativeAccounts
 */

CreditReportSummaryAccountsReport.prototype['totalNegativeAccounts'] = undefined;
/**
 * @member {Number} totalAccountsWithBalance
 */

CreditReportSummaryAccountsReport.prototype['totalAccountsWithBalance'] = undefined;
var _default = CreditReportSummaryAccountsReport;
exports["default"] = _default;