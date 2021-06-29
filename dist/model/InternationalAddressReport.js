"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CountryReport = _interopRequireDefault(require("./CountryReport"));

var _InternationalPhoneReport = _interopRequireDefault(require("./InternationalPhoneReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InternationalAddressReport model module.
 * @module model/InternationalAddressReport
 * @version 1.0.0
 */
var InternationalAddressReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InternationalAddressReport</code>.
   * @alias module:model/InternationalAddressReport
   */
  function InternationalAddressReport() {
    _classCallCheck(this, InternationalAddressReport);

    InternationalAddressReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InternationalAddressReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InternationalAddressReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InternationalAddressReport} obj Optional instance to populate.
     * @return {module:model/InternationalAddressReport} The populated <code>InternationalAddressReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InternationalAddressReport();

        if (data.hasOwnProperty('country')) {
          obj['country'] = _CountryReport["default"].constructFromObject(data['country']);
        }

        if (data.hasOwnProperty('line1')) {
          obj['line1'] = _ApiClient["default"].convertToType(data['line1'], 'String');
        }

        if (data.hasOwnProperty('line2')) {
          obj['line2'] = _ApiClient["default"].convertToType(data['line2'], 'String');
        }

        if (data.hasOwnProperty('line3')) {
          obj['line3'] = _ApiClient["default"].convertToType(data['line3'], 'String');
        }

        if (data.hasOwnProperty('line4')) {
          obj['line4'] = _ApiClient["default"].convertToType(data['line4'], 'String');
        }

        if (data.hasOwnProperty('line5')) {
          obj['line5'] = _ApiClient["default"].convertToType(data['line5'], 'String');
        }

        if (data.hasOwnProperty('firstReportedDate')) {
          obj['firstReportedDate'] = _ApiClient["default"].convertToType(data['firstReportedDate'], 'Date');
        }

        if (data.hasOwnProperty('lastReportedDate')) {
          obj['lastReportedDate'] = _ApiClient["default"].convertToType(data['lastReportedDate'], 'Date');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _InternationalPhoneReport["default"].constructFromObject(data['phone']);
        }
      }

      return obj;
    }
  }]);

  return InternationalAddressReport;
}();
/**
 * @member {module:model/CountryReport} country
 */


InternationalAddressReport.prototype['country'] = undefined;
/**
 * @member {String} line1
 */

InternationalAddressReport.prototype['line1'] = undefined;
/**
 * @member {String} line2
 */

InternationalAddressReport.prototype['line2'] = undefined;
/**
 * @member {String} line3
 */

InternationalAddressReport.prototype['line3'] = undefined;
/**
 * @member {String} line4
 */

InternationalAddressReport.prototype['line4'] = undefined;
/**
 * @member {String} line5
 */

InternationalAddressReport.prototype['line5'] = undefined;
/**
 * @member {Date} firstReportedDate
 */

InternationalAddressReport.prototype['firstReportedDate'] = undefined;
/**
 * @member {Date} lastReportedDate
 */

InternationalAddressReport.prototype['lastReportedDate'] = undefined;
/**
 * @member {module:model/InternationalPhoneReport} phone
 */

InternationalAddressReport.prototype['phone'] = undefined;
var _default = InternationalAddressReport;
exports["default"] = _default;