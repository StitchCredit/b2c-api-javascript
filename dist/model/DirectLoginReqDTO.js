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
 * The DirectLoginReqDTO model module.
 * @module model/DirectLoginReqDTO
 * @version 1.0.0
 */
var DirectLoginReqDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DirectLoginReqDTO</code>.
   * @alias module:model/DirectLoginReqDTO
   * @param apikey {String} 
   * @param secret {String} 
   */
  function DirectLoginReqDTO(apikey, secret) {
    _classCallCheck(this, DirectLoginReqDTO);

    DirectLoginReqDTO.initialize(this, apikey, secret);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DirectLoginReqDTO, null, [{
    key: "initialize",
    value: function initialize(obj, apikey, secret) {
      obj['apikey'] = apikey;
      obj['secret'] = secret;
    }
    /**
     * Constructs a <code>DirectLoginReqDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectLoginReqDTO} obj Optional instance to populate.
     * @return {module:model/DirectLoginReqDTO} The populated <code>DirectLoginReqDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DirectLoginReqDTO();

        if (data.hasOwnProperty('apikey')) {
          obj['apikey'] = _ApiClient["default"].convertToType(data['apikey'], 'String');
        }

        if (data.hasOwnProperty('secret')) {
          obj['secret'] = _ApiClient["default"].convertToType(data['secret'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DirectLoginReqDTO;
}();
/**
 * @member {String} apikey
 */


DirectLoginReqDTO.prototype['apikey'] = undefined;
/**
 * @member {String} secret
 */

DirectLoginReqDTO.prototype['secret'] = undefined;
var _default = DirectLoginReqDTO;
exports["default"] = _default;