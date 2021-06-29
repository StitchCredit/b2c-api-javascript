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
 * The CreditScoreLoanRiskRangeReport model module.
 * @module model/CreditScoreLoanRiskRangeReport
 * @version 1.0.0
 */
var CreditScoreLoanRiskRangeReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreditScoreLoanRiskRangeReport</code>.
   * @alias module:model/CreditScoreLoanRiskRangeReport
   */
  function CreditScoreLoanRiskRangeReport() {
    _classCallCheck(this, CreditScoreLoanRiskRangeReport);

    CreditScoreLoanRiskRangeReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreditScoreLoanRiskRangeReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreditScoreLoanRiskRangeReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreLoanRiskRangeReport} obj Optional instance to populate.
     * @return {module:model/CreditScoreLoanRiskRangeReport} The populated <code>CreditScoreLoanRiskRangeReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreditScoreLoanRiskRangeReport();

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

  return CreditScoreLoanRiskRangeReport;
}();
/**
 * @member {Number} low
 */


CreditScoreLoanRiskRangeReport.prototype['low'] = undefined;
/**
 * @member {Number} high
 */

CreditScoreLoanRiskRangeReport.prototype['high'] = undefined;
/**
 * @member {String} name
 */

CreditScoreLoanRiskRangeReport.prototype['name'] = undefined;
var _default = CreditScoreLoanRiskRangeReport;
exports["default"] = _default;