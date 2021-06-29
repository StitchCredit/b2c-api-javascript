"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InternationalAddressReport = _interopRequireDefault(require("./InternationalAddressReport"));

var _InternationalPhoneReport = _interopRequireDefault(require("./InternationalPhoneReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContactInformationReport model module.
 * @module model/ContactInformationReport
 * @version 1.0.0
 */
var ContactInformationReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactInformationReport</code>.
   * @alias module:model/ContactInformationReport
   */
  function ContactInformationReport() {
    _classCallCheck(this, ContactInformationReport);

    ContactInformationReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactInformationReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactInformationReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactInformationReport} obj Optional instance to populate.
     * @return {module:model/ContactInformationReport} The populated <code>ContactInformationReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactInformationReport();

        if (data.hasOwnProperty('contactName')) {
          obj['contactName'] = _ApiClient["default"].convertToType(data['contactName'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _InternationalAddressReport["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _InternationalPhoneReport["default"].constructFromObject(data['phone']);
        }
      }

      return obj;
    }
  }]);

  return ContactInformationReport;
}();
/**
 * @member {String} contactName
 */


ContactInformationReport.prototype['contactName'] = undefined;
/**
 * @member {module:model/InternationalAddressReport} address
 */

ContactInformationReport.prototype['address'] = undefined;
/**
 * @member {module:model/InternationalPhoneReport} phone
 */

ContactInformationReport.prototype['phone'] = undefined;
var _default = ContactInformationReport;
exports["default"] = _default;