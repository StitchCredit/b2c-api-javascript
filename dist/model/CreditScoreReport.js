"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreditScoreLoanRiskRangeReport = _interopRequireDefault(require("./CreditScoreLoanRiskRangeReport"));

var _CreditScoreRangeReport = _interopRequireDefault(require("./CreditScoreRangeReport"));

var _CreditScoreReasonReport = _interopRequireDefault(require("./CreditScoreReasonReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreditScoreReport model module.
 * @module model/CreditScoreReport
 * @version 1.0.0
 */
var CreditScoreReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditScoreReport</code>.
   * @alias module:model/CreditScoreReport
   */
  function CreditScoreReport() {
    _classCallCheck(this, CreditScoreReport);

    CreditScoreReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditScoreReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditScoreReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreReport} obj Optional instance to populate.
     * @return {module:model/CreditScoreReport} The populated <code>CreditScoreReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditScoreReport();

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('scoreRanges')) {
          obj['scoreRanges'] = _ApiClient["default"].convertToType(data['scoreRanges'], [_CreditScoreRangeReport["default"]]);
        }

        if (data.hasOwnProperty('loanRiskRanges')) {
          obj['loanRiskRanges'] = _ApiClient["default"].convertToType(data['loanRiskRanges'], [_CreditScoreLoanRiskRangeReport["default"]]);
        }

        if (data.hasOwnProperty('scoreReasons')) {
          obj['scoreReasons'] = _ApiClient["default"].convertToType(data['scoreReasons'], [_CreditScoreReasonReport["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreditScoreReport;
}();
/**
 * @member {Number} score
 */


CreditScoreReport.prototype['score'] = undefined;
/**
 * @member {module:model/CreditScoreReport.ProviderEnum} provider
 */

CreditScoreReport.prototype['provider'] = undefined;
/**
 * @member {Array.<module:model/CreditScoreRangeReport>} scoreRanges
 */

CreditScoreReport.prototype['scoreRanges'] = undefined;
/**
 * @member {Array.<module:model/CreditScoreLoanRiskRangeReport>} loanRiskRanges
 */

CreditScoreReport.prototype['loanRiskRanges'] = undefined;
/**
 * @member {Array.<module:model/CreditScoreReasonReport>} scoreReasons
 */

CreditScoreReport.prototype['scoreReasons'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

CreditScoreReport['ProviderEnum'] = {
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
var _default = CreditScoreReport;
exports["default"] = _default;