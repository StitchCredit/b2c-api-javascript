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
 * The JudgmentReport model module.
 * @module model/JudgmentReport
 * @version 1.0.0
 */
var JudgmentReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JudgmentReport</code>.
   * @alias module:model/JudgmentReport
   */
  function JudgmentReport() {
    _classCallCheck(this, JudgmentReport);

    JudgmentReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JudgmentReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JudgmentReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JudgmentReport} obj Optional instance to populate.
     * @return {module:model/JudgmentReport} The populated <code>JudgmentReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JudgmentReport();

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

        if (data.hasOwnProperty('defendant')) {
          obj['defendant'] = _ApiClient["default"].convertToType(data['defendant'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _MoneyReport["default"].constructFromObject(data['amount']);
        }

        if (data.hasOwnProperty('caseDocumentNumber')) {
          obj['caseDocumentNumber'] = _ApiClient["default"].convertToType(data['caseDocumentNumber'], 'String');
        }

        if (data.hasOwnProperty('plaintiff')) {
          obj['plaintiff'] = _ApiClient["default"].convertToType(data['plaintiff'], 'String');
        }

        if (data.hasOwnProperty('verifiedDate')) {
          obj['verifiedDate'] = _ApiClient["default"].convertToType(data['verifiedDate'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _CodeDescriptionReport["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('satisfiedDate')) {
          obj['satisfiedDate'] = _ApiClient["default"].convertToType(data['satisfiedDate'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return JudgmentReport;
}();
/**
 * @member {String} id
 */


JudgmentReport.prototype['id'] = undefined;
/**
 * @member {Date} filedDate
 */

JudgmentReport.prototype['filedDate'] = undefined;
/**
 * @member {Date} reportedDate
 */

JudgmentReport.prototype['reportedDate'] = undefined;
/**
 * @member {String} courtName
 */

JudgmentReport.prototype['courtName'] = undefined;
/**
 * @member {String} defendant
 */

JudgmentReport.prototype['defendant'] = undefined;
/**
 * @member {module:model/MoneyReport} amount
 */

JudgmentReport.prototype['amount'] = undefined;
/**
 * @member {String} caseDocumentNumber
 */

JudgmentReport.prototype['caseDocumentNumber'] = undefined;
/**
 * @member {String} plaintiff
 */

JudgmentReport.prototype['plaintiff'] = undefined;
/**
 * @member {Date} verifiedDate
 */

JudgmentReport.prototype['verifiedDate'] = undefined;
/**
 * @member {module:model/CodeDescriptionReport} status
 */

JudgmentReport.prototype['status'] = undefined;
/**
 * @member {Date} satisfiedDate
 */

JudgmentReport.prototype['satisfiedDate'] = undefined;
var _default = JudgmentReport;
exports["default"] = _default;