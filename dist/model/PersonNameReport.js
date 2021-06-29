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
 * The PersonNameReport model module.
 * @module model/PersonNameReport
 * @version 1.0.0
 */
var PersonNameReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PersonNameReport</code>.
   * @alias module:model/PersonNameReport
   */
  function PersonNameReport() {
    _classCallCheck(this, PersonNameReport);

    PersonNameReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PersonNameReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PersonNameReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonNameReport} obj Optional instance to populate.
     * @return {module:model/PersonNameReport} The populated <code>PersonNameReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PersonNameReport();

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('middleName')) {
          obj['middleName'] = _ApiClient["default"].convertToType(data['middleName'], 'String');
        }

        if (data.hasOwnProperty('suffix')) {
          obj['suffix'] = _ApiClient["default"].convertToType(data['suffix'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PersonNameReport;
}();
/**
 * @member {String} lastName
 */


PersonNameReport.prototype['lastName'] = undefined;
/**
 * @member {String} firstName
 */

PersonNameReport.prototype['firstName'] = undefined;
/**
 * @member {String} middleName
 */

PersonNameReport.prototype['middleName'] = undefined;
/**
 * @member {String} suffix
 */

PersonNameReport.prototype['suffix'] = undefined;
var _default = PersonNameReport;
exports["default"] = _default;