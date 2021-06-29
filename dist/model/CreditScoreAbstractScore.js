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
 * The CreditScoreAbstractScore model module.
 * @module model/CreditScoreAbstractScore
 * @version 1.0.0
 */
var CreditScoreAbstractScore = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditScoreAbstractScore</code>.
   * @alias module:model/CreditScoreAbstractScore
   */
  function CreditScoreAbstractScore() {
    _classCallCheck(this, CreditScoreAbstractScore);

    CreditScoreAbstractScore.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditScoreAbstractScore, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditScoreAbstractScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreAbstractScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreAbstractScore} The populated <code>CreditScoreAbstractScore</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditScoreAbstractScore();

        if (data.hasOwnProperty('generatedDate')) {
          obj['generatedDate'] = _ApiClient["default"].convertToType(data['generatedDate'], 'Date');
        }

        if (data.hasOwnProperty('scoreType')) {
          obj['scoreType'] = _ApiClient["default"].convertToType(data['scoreType'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('creditReportId')) {
          obj['creditReportId'] = _ApiClient["default"].convertToType(data['creditReportId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreditScoreAbstractScore;
}();
/**
 * @member {Date} generatedDate
 */


CreditScoreAbstractScore.prototype['generatedDate'] = undefined;
/**
 * @member {module:model/CreditScoreAbstractScore.ScoreTypeEnum} scoreType
 */

CreditScoreAbstractScore.prototype['scoreType'] = undefined;
/**
 * @member {String} id
 */

CreditScoreAbstractScore.prototype['id'] = undefined;
/**
 * @member {String} creditReportId
 */

CreditScoreAbstractScore.prototype['creditReportId'] = undefined;
/**
 * Allowed values for the <code>scoreType</code> property.
 * @enum {String}
 * @readonly
 */

CreditScoreAbstractScore['ScoreTypeEnum'] = {
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
var _default = CreditScoreAbstractScore;
exports["default"] = _default;