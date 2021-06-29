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
 * The UserLoginRespDTO model module.
 * @module model/UserLoginRespDTO
 * @version 1.0.0
 */
var UserLoginRespDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserLoginRespDTO</code>.
   * @alias module:model/UserLoginRespDTO
   */
  function UserLoginRespDTO() {
    _classCallCheck(this, UserLoginRespDTO);

    UserLoginRespDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserLoginRespDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserLoginRespDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserLoginRespDTO} obj Optional instance to populate.
     * @return {module:model/UserLoginRespDTO} The populated <code>UserLoginRespDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserLoginRespDTO();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('fname')) {
          obj['fname'] = _ApiClient["default"].convertToType(data['fname'], 'String');
        }

        if (data.hasOwnProperty('lname')) {
          obj['lname'] = _ApiClient["default"].convertToType(data['lname'], 'String');
        }

        if (data.hasOwnProperty('idpass')) {
          obj['idpass'] = _ApiClient["default"].convertToType(data['idpass'], 'Boolean');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'Date');
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

        if (data.hasOwnProperty('flags')) {
          obj['flags'] = _ApiClient["default"].convertToType(data['flags'], 'Number');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('expires')) {
          obj['expires'] = _ApiClient["default"].convertToType(data['expires'], 'Number');
        }

        if (data.hasOwnProperty('refresh')) {
          obj['refresh'] = _ApiClient["default"].convertToType(data['refresh'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserLoginRespDTO;
}();
/**
 * @member {String} id
 */


UserLoginRespDTO.prototype['id'] = undefined;
/**
 * @member {String} email
 */

UserLoginRespDTO.prototype['email'] = undefined;
/**
 * @member {String} fname
 */

UserLoginRespDTO.prototype['fname'] = undefined;
/**
 * @member {String} lname
 */

UserLoginRespDTO.prototype['lname'] = undefined;
/**
 * @member {Boolean} idpass
 */

UserLoginRespDTO.prototype['idpass'] = undefined;
/**
 * @member {Date} createdAt
 */

UserLoginRespDTO.prototype['createdAt'] = undefined;
/**
 * @member {Date} updatedAt
 */

UserLoginRespDTO.prototype['updatedAt'] = undefined;
/**
 * @member {Boolean} smsMsg
 */

UserLoginRespDTO.prototype['smsMsg'] = undefined;
/**
 * @member {Boolean} emailMsg
 */

UserLoginRespDTO.prototype['emailMsg'] = undefined;
/**
 * @member {Boolean} pushMsg
 */

UserLoginRespDTO.prototype['pushMsg'] = undefined;
/**
 * @member {Number} flags
 */

UserLoginRespDTO.prototype['flags'] = undefined;
/**
 * @member {String} token
 */

UserLoginRespDTO.prototype['token'] = undefined;
/**
 * @member {Number} expires
 */

UserLoginRespDTO.prototype['expires'] = undefined;
/**
 * @member {String} refresh
 */

UserLoginRespDTO.prototype['refresh'] = undefined;
var _default = UserLoginRespDTO;
exports["default"] = _default;