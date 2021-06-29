"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreditReportProviderViewReport = _interopRequireDefault(require("./CreditReportProviderViewReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreditReportReport model module.
 * @module model/CreditReportReport
 * @version 1.0.0
 */
var CreditReportReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditReportReport</code>.
   * @alias module:model/CreditReportReport
   */
  function CreditReportReport() {
    _classCallCheck(this, CreditReportReport);

    CreditReportReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditReportReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditReportReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditReportReport} obj Optional instance to populate.
     * @return {module:model/CreditReportReport} The populated <code>CreditReportReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditReportReport();

        if (data.hasOwnProperty('providerViews')) {
          obj['providerViews'] = _ApiClient["default"].convertToType(data['providerViews'], [_CreditReportProviderViewReport["default"]]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('reportType')) {
          obj['reportType'] = _ApiClient["default"].convertToType(data['reportType'], 'String');
        }

        if (data.hasOwnProperty('generatedDate')) {
          obj['generatedDate'] = _ApiClient["default"].convertToType(data['generatedDate'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return CreditReportReport;
}();
/**
 * @member {Array.<module:model/CreditReportProviderViewReport>} providerViews
 */


CreditReportReport.prototype['providerViews'] = undefined;
/**
 * @member {String} id
 */

CreditReportReport.prototype['id'] = undefined;
/**
 * @member {module:model/CreditReportReport.ReportTypeEnum} reportType
 */

CreditReportReport.prototype['reportType'] = undefined;
/**
 * @member {Date} generatedDate
 */

CreditReportReport.prototype['generatedDate'] = undefined;
/**
 * Allowed values for the <code>reportType</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportReport['ReportTypeEnum'] = {
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
var _default = CreditReportReport;
exports["default"] = _default;