"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MoneyReport = _interopRequireDefault(require("./MoneyReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LienReport model module.
 * @module model/LienReport
 * @version 1.0.0
 */
var LienReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LienReport</code>.
   * @alias module:model/LienReport
   */
  function LienReport() {
    _classCallCheck(this, LienReport);

    LienReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LienReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LienReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LienReport} obj Optional instance to populate.
     * @return {module:model/LienReport} The populated <code>LienReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LienReport();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('filedDate')) {
          obj['filedDate'] = _ApiClient["default"].convertToType(data['filedDate'], 'Date');
        }

        if (data.hasOwnProperty('reportedDate')) {
          obj['reportedDate'] = _ApiClient["default"].convertToType(data['reportedDate'], 'Date');
        }

        if (data.hasOwnProperty('courtName')) {
          obj['courtName'] = _ApiClient["default"].convertToType(data['courtName'], 'String');
        }

        if (data.hasOwnProperty('caseDocumentNumber')) {
          obj['caseDocumentNumber'] = _ApiClient["default"].convertToType(data['caseDocumentNumber'], 'String');
        }

        if (data.hasOwnProperty('lienAmount')) {
          obj['lienAmount'] = _MoneyReport["default"].constructFromObject(data['lienAmount']);
        }

        if (data.hasOwnProperty('verifiedDate')) {
          obj['verifiedDate'] = _ApiClient["default"].convertToType(data['verifiedDate'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LienReport;
}();
/**
 * @member {String} id
 */


LienReport.prototype['id'] = undefined;
/**
 * @member {Date} filedDate
 */

LienReport.prototype['filedDate'] = undefined;
/**
 * @member {Date} reportedDate
 */

LienReport.prototype['reportedDate'] = undefined;
/**
 * @member {String} courtName
 */

LienReport.prototype['courtName'] = undefined;
/**
 * @member {String} caseDocumentNumber
 */

LienReport.prototype['caseDocumentNumber'] = undefined;
/**
 * @member {module:model/MoneyReport} lienAmount
 */

LienReport.prototype['lienAmount'] = undefined;
/**
 * @member {Date} verifiedDate
 */

LienReport.prototype['verifiedDate'] = undefined;
/**
 * @member {String} status
 */

LienReport.prototype['status'] = undefined;
var _default = LienReport;
exports["default"] = _default;