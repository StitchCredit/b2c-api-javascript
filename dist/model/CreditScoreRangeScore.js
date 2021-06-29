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
 * The CreditScoreRangeScore model module.
 * @module model/CreditScoreRangeScore
 * @version 1.0.0
 */
var CreditScoreRangeScore = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditScoreRangeScore</code>.
   * @alias module:model/CreditScoreRangeScore
   */
  function CreditScoreRangeScore() {
    _classCallCheck(this, CreditScoreRangeScore);

    CreditScoreRangeScore.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditScoreRangeScore, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditScoreRangeScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreRangeScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreRangeScore} The populated <code>CreditScoreRangeScore</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditScoreRangeScore();

        if (data.hasOwnProperty('low')) {
          obj['low'] = _ApiClient["default"].convertToType(data['low'], 'Number');
        }

        if (data.hasOwnProperty('high')) {
          obj['high'] = _ApiClient["default"].convertToType(data['high'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreditScoreRangeScore;
}();
/**
 * @member {Number} low
 */


CreditScoreRangeScore.prototype['low'] = undefined;
/**
 * @member {Number} high
 */

CreditScoreRangeScore.prototype['high'] = undefined;
/**
 * @member {String} name
 */

CreditScoreRangeScore.prototype['name'] = undefined;
var _default = CreditScoreRangeScore;
exports["default"] = _default;