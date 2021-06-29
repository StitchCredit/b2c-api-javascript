"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentHistoryMonthReport = _interopRequireDefault(require("./PaymentHistoryMonthReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentHistoryYearReport model module.
 * @module model/PaymentHistoryYearReport
 * @version 1.0.0
 */
var PaymentHistoryYearReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentHistoryYearReport</code>.
   * @alias module:model/PaymentHistoryYearReport
   */
  function PaymentHistoryYearReport() {
    _classCallCheck(this, PaymentHistoryYearReport);

    PaymentHistoryYearReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentHistoryYearReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentHistoryYearReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentHistoryYearReport} obj Optional instance to populate.
     * @return {module:model/PaymentHistoryYearReport} The populated <code>PaymentHistoryYearReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentHistoryYearReport();

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('january')) {
          obj['january'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['january']);
        }

        if (data.hasOwnProperty('february')) {
          obj['february'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['february']);
        }

        if (data.hasOwnProperty('march')) {
          obj['march'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['march']);
        }

        if (data.hasOwnProperty('april')) {
          obj['april'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['april']);
        }

        if (data.hasOwnProperty('may')) {
          obj['may'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['may']);
        }

        if (data.hasOwnProperty('june')) {
          obj['june'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['june']);
        }

        if (data.hasOwnProperty('july')) {
          obj['july'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['july']);
        }

        if (data.hasOwnProperty('august')) {
          obj['august'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['august']);
        }

        if (data.hasOwnProperty('september')) {
          obj['september'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['september']);
        }

        if (data.hasOwnProperty('october')) {
          obj['october'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['october']);
        }

        if (data.hasOwnProperty('november')) {
          obj['november'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['november']);
        }

        if (data.hasOwnProperty('december')) {
          obj['december'] = _PaymentHistoryMonthReport["default"].constructFromObject(data['december']);
        }
      }

      return obj;
    }
  }]);

  return PaymentHistoryYearReport;
}();
/**
 * @member {Number} year
 */


PaymentHistoryYearReport.prototype['year'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} january
 */

PaymentHistoryYearReport.prototype['january'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} february
 */

PaymentHistoryYearReport.prototype['february'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} march
 */

PaymentHistoryYearReport.prototype['march'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} april
 */

PaymentHistoryYearReport.prototype['april'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} may
 */

PaymentHistoryYearReport.prototype['may'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} june
 */

PaymentHistoryYearReport.prototype['june'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} july
 */

PaymentHistoryYearReport.prototype['july'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} august
 */

PaymentHistoryYearReport.prototype['august'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} september
 */

PaymentHistoryYearReport.prototype['september'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} october
 */

PaymentHistoryYearReport.prototype['october'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} november
 */

PaymentHistoryYearReport.prototype['november'] = undefined;
/**
 * @member {module:model/PaymentHistoryMonthReport} december
 */

PaymentHistoryYearReport.prototype['december'] = undefined;
var _default = PaymentHistoryYearReport;
exports["default"] = _default;