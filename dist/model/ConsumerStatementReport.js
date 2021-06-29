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
 * The ConsumerStatementReport model module.
 * @module model/ConsumerStatementReport
 * @version 1.0.0
 */
var ConsumerStatementReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConsumerStatementReport</code>.
   * @alias module:model/ConsumerStatementReport
   */
  function ConsumerStatementReport() {
    _classCallCheck(this, ConsumerStatementReport);

    ConsumerStatementReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConsumerStatementReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConsumerStatementReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsumerStatementReport} obj Optional instance to populate.
     * @return {module:model/ConsumerStatementReport} The populated <code>ConsumerStatementReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConsumerStatementReport();

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('reportedDate')) {
          obj['reportedDate'] = _ApiClient["default"].convertToType(data['reportedDate'], 'Date');
        }

        if (data.hasOwnProperty('statement')) {
          obj['statement'] = _ApiClient["default"].convertToType(data['statement'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConsumerStatementReport;
}();
/**
 * @member {module:model/ConsumerStatementReport.ProviderEnum} provider
 */


ConsumerStatementReport.prototype['provider'] = undefined;
/**
 * @member {String} id
 */

ConsumerStatementReport.prototype['id'] = undefined;
/**
 * @member {Date} reportedDate
 */

ConsumerStatementReport.prototype['reportedDate'] = undefined;
/**
 * @member {String} statement
 */

ConsumerStatementReport.prototype['statement'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

ConsumerStatementReport['ProviderEnum'] = {
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
var _default = ConsumerStatementReport;
exports["default"] = _default;