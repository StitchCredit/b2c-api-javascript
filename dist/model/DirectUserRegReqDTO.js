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
 * The DirectUserRegReqDTO model module.
 * @module model/DirectUserRegReqDTO
 * @version 1.0.0
 */
var DirectUserRegReqDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DirectUserRegReqDTO</code>.
   * @alias module:model/DirectUserRegReqDTO
   * @param email {String} 
   * @param fname {String} 
   * @param lname {String} 
   */
  function DirectUserRegReqDTO(email, fname, lname) {
    _classCallCheck(this, DirectUserRegReqDTO);

    DirectUserRegReqDTO.initialize(this, email, fname, lname);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DirectUserRegReqDTO, null, [{
    key: "initialize",
    value: function initialize(obj, email, fname, lname) {
      obj['email'] = email;
      obj['fname'] = fname;
      obj['lname'] = lname;
    }
    /**
     * Constructs a <code>DirectUserRegReqDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectUserRegReqDTO} obj Optional instance to populate.
     * @return {module:model/DirectUserRegReqDTO} The populated <code>DirectUserRegReqDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DirectUserRegReqDTO();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('mobile')) {
          obj['mobile'] = _ApiClient["default"].convertToType(data['mobile'], 'String');
        }

        if (data.hasOwnProperty('fname')) {
          obj['fname'] = _ApiClient["default"].convertToType(data['fname'], 'String');
        }

        if (data.hasOwnProperty('lname')) {
          obj['lname'] = _ApiClient["default"].convertToType(data['lname'], 'String');
        }

        if (data.hasOwnProperty('smsMsg')) {
          obj['smsMsg'] = _ApiClient["default"].convertToType(data['smsMsg'], 'Boolean');
        }

        if (data.hasOwnProperty('emailMsg')) {
          obj['emailMsg'] = _ApiClient["default"].convertToType(data['emailMsg'], 'Boolean');
        }

        if (data.hasOwnProperty('pushMsg')) {
          obj['pushMsg'] = _ApiClient["default"].convertToType(data['pushMsg'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DirectUserRegReqDTO;
}();
/**
 * @member {String} email
 */


DirectUserRegReqDTO.prototype['email'] = undefined;
/**
 * @member {String} mobile
 */

DirectUserRegReqDTO.prototype['mobile'] = undefined;
/**
 * @member {String} fname
 */

DirectUserRegReqDTO.prototype['fname'] = undefined;
/**
 * @member {String} lname
 */

DirectUserRegReqDTO.prototype['lname'] = undefined;
/**
 * @member {Boolean} smsMsg
 */

DirectUserRegReqDTO.prototype['smsMsg'] = undefined;
/**
 * @member {Boolean} emailMsg
 */

DirectUserRegReqDTO.prototype['emailMsg'] = undefined;
/**
 * @member {Boolean} pushMsg
 */

DirectUserRegReqDTO.prototype['pushMsg'] = undefined;
var _default = DirectUserRegReqDTO;
exports["default"] = _default;