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
 * The TrendedDataYearReport model module.
 * @module model/TrendedDataYearReport
 * @version 1.0.0
 */
var TrendedDataYearReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrendedDataYearReport</code>.
   * @alias module:model/TrendedDataYearReport
   */
  function TrendedDataYearReport() {
    _classCallCheck(this, TrendedDataYearReport);

    TrendedDataYearReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrendedDataYearReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TrendedDataYearReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrendedDataYearReport} obj Optional instance to populate.
     * @return {module:model/TrendedDataYearReport} The populated <code>TrendedDataYearReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrendedDataYearReport();

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'String');
        }

        if (data.hasOwnProperty('monthData')) {
          obj['monthData'] = _ApiClient["default"].convertToType(data['monthData'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return TrendedDataYearReport;
}();
/**
 * @member {String} year
 */


TrendedDataYearReport.prototype['year'] = undefined;
/**
 * @member {Array.<String>} monthData
 */

TrendedDataYearReport.prototype['monthData'] = undefined;
var _default = TrendedDataYearReport;
exports["default"] = _default;