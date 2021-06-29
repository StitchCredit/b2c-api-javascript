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
 * The DirectChangeMobileReqDTO model module.
 * @module model/DirectChangeMobileReqDTO
 * @version 1.0.0
 */
var DirectChangeMobileReqDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DirectChangeMobileReqDTO</code>.
   * @alias module:model/DirectChangeMobileReqDTO
   */
  function DirectChangeMobileReqDTO() {
    _classCallCheck(this, DirectChangeMobileReqDTO);

    DirectChangeMobileReqDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DirectChangeMobileReqDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DirectChangeMobileReqDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectChangeMobileReqDTO} obj Optional instance to populate.
     * @return {module:model/DirectChangeMobileReqDTO} The populated <code>DirectChangeMobileReqDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DirectChangeMobileReqDTO();

        if (data.hasOwnProperty('mobile')) {
          obj['mobile'] = _ApiClient["default"].convertToType(data['mobile'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DirectChangeMobileReqDTO;
}();
/**
 * @member {String} mobile
 */


DirectChangeMobileReqDTO.prototype['mobile'] = undefined;
var _default = DirectChangeMobileReqDTO;
exports["default"] = _default;