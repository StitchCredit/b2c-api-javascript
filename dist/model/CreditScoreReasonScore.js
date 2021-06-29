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
 * The CreditScoreReasonScore model module.
 * @module model/CreditScoreReasonScore
 * @version 1.0.0
 */
var CreditScoreReasonScore = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditScoreReasonScore</code>.
   * @alias module:model/CreditScoreReasonScore
   */
  function CreditScoreReasonScore() {
    _classCallCheck(this, CreditScoreReasonScore);

    CreditScoreReasonScore.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditScoreReasonScore, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditScoreReasonScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreReasonScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreReasonScore} The populated <code>CreditScoreReasonScore</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditScoreReasonScore();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('creditScoreFactorEffect')) {
          obj['creditScoreFactorEffect'] = _ApiClient["default"].convertToType(data['creditScoreFactorEffect'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreditScoreReasonScore;
}();
/**
 * @member {String} code
 */


CreditScoreReasonScore.prototype['code'] = undefined;
/**
 * @member {String} description
 */

CreditScoreReasonScore.prototype['description'] = undefined;
/**
 * @member {module:model/CreditScoreReasonScore.CreditScoreFactorEffectEnum} creditScoreFactorEffect
 */

CreditScoreReasonScore.prototype['creditScoreFactorEffect'] = undefined;
/**
 * Allowed values for the <code>creditScoreFactorEffect</code> property.
 * @enum {String}
 * @readonly
 */

CreditScoreReasonScore['CreditScoreFactorEffectEnum'] = {
  /**
   * value: "HELPING"
   * @const
   */
  "HELPING": "HELPING",

  /**
   * value: "HURTING"
   * @const
   */
  "HURTING": "HURTING",

  /**
   * value: "NEUTRAL"
   * @const
   */
  "NEUTRAL": "NEUTRAL"
};
var _default = CreditScoreReasonScore;
exports["default"] = _default;