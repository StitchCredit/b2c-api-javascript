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
 * The AlertRespDTO model module.
 * @module model/AlertRespDTO
 * @version 1.0.0
 */
var AlertRespDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AlertRespDTO</code>.
   * @alias module:model/AlertRespDTO
   */
  function AlertRespDTO() {
    _classCallCheck(this, AlertRespDTO);

    AlertRespDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AlertRespDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AlertRespDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlertRespDTO} obj Optional instance to populate.
     * @return {module:model/AlertRespDTO} The populated <code>AlertRespDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AlertRespDTO();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('alertId')) {
          obj['alertId'] = _ApiClient["default"].convertToType(data['alertId'], 'String');
        }

        if (data.hasOwnProperty('alertType')) {
          obj['alertType'] = _ApiClient["default"].convertToType(data['alertType'], 'String');
        }

        if (data.hasOwnProperty('creationDate')) {
          obj['creationDate'] = _ApiClient["default"].convertToType(data['creationDate'], 'Date');
        }

        if (data.hasOwnProperty('dataSource')) {
          obj['dataSource'] = _ApiClient["default"].convertToType(data['dataSource'], 'String');
        }

        if (data.hasOwnProperty('dateReported')) {
          obj['dateReported'] = _ApiClient["default"].convertToType(data['dateReported'], 'Date');
        }

        if (data.hasOwnProperty('reportingFrequency')) {
          obj['reportingFrequency'] = _ApiClient["default"].convertToType(data['reportingFrequency'], 'String');
        }

        if (data.hasOwnProperty('institutionType')) {
          obj['institutionType'] = _ApiClient["default"].convertToType(data['institutionType'], 'String');
        }

        if (data.hasOwnProperty('institutionName')) {
          obj['institutionName'] = _ApiClient["default"].convertToType(data['institutionName'], 'String');
        }

        if (data.hasOwnProperty('inquiryIntent')) {
          obj['inquiryIntent'] = _ApiClient["default"].convertToType(data['inquiryIntent'], 'String');
        }

        if (data.hasOwnProperty('inquiryType')) {
          obj['inquiryType'] = _ApiClient["default"].convertToType(data['inquiryType'], 'String');
        }

        if (data.hasOwnProperty('endUserText')) {
          obj['endUserText'] = _ApiClient["default"].convertToType(data['endUserText'], 'String');
        }

        if (data.hasOwnProperty('institutionAddressLine1')) {
          obj['institutionAddressLine1'] = _ApiClient["default"].convertToType(data['institutionAddressLine1'], 'String');
        }

        if (data.hasOwnProperty('institutionAddressLine2')) {
          obj['institutionAddressLine2'] = _ApiClient["default"].convertToType(data['institutionAddressLine2'], 'String');
        }

        if (data.hasOwnProperty('institutionCity')) {
          obj['institutionCity'] = _ApiClient["default"].convertToType(data['institutionCity'], 'String');
        }

        if (data.hasOwnProperty('institutionState')) {
          obj['institutionState'] = _ApiClient["default"].convertToType(data['institutionState'], 'String');
        }

        if (data.hasOwnProperty('institutionPostalCode')) {
          obj['institutionPostalCode'] = _ApiClient["default"].convertToType(data['institutionPostalCode'], 'String');
        }

        if (data.hasOwnProperty('institutionPhoneNumber')) {
          obj['institutionPhoneNumber'] = _ApiClient["default"].convertToType(data['institutionPhoneNumber'], 'String');
        }

        if (data.hasOwnProperty('postedDuringMaintenancePeriod')) {
          obj['postedDuringMaintenancePeriod'] = _ApiClient["default"].convertToType(data['postedDuringMaintenancePeriod'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AlertRespDTO;
}();
/**
 * @member {String} id
 */


AlertRespDTO.prototype['id'] = undefined;
/**
 * @member {String} alertId
 */

AlertRespDTO.prototype['alertId'] = undefined;
/**
 * @member {String} alertType
 */

AlertRespDTO.prototype['alertType'] = undefined;
/**
 * @member {Date} creationDate
 */

AlertRespDTO.prototype['creationDate'] = undefined;
/**
 * @member {String} dataSource
 */

AlertRespDTO.prototype['dataSource'] = undefined;
/**
 * @member {Date} dateReported
 */

AlertRespDTO.prototype['dateReported'] = undefined;
/**
 * @member {String} reportingFrequency
 */

AlertRespDTO.prototype['reportingFrequency'] = undefined;
/**
 * @member {String} institutionType
 */

AlertRespDTO.prototype['institutionType'] = undefined;
/**
 * @member {String} institutionName
 */

AlertRespDTO.prototype['institutionName'] = undefined;
/**
 * @member {String} inquiryIntent
 */

AlertRespDTO.prototype['inquiryIntent'] = undefined;
/**
 * @member {String} inquiryType
 */

AlertRespDTO.prototype['inquiryType'] = undefined;
/**
 * @member {String} endUserText
 */

AlertRespDTO.prototype['endUserText'] = undefined;
/**
 * @member {String} institutionAddressLine1
 */

AlertRespDTO.prototype['institutionAddressLine1'] = undefined;
/**
 * @member {String} institutionAddressLine2
 */

AlertRespDTO.prototype['institutionAddressLine2'] = undefined;
/**
 * @member {String} institutionCity
 */

AlertRespDTO.prototype['institutionCity'] = undefined;
/**
 * @member {String} institutionState
 */

AlertRespDTO.prototype['institutionState'] = undefined;
/**
 * @member {String} institutionPostalCode
 */

AlertRespDTO.prototype['institutionPostalCode'] = undefined;
/**
 * @member {String} institutionPhoneNumber
 */

AlertRespDTO.prototype['institutionPhoneNumber'] = undefined;
/**
 * @member {Boolean} postedDuringMaintenancePeriod
 */

AlertRespDTO.prototype['postedDuringMaintenancePeriod'] = undefined;
var _default = AlertRespDTO;
exports["default"] = _default;