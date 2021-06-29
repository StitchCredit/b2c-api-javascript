"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CodeDescriptionReport = _interopRequireDefault(require("./CodeDescriptionReport"));

var _ContactInformationReport = _interopRequireDefault(require("./ContactInformationReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InquiryReport model module.
 * @module model/InquiryReport
 * @version 1.0.0
 */
var InquiryReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InquiryReport</code>.
   * @alias module:model/InquiryReport
   */
  function InquiryReport() {
    _classCallCheck(this, InquiryReport);

    InquiryReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InquiryReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InquiryReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InquiryReport} obj Optional instance to populate.
     * @return {module:model/InquiryReport} The populated <code>InquiryReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InquiryReport();

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('prefix')) {
          obj['prefix'] = _CodeDescriptionReport["default"].constructFromObject(data['prefix']);
        }

        if (data.hasOwnProperty('reportedDate')) {
          obj['reportedDate'] = _ApiClient["default"].convertToType(data['reportedDate'], 'Date');
        }

        if (data.hasOwnProperty('contactInformation')) {
          obj['contactInformation'] = _ContactInformationReport["default"].constructFromObject(data['contactInformation']);
        }
      }

      return obj;
    }
  }]);

  return InquiryReport;
}();
/**
 * @member {module:model/InquiryReport.ProviderEnum} provider
 */


InquiryReport.prototype['provider'] = undefined;
/**
 * @member {String} id
 */

InquiryReport.prototype['id'] = undefined;
/**
 * @member {module:model/InquiryReport.TypeEnum} type
 */

InquiryReport.prototype['type'] = undefined;
/**
 * @member {module:model/CodeDescriptionReport} prefix
 */

InquiryReport.prototype['prefix'] = undefined;
/**
 * @member {Date} reportedDate
 */

InquiryReport.prototype['reportedDate'] = undefined;
/**
 * @member {module:model/ContactInformationReport} contactInformation
 */

InquiryReport.prototype['contactInformation'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

InquiryReport['ProviderEnum'] = {
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
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

InquiryReport['TypeEnum'] = {
  /**
   * value: "HARD"
   * @const
   */
  "HARD": "HARD",

  /**
   * value: "SOFT"
   * @const
   */
  "SOFT": "SOFT",

  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER"
};
var _default = InquiryReport;
exports["default"] = _default;