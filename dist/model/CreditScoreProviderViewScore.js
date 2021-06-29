"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreditScoreLoanRiskRangeScore = _interopRequireDefault(require("./CreditScoreLoanRiskRangeScore"));

var _CreditScoreRangeScore = _interopRequireDefault(require("./CreditScoreRangeScore"));

var _CreditScoreReasonScore = _interopRequireDefault(require("./CreditScoreReasonScore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreditScoreProviderViewScore model module.
 * @module model/CreditScoreProviderViewScore
 * @version 1.0.0
 */
var CreditScoreProviderViewScore = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditScoreProviderViewScore</code>.
   * @alias module:model/CreditScoreProviderViewScore
   */
  function CreditScoreProviderViewScore() {
    _classCallCheck(this, CreditScoreProviderViewScore);

    CreditScoreProviderViewScore.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditScoreProviderViewScore, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditScoreProviderViewScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreProviderViewScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreProviderViewScore} The populated <code>CreditScoreProviderViewScore</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditScoreProviderViewScore();

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('scoreRanges')) {
          obj['scoreRanges'] = _ApiClient["default"].convertToType(data['scoreRanges'], [_CreditScoreRangeScore["default"]]);
        }

        if (data.hasOwnProperty('loanRiskRanges')) {
          obj['loanRiskRanges'] = _ApiClient["default"].convertToType(data['loanRiskRanges'], [_CreditScoreLoanRiskRangeScore["default"]]);
        }

        if (data.hasOwnProperty('scoreReasons')) {
          obj['scoreReasons'] = _ApiClient["default"].convertToType(data['scoreReasons'], [_CreditScoreReasonScore["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreditScoreProviderViewScore;
}();
/**
 * @member {module:model/CreditScoreProviderViewScore.ProviderEnum} provider
 */


CreditScoreProviderViewScore.prototype['provider'] = undefined;
/**
 * @member {Number} score
 */

CreditScoreProviderViewScore.prototype['score'] = undefined;
/**
 * @member {Array.<module:model/CreditScoreRangeScore>} scoreRanges
 */

CreditScoreProviderViewScore.prototype['scoreRanges'] = undefined;
/**
 * @member {Array.<module:model/CreditScoreLoanRiskRangeScore>} loanRiskRanges
 */

CreditScoreProviderViewScore.prototype['loanRiskRanges'] = undefined;
/**
 * @member {Array.<module:model/CreditScoreReasonScore>} scoreReasons
 */

CreditScoreProviderViewScore.prototype['scoreReasons'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

CreditScoreProviderViewScore['ProviderEnum'] = {
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
var _default = CreditScoreProviderViewScore;
exports["default"] = _default;