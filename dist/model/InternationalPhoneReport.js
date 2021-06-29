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
 * The InternationalPhoneReport model module.
 * @module model/InternationalPhoneReport
 * @version 1.0.0
 */
var InternationalPhoneReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InternationalPhoneReport</code>.
   * @alias module:model/InternationalPhoneReport
   */
  function InternationalPhoneReport() {
    _classCallCheck(this, InternationalPhoneReport);

    InternationalPhoneReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InternationalPhoneReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InternationalPhoneReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InternationalPhoneReport} obj Optional instance to populate.
     * @return {module:model/InternationalPhoneReport} The populated <code>InternationalPhoneReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InternationalPhoneReport();

        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _ApiClient["default"].convertToType(data['countryCode'], 'String');
        }

        if (data.hasOwnProperty('areaCode')) {
          obj['areaCode'] = _ApiClient["default"].convertToType(data['areaCode'], 'String');
        }

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InternationalPhoneReport;
}();
/**
 * @member {String} countryCode
 */


InternationalPhoneReport.prototype['countryCode'] = undefined;
/**
 * @member {String} areaCode
 */

InternationalPhoneReport.prototype['areaCode'] = undefined;
/**
 * @member {String} exchange
 */

InternationalPhoneReport.prototype['exchange'] = undefined;
/**
 * @member {String} extension
 */

InternationalPhoneReport.prototype['extension'] = undefined;
var _default = InternationalPhoneReport;
exports["default"] = _default;