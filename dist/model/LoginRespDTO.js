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
 * The LoginRespDTO model module.
 * @module model/LoginRespDTO
 * @version 1.0.0
 */
var LoginRespDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoginRespDTO</code>.
   * @alias module:model/LoginRespDTO
   */
  function LoginRespDTO() {
    _classCallCheck(this, LoginRespDTO);

    LoginRespDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoginRespDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoginRespDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginRespDTO} obj Optional instance to populate.
     * @return {module:model/LoginRespDTO} The populated <code>LoginRespDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoginRespDTO();

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

  return LoginRespDTO;
}();
/**
 * @member {String} token
 */


LoginRespDTO.prototype['token'] = undefined;
/**
 * @member {Number} expires
 */

LoginRespDTO.prototype['expires'] = undefined;
/**
 * @member {String} refresh
 */

LoginRespDTO.prototype['refresh'] = undefined;
var _default = LoginRespDTO;
exports["default"] = _default;