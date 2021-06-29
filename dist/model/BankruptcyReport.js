"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CodeDescriptionReport = _interopRequireDefault(require("./CodeDescriptionReport"));

var _MoneyReport = _interopRequireDefault(require("./MoneyReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BankruptcyReport model module.
 * @module model/BankruptcyReport
 * @version 1.0.0
 */
var BankruptcyReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BankruptcyReport</code>.
   * @alias module:model/BankruptcyReport
   */
  function BankruptcyReport() {
    _classCallCheck(this, BankruptcyReport);

    BankruptcyReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BankruptcyReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BankruptcyReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankruptcyReport} obj Optional instance to populate.
     * @return {module:model/BankruptcyReport} The populated <code>BankruptcyReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BankruptcyReport();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('filedDate')) {
          obj['filedDate'] = _ApiClient["default"].convertToType(data['filedDate'], 'Date');
        }

        if (data.hasOwnProperty('reportedDate')) {
          obj['reportedDate'] = _ApiClient["default"].convertToType(data['reportedDate'], 'Date');
        }

        if (data.hasOwnProperty('referenceNumber')) {
          obj['referenceNumber'] = _ApiClient["default"].convertToType(data['referenceNumber'], 'String');
        }

        if (data.hasOwnProperty('dispositionStatus')) {
          obj['dispositionStatus'] = _CodeDescriptionReport["default"].constructFromObject(data['dispositionStatus']);
        }

        if (data.hasOwnProperty('courtName')) {
          obj['courtName'] = _ApiClient["default"].convertToType(data['courtName'], 'String');
        }

        if (data.hasOwnProperty('liability')) {
          obj['liability'] = _MoneyReport["default"].constructFromObject(data['liability']);
        }

        if (data.hasOwnProperty('exemptAmount')) {
          obj['exemptAmount'] = _MoneyReport["default"].constructFromObject(data['exemptAmount']);
        }

        if (data.hasOwnProperty('assetAmount')) {
          obj['assetAmount'] = _MoneyReport["default"].constructFromObject(data['assetAmount']);
        }
      }

      return obj;
    }
  }]);

  return BankruptcyReport;
}();
/**
 * @member {String} id
 */


BankruptcyReport.prototype['id'] = undefined;
/**
 * @member {Date} filedDate
 */

BankruptcyReport.prototype['filedDate'] = undefined;
/**
 * @member {Date} reportedDate
 */

BankruptcyReport.prototype['reportedDate'] = undefined;
/**
 * @member {String} referenceNumber
 */

BankruptcyReport.prototype['referenceNumber'] = undefined;
/**
 * @member {module:model/CodeDescriptionReport} dispositionStatus
 */

BankruptcyReport.prototype['dispositionStatus'] = undefined;
/**
 * @member {String} courtName
 */

BankruptcyReport.prototype['courtName'] = undefined;
/**
 * @member {module:model/MoneyReport} liability
 */

BankruptcyReport.prototype['liability'] = undefined;
/**
 * @member {module:model/MoneyReport} exemptAmount
 */

BankruptcyReport.prototype['exemptAmount'] = undefined;
/**
 * @member {module:model/MoneyReport} assetAmount
 */

BankruptcyReport.prototype['assetAmount'] = undefined;
var _default = BankruptcyReport;
exports["default"] = _default;