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
 * The UserRespDTO model module.
 * @module model/UserRespDTO
 * @version 1.0.0
 */
var UserRespDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserRespDTO</code>.
   * @alias module:model/UserRespDTO
   */
  function UserRespDTO() {
    _classCallCheck(this, UserRespDTO);

    UserRespDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserRespDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserRespDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserRespDTO} obj Optional instance to populate.
     * @return {module:model/UserRespDTO} The populated <code>UserRespDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserRespDTO();

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
      }

      return obj;
    }
  }]);

  return UserRespDTO;
}();
/**
 * @member {String} id
 */


UserRespDTO.prototype['id'] = undefined;
/**
 * @member {String} email
 */

UserRespDTO.prototype['email'] = undefined;
/**
 * @member {String} fname
 */

UserRespDTO.prototype['fname'] = undefined;
/**
 * @member {String} lname
 */

UserRespDTO.prototype['lname'] = undefined;
/**
 * @member {Boolean} idpass
 */

UserRespDTO.prototype['idpass'] = undefined;
/**
 * @member {Date} createdAt
 */

UserRespDTO.prototype['createdAt'] = undefined;
/**
 * @member {Date} updatedAt
 */

UserRespDTO.prototype['updatedAt'] = undefined;
/**
 * @member {Boolean} smsMsg
 */

UserRespDTO.prototype['smsMsg'] = undefined;
/**
 * @member {Boolean} emailMsg
 */

UserRespDTO.prototype['emailMsg'] = undefined;
/**
 * @member {Boolean} pushMsg
 */

UserRespDTO.prototype['pushMsg'] = undefined;
/**
 * @member {Number} flags
 */

UserRespDTO.prototype['flags'] = undefined;
var _default = UserRespDTO;
exports["default"] = _default;