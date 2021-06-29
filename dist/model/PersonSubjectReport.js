"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployerReport = _interopRequireDefault(require("./EmployerReport"));

var _InternationalAddressReport = _interopRequireDefault(require("./InternationalAddressReport"));

var _InternationalPhoneReport = _interopRequireDefault(require("./InternationalPhoneReport"));

var _PersonNameReport = _interopRequireDefault(require("./PersonNameReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PersonSubjectReport model module.
 * @module model/PersonSubjectReport
 * @version 1.0.0
 */
var PersonSubjectReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PersonSubjectReport</code>.
   * @alias module:model/PersonSubjectReport
   */
  function PersonSubjectReport() {
    _classCallCheck(this, PersonSubjectReport);

    PersonSubjectReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PersonSubjectReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PersonSubjectReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonSubjectReport} obj Optional instance to populate.
     * @return {module:model/PersonSubjectReport} The populated <code>PersonSubjectReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PersonSubjectReport();

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('currentName')) {
          obj['currentName'] = _PersonNameReport["default"].constructFromObject(data['currentName']);
        }

        if (data.hasOwnProperty('aliases')) {
          obj['aliases'] = _ApiClient["default"].convertToType(data['aliases'], [_PersonNameReport["default"]]);
        }

        if (data.hasOwnProperty('currentAddress')) {
          obj['currentAddress'] = _InternationalAddressReport["default"].constructFromObject(data['currentAddress']);
        }

        if (data.hasOwnProperty('previousAddresses')) {
          obj['previousAddresses'] = _ApiClient["default"].convertToType(data['previousAddresses'], [_InternationalAddressReport["default"]]);
        }

        if (data.hasOwnProperty('homePhone')) {
          obj['homePhone'] = _InternationalPhoneReport["default"].constructFromObject(data['homePhone']);
        }

        if (data.hasOwnProperty('mobilePhone')) {
          obj['mobilePhone'] = _InternationalPhoneReport["default"].constructFromObject(data['mobilePhone']);
        }

        if (data.hasOwnProperty('nationalIdentifier')) {
          obj['nationalIdentifier'] = _ApiClient["default"].convertToType(data['nationalIdentifier'], 'String');
        }

        if (data.hasOwnProperty('dateOfBirth')) {
          obj['dateOfBirth'] = _ApiClient["default"].convertToType(data['dateOfBirth'], 'Date');
        }

        if (data.hasOwnProperty('dateOfDeath')) {
          obj['dateOfDeath'] = _ApiClient["default"].convertToType(data['dateOfDeath'], 'Date');
        }

        if (data.hasOwnProperty('employmentHistory')) {
          obj['employmentHistory'] = _ApiClient["default"].convertToType(data['employmentHistory'], [_EmployerReport["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PersonSubjectReport;
}();
/**
 * @member {module:model/PersonSubjectReport.ProviderEnum} provider
 */


PersonSubjectReport.prototype['provider'] = undefined;
/**
 * @member {module:model/PersonNameReport} currentName
 */

PersonSubjectReport.prototype['currentName'] = undefined;
/**
 * @member {Array.<module:model/PersonNameReport>} aliases
 */

PersonSubjectReport.prototype['aliases'] = undefined;
/**
 * @member {module:model/InternationalAddressReport} currentAddress
 */

PersonSubjectReport.prototype['currentAddress'] = undefined;
/**
 * @member {Array.<module:model/InternationalAddressReport>} previousAddresses
 */

PersonSubjectReport.prototype['previousAddresses'] = undefined;
/**
 * @member {module:model/InternationalPhoneReport} homePhone
 */

PersonSubjectReport.prototype['homePhone'] = undefined;
/**
 * @member {module:model/InternationalPhoneReport} mobilePhone
 */

PersonSubjectReport.prototype['mobilePhone'] = undefined;
/**
 * @member {String} nationalIdentifier
 */

PersonSubjectReport.prototype['nationalIdentifier'] = undefined;
/**
 * @member {Date} dateOfBirth
 */

PersonSubjectReport.prototype['dateOfBirth'] = undefined;
/**
 * @member {Date} dateOfDeath
 */

PersonSubjectReport.prototype['dateOfDeath'] = undefined;
/**
 * @member {Array.<module:model/EmployerReport>} employmentHistory
 */

PersonSubjectReport.prototype['employmentHistory'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

PersonSubjectReport['ProviderEnum'] = {
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
var _default = PersonSubjectReport;
exports["default"] = _default;