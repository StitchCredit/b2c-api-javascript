"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CollectionItemReport = _interopRequireDefault(require("./CollectionItemReport"));

var _ConsumerStatementReport = _interopRequireDefault(require("./ConsumerStatementReport"));

var _CreditReportAccountReport = _interopRequireDefault(require("./CreditReportAccountReport"));

var _CreditReportSummaryReport = _interopRequireDefault(require("./CreditReportSummaryReport"));

var _InquiryReport = _interopRequireDefault(require("./InquiryReport"));

var _PublicRecordsReport = _interopRequireDefault(require("./PublicRecordsReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreditReportProviderViewReport model module.
 * @module model/CreditReportProviderViewReport
 * @version 1.0.0
 */
var CreditReportProviderViewReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditReportProviderViewReport</code>.
   * @alias module:model/CreditReportProviderViewReport
   */
  function CreditReportProviderViewReport() {
    _classCallCheck(this, CreditReportProviderViewReport);

    CreditReportProviderViewReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditReportProviderViewReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditReportProviderViewReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditReportProviderViewReport} obj Optional instance to populate.
     * @return {module:model/CreditReportProviderViewReport} The populated <code>CreditReportProviderViewReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditReportProviderViewReport();

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _CreditReportSummaryReport["default"].constructFromObject(data['summary']);
        }

        if (data.hasOwnProperty('revolvingAccounts')) {
          obj['revolvingAccounts'] = _ApiClient["default"].convertToType(data['revolvingAccounts'], [_CreditReportAccountReport["default"]]);
        }

        if (data.hasOwnProperty('mortgageAccounts')) {
          obj['mortgageAccounts'] = _ApiClient["default"].convertToType(data['mortgageAccounts'], [_CreditReportAccountReport["default"]]);
        }

        if (data.hasOwnProperty('installmentAccounts')) {
          obj['installmentAccounts'] = _ApiClient["default"].convertToType(data['installmentAccounts'], [_CreditReportAccountReport["default"]]);
        }

        if (data.hasOwnProperty('otherAccounts')) {
          obj['otherAccounts'] = _ApiClient["default"].convertToType(data['otherAccounts'], [_CreditReportAccountReport["default"]]);
        }

        if (data.hasOwnProperty('inquiries')) {
          obj['inquiries'] = _ApiClient["default"].convertToType(data['inquiries'], [_InquiryReport["default"]]);
        }

        if (data.hasOwnProperty('consumerStatements')) {
          obj['consumerStatements'] = _ApiClient["default"].convertToType(data['consumerStatements'], [_ConsumerStatementReport["default"]]);
        }

        if (data.hasOwnProperty('publicRecords')) {
          obj['publicRecords'] = _PublicRecordsReport["default"].constructFromObject(data['publicRecords']);
        }

        if (data.hasOwnProperty('collections')) {
          obj['collections'] = _ApiClient["default"].convertToType(data['collections'], [_CollectionItemReport["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreditReportProviderViewReport;
}();
/**
 * @member {module:model/CreditReportProviderViewReport.ProviderEnum} provider
 */


CreditReportProviderViewReport.prototype['provider'] = undefined;
/**
 * @member {module:model/CreditReportSummaryReport} summary
 */

CreditReportProviderViewReport.prototype['summary'] = undefined;
/**
 * @member {Array.<module:model/CreditReportAccountReport>} revolvingAccounts
 */

CreditReportProviderViewReport.prototype['revolvingAccounts'] = undefined;
/**
 * @member {Array.<module:model/CreditReportAccountReport>} mortgageAccounts
 */

CreditReportProviderViewReport.prototype['mortgageAccounts'] = undefined;
/**
 * @member {Array.<module:model/CreditReportAccountReport>} installmentAccounts
 */

CreditReportProviderViewReport.prototype['installmentAccounts'] = undefined;
/**
 * @member {Array.<module:model/CreditReportAccountReport>} otherAccounts
 */

CreditReportProviderViewReport.prototype['otherAccounts'] = undefined;
/**
 * @member {Array.<module:model/InquiryReport>} inquiries
 */

CreditReportProviderViewReport.prototype['inquiries'] = undefined;
/**
 * @member {Array.<module:model/ConsumerStatementReport>} consumerStatements
 */

CreditReportProviderViewReport.prototype['consumerStatements'] = undefined;
/**
 * @member {module:model/PublicRecordsReport} publicRecords
 */

CreditReportProviderViewReport.prototype['publicRecords'] = undefined;
/**
 * @member {Array.<module:model/CollectionItemReport>} collections
 */

CreditReportProviderViewReport.prototype['collections'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

CreditReportProviderViewReport['ProviderEnum'] = {
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
var _default = CreditReportProviderViewReport;
exports["default"] = _default;