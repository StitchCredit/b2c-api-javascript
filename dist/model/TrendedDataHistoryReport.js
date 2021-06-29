"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrendedDataReport = _interopRequireDefault(require("./TrendedDataReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TrendedDataHistoryReport model module.
 * @module model/TrendedDataHistoryReport
 * @version 1.0.0
 */
var TrendedDataHistoryReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrendedDataHistoryReport</code>.
   * @alias module:model/TrendedDataHistoryReport
   */
  function TrendedDataHistoryReport() {
    _classCallCheck(this, TrendedDataHistoryReport);

    TrendedDataHistoryReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrendedDataHistoryReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TrendedDataHistoryReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrendedDataHistoryReport} obj Optional instance to populate.
     * @return {module:model/TrendedDataHistoryReport} The populated <code>TrendedDataHistoryReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrendedDataHistoryReport();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('trendedDataList')) {
          obj['trendedDataList'] = _ApiClient["default"].convertToType(data['trendedDataList'], [_TrendedDataReport["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TrendedDataHistoryReport;
}();
/**
 * @member {String} name
 */


TrendedDataHistoryReport.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/TrendedDataReport>} trendedDataList
 */

TrendedDataHistoryReport.prototype['trendedDataList'] = undefined;
var _default = TrendedDataHistoryReport;
exports["default"] = _default;