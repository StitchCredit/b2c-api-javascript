"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InternationalAddressReport = _interopRequireDefault(require("./InternationalAddressReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployerReport model module.
 * @module model/EmployerReport
 * @version 1.0.0
 */
var EmployerReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployerReport</code>.
   * @alias module:model/EmployerReport
   */
  function EmployerReport() {
    _classCallCheck(this, EmployerReport);

    EmployerReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployerReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmployerReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployerReport} obj Optional instance to populate.
     * @return {module:model/EmployerReport} The populated <code>EmployerReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployerReport();

        if (data.hasOwnProperty('employerName')) {
          obj['employerName'] = _ApiClient["default"].convertToType(data['employerName'], 'String');
        }

        if (data.hasOwnProperty('employeeTitle')) {
          obj['employeeTitle'] = _ApiClient["default"].convertToType(data['employeeTitle'], 'String');
        }

        if (data.hasOwnProperty('currentEmployer')) {
          obj['currentEmployer'] = _ApiClient["default"].convertToType(data['currentEmployer'], 'Boolean');
        }

        if (data.hasOwnProperty('ordinal')) {
          obj['ordinal'] = _ApiClient["default"].convertToType(data['ordinal'], 'Number');
        }

        if (data.hasOwnProperty('dateOfEmployment')) {
          obj['dateOfEmployment'] = _ApiClient["default"].convertToType(data['dateOfEmployment'], 'Date');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _InternationalAddressReport["default"].constructFromObject(data['address']);
        }
      }

      return obj;
    }
  }]);

  return EmployerReport;
}();
/**
 * @member {String} employerName
 */


EmployerReport.prototype['employerName'] = undefined;
/**
 * @member {String} employeeTitle
 */

EmployerReport.prototype['employeeTitle'] = undefined;
/**
 * @member {Boolean} currentEmployer
 */

EmployerReport.prototype['currentEmployer'] = undefined;
/**
 * @member {Number} ordinal
 */

EmployerReport.prototype['ordinal'] = undefined;
/**
 * @member {Date} dateOfEmployment
 */

EmployerReport.prototype['dateOfEmployment'] = undefined;
/**
 * @member {module:model/InternationalAddressReport} address
 */

EmployerReport.prototype['address'] = undefined;
var _default = EmployerReport;
exports["default"] = _default;