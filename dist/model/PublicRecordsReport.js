"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BankruptcyReport = _interopRequireDefault(require("./BankruptcyReport"));

var _JudgmentReport = _interopRequireDefault(require("./JudgmentReport"));

var _LienReport = _interopRequireDefault(require("./LienReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PublicRecordsReport model module.
 * @module model/PublicRecordsReport
 * @version 1.0.0
 */
var PublicRecordsReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PublicRecordsReport</code>.
   * @alias module:model/PublicRecordsReport
   */
  function PublicRecordsReport() {
    _classCallCheck(this, PublicRecordsReport);

    PublicRecordsReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublicRecordsReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PublicRecordsReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicRecordsReport} obj Optional instance to populate.
     * @return {module:model/PublicRecordsReport} The populated <code>PublicRecordsReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublicRecordsReport();

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('bankruptcies')) {
          obj['bankruptcies'] = _ApiClient["default"].convertToType(data['bankruptcies'], [_BankruptcyReport["default"]]);
        }

        if (data.hasOwnProperty('judgments')) {
          obj['judgments'] = _ApiClient["default"].convertToType(data['judgments'], [_JudgmentReport["default"]]);
        }

        if (data.hasOwnProperty('liens')) {
          obj['liens'] = _ApiClient["default"].convertToType(data['liens'], [_LienReport["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PublicRecordsReport;
}();
/**
 * @member {module:model/PublicRecordsReport.ProviderEnum} provider
 */


PublicRecordsReport.prototype['provider'] = undefined;
/**
 * @member {Array.<module:model/BankruptcyReport>} bankruptcies
 */

PublicRecordsReport.prototype['bankruptcies'] = undefined;
/**
 * @member {Array.<module:model/JudgmentReport>} judgments
 */

PublicRecordsReport.prototype['judgments'] = undefined;
/**
 * @member {Array.<module:model/LienReport>} liens
 */

PublicRecordsReport.prototype['liens'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

PublicRecordsReport['ProviderEnum'] = {
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
var _default = PublicRecordsReport;
exports["default"] = _default;