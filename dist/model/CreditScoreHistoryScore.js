"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreditScoreHistoryProviderViewScore = _interopRequireDefault(require("./CreditScoreHistoryProviderViewScore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreditScoreHistoryScore model module.
 * @module model/CreditScoreHistoryScore
 * @version 1.0.0
 */
var CreditScoreHistoryScore = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditScoreHistoryScore</code>.
   * @alias module:model/CreditScoreHistoryScore
   */
  function CreditScoreHistoryScore() {
    _classCallCheck(this, CreditScoreHistoryScore);

    CreditScoreHistoryScore.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditScoreHistoryScore, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditScoreHistoryScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreHistoryScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreHistoryScore} The populated <code>CreditScoreHistoryScore</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditScoreHistoryScore();

        if (data.hasOwnProperty('generatedDate')) {
          obj['generatedDate'] = _ApiClient["default"].convertToType(data['generatedDate'], 'Date');
        }

        if (data.hasOwnProperty('scoreType')) {
          obj['scoreType'] = _ApiClient["default"].convertToType(data['scoreType'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('scoreModel')) {
          obj['scoreModel'] = _ApiClient["default"].convertToType(data['scoreModel'], 'String');
        }

        if (data.hasOwnProperty('providerViews')) {
          obj['providerViews'] = _ApiClient["default"].convertToType(data['providerViews'], [_CreditScoreHistoryProviderViewScore["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreditScoreHistoryScore;
}();
/**
 * @member {Date} generatedDate
 */


CreditScoreHistoryScore.prototype['generatedDate'] = undefined;
/**
 * @member {module:model/CreditScoreHistoryScore.ScoreTypeEnum} scoreType
 */

CreditScoreHistoryScore.prototype['scoreType'] = undefined;
/**
 * @member {String} id
 */

CreditScoreHistoryScore.prototype['id'] = undefined;
/**
 * @member {module:model/CreditScoreHistoryScore.ScoreModelEnum} scoreModel
 */

CreditScoreHistoryScore.prototype['scoreModel'] = undefined;
/**
 * @member {Array.<module:model/CreditScoreHistoryProviderViewScore>} providerViews
 */

CreditScoreHistoryScore.prototype['providerViews'] = undefined;
/**
 * Allowed values for the <code>scoreType</code> property.
 * @enum {String}
 * @readonly
 */

CreditScoreHistoryScore['ScoreTypeEnum'] = {
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
/**
 * Allowed values for the <code>scoreModel</code> property.
 * @enum {String}
 * @readonly
 */

CreditScoreHistoryScore['ScoreModelEnum'] = {
  /**
   * value: "VANTAGE"
   * @const
   */
  "VANTAGE": "VANTAGE",

  /**
   * value: "ERS"
   * @const
   */
  "ERS": "ERS",

  /**
   * value: "FICO"
   * @const
   */
  "FICO": "FICO",

  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN"
};
var _default = CreditScoreHistoryScore;
exports["default"] = _default;