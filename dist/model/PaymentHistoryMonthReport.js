"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentHistoryMonthReport model module.
 * @module model/PaymentHistoryMonthReport
 * @version 1.0.0
 */
var PaymentHistoryMonthReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentHistoryMonthReport</code>.
   * @alias module:model/PaymentHistoryMonthReport
   */
  function PaymentHistoryMonthReport() {
    _classCallCheck(this, PaymentHistoryMonthReport);

    PaymentHistoryMonthReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentHistoryMonthReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentHistoryMonthReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentHistoryMonthReport} obj Optional instance to populate.
     * @return {module:model/PaymentHistoryMonthReport} The populated <code>PaymentHistoryMonthReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentHistoryMonthReport();

        if (data.hasOwnProperty('monthType')) {
          obj['monthType'] = _ApiClient["default"].convertToType(data['monthType'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentHistoryMonthReport;
}();
/**
 * @member {module:model/PaymentHistoryMonthReport.MonthTypeEnum} monthType
 */


PaymentHistoryMonthReport.prototype['monthType'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport.ValueEnum} value
 */

PaymentHistoryMonthReport.prototype['value'] = undefined;
/**
 * Allowed values for the <code>monthType</code> property.
 * @enum {String}
 * @readonly
 */

PaymentHistoryMonthReport['MonthTypeEnum'] = {
  /**
   * value: "NO_DATA"
   * @const
   */
  "NO_DATA": "NO_DATA",

  /**
   * value: "NEGATIVE"
   * @const
   */
  "NEGATIVE": "NEGATIVE",

  /**
   * value: "POSITIVE"
   * @const
   */
  "POSITIVE": "POSITIVE",

  /**
   * value: "COLLECTION"
   * @const
   */
  "COLLECTION": "COLLECTION",

  /**
   * value: "NEW_ACCOUNT"
   * @const
   */
  "NEW_ACCOUNT": "NEW_ACCOUNT",

  /**
   * value: "BANKRUPTCY"
   * @const
   */
  "BANKRUPTCY": "BANKRUPTCY",

  /**
   * value: "FORECLOSURE"
   * @const
   */
  "FORECLOSURE": "FORECLOSURE",

  /**
   * value: "VOLUNTARY_SURRENDER"
   * @const
   */
  "VOLUNTARY_SURRENDER": "VOLUNTARY_SURRENDER",

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
   * value: "COLLECTION_CHARGEOFF"
   * @const
   */
  "COLLECTION_CHARGEOFF": "COLLECTION_CHARGEOFF"
};
/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */

PaymentHistoryMonthReport['ValueEnum'] = {
  /**
   * value: "PAYS_AS_AGREED"
   * @const
   */
  "PAYS_AS_AGREED": "PAYS_AS_AGREED",

  /**
   * value: "DAYSLATE_30"
   * @const
   */
  "DAYSLATE_30": "DAYSLATE_30",

  /**
   * value: "DAYSLATE_60"
   * @const
   */
  "DAYSLATE_60": "DAYSLATE_60",

  /**
   * value: "DAYSLATE_90"
   * @const
   */
  "DAYSLATE_90": "DAYSLATE_90",

  /**
   * value: "DAYSLATE_120"
   * @const
   */
  "DAYSLATE_120": "DAYSLATE_120",

  /**
   * value: "DAYSLATE_150"
   * @const
   */
  "DAYSLATE_150": "DAYSLATE_150",

  /**
   * value: "DAYSLATE_180"
   * @const
   */
  "DAYSLATE_180": "DAYSLATE_180",

  /**
   * value: "TOO_NEW_TO_RATE"
   * @const
   */
  "TOO_NEW_TO_RATE": "TOO_NEW_TO_RATE",

  /**
   * value: "BANKRUPTCY"
   * @const
   */
  "BANKRUPTCY": "BANKRUPTCY",

  /**
   * value: "COLLECTION"
   * @const
   */
  "COLLECTION": "COLLECTION",

  /**
   * value: "FORECLOSURE"
   * @const
   */
  "FORECLOSURE": "FORECLOSURE",

  /**
   * value: "VOLUNTARY_SURRENDER"
   * @const
   */
  "VOLUNTARY_SURRENDER": "VOLUNTARY_SURRENDER",

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
   * value: "COLLECTION_CHARGEOFF"
   * @const
   */
  "COLLECTION_CHARGEOFF": "COLLECTION_CHARGEOFF",

  /**
   * value: "ZERO_BAL_AND_CURR_ACCT"
   * @const
   */
  "ZERO_BAL_AND_CURR_ACCT": "ZERO_BAL_AND_CURR_ACCT",

  /**
   * value: "NOT_REPORTED"
   * @const
   */
  "NOT_REPORTED": "NOT_REPORTED",

  /**
   * value: "UNAVAILABLE"
   * @const
   */
  "UNAVAILABLE": "UNAVAILABLE"
};
var _default = PaymentHistoryMonthReport;
exports["default"] = _default;