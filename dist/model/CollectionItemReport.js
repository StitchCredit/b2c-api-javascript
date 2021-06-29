"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MoneyReport = _interopRequireDefault(require("./MoneyReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CollectionItemReport model module.
 * @module model/CollectionItemReport
 * @version 1.0.0
 */
var CollectionItemReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CollectionItemReport</code>.
   * @alias module:model/CollectionItemReport
   */
  function CollectionItemReport() {
    _classCallCheck(this, CollectionItemReport);

    CollectionItemReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CollectionItemReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CollectionItemReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionItemReport} obj Optional instance to populate.
     * @return {module:model/CollectionItemReport} The populated <code>CollectionItemReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CollectionItemReport();

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('reportedDate')) {
          obj['reportedDate'] = _ApiClient["default"].convertToType(data['reportedDate'], 'Date');
        }

        if (data.hasOwnProperty('assignedDate')) {
          obj['assignedDate'] = _ApiClient["default"].convertToType(data['assignedDate'], 'Date');
        }

        if (data.hasOwnProperty('agencyClient')) {
          obj['agencyClient'] = _ApiClient["default"].convertToType(data['agencyClient'], 'String');
        }

        if (data.hasOwnProperty('orginalAmountOwed')) {
          obj['orginalAmountOwed'] = _MoneyReport["default"].constructFromObject(data['orginalAmountOwed']);
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('accountDesignatorCode')) {
          obj['accountDesignatorCode'] = _ApiClient["default"].convertToType(data['accountDesignatorCode'], 'String');
        }

        if (data.hasOwnProperty('balanceDate')) {
          obj['balanceDate'] = _ApiClient["default"].convertToType(data['balanceDate'], 'Date');
        }

        if (data.hasOwnProperty('statusDate')) {
          obj['statusDate'] = _ApiClient["default"].convertToType(data['statusDate'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _MoneyReport["default"].constructFromObject(data['amount']);
        }
      }

      return obj;
    }
  }]);

  return CollectionItemReport;
}();
/**
 * @member {module:model/CollectionItemReport.ProviderEnum} provider
 */


CollectionItemReport.prototype['provider'] = undefined;
/**
 * @member {String} id
 */

CollectionItemReport.prototype['id'] = undefined;
/**
 * @member {Date} reportedDate
 */

CollectionItemReport.prototype['reportedDate'] = undefined;
/**
 * @member {Date} assignedDate
 */

CollectionItemReport.prototype['assignedDate'] = undefined;
/**
 * @member {String} agencyClient
 */

CollectionItemReport.prototype['agencyClient'] = undefined;
/**
 * @member {module:model/MoneyReport} orginalAmountOwed
 */

CollectionItemReport.prototype['orginalAmountOwed'] = undefined;
/**
 * @member {String} accountNumber
 */

CollectionItemReport.prototype['accountNumber'] = undefined;
/**
 * @member {module:model/CollectionItemReport.AccountDesignatorCodeEnum} accountDesignatorCode
 */

CollectionItemReport.prototype['accountDesignatorCode'] = undefined;
/**
 * @member {Date} balanceDate
 */

CollectionItemReport.prototype['balanceDate'] = undefined;
/**
 * @member {Date} statusDate
 */

CollectionItemReport.prototype['statusDate'] = undefined;
/**
 * @member {module:model/CollectionItemReport.StatusEnum} status
 */

CollectionItemReport.prototype['status'] = undefined;
/**
 * @member {module:model/MoneyReport} amount
 */

CollectionItemReport.prototype['amount'] = undefined;
/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */

CollectionItemReport['ProviderEnum'] = {
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
/**
 * Allowed values for the <code>accountDesignatorCode</code> property.
 * @enum {String}
 * @readonly
 */

CollectionItemReport['AccountDesignatorCodeEnum'] = {
  /**
   * value: "AUTHORIZED_USER"
   * @const
   */
  "AUTHORIZED_USER": "AUTHORIZED_USER",

  /**
   * value: "CO_MAKER"
   * @const
   */
  "CO_MAKER": "CO_MAKER",

  /**
   * value: "DECEASED"
   * @const
   */
  "DECEASED": "DECEASED",

  /**
   * value: "INDIVIDUAL_ACCOUNT"
   * @const
   */
  "INDIVIDUAL_ACCOUNT": "INDIVIDUAL_ACCOUNT",

  /**
   * value: "JOINT_ACCOUNT"
   * @const
   */
  "JOINT_ACCOUNT": "JOINT_ACCOUNT",

  /**
   * value: "MAKER"
   * @const
   */
  "MAKER": "MAKER",

  /**
   * value: "ON_BEHALF_OF_ANOTHER_PERSON"
   * @const
   */
  "ON_BEHALF_OF_ANOTHER_PERSON": "ON_BEHALF_OF_ANOTHER_PERSON",

  /**
   * value: "SHARED"
   * @const
   */
  "SHARED": "SHARED",

  /**
   * value: "TERMINATED"
   * @const
   */
  "TERMINATED": "TERMINATED",

  /**
   * value: "UNDESIGNATED"
   * @const
   */
  "UNDESIGNATED": "UNDESIGNATED"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

CollectionItemReport['StatusEnum'] = {
  /**
   * value: "CLOSED"
   * @const
   */
  "CLOSED": "CLOSED",

  /**
   * value: "FROZEN"
   * @const
   */
  "FROZEN": "FROZEN",

  /**
   * value: "OPEN"
   * @const
   */
  "OPEN": "OPEN",

  /**
   * value: "REFINANCED"
   * @const
   */
  "REFINANCED": "REFINANCED",

  /**
   * value: "TRANSFERRED"
   * @const
   */
  "TRANSFERRED": "TRANSFERRED",

  /**
   * value: "ACCOUNT_DISPUTED"
   * @const
   */
  "ACCOUNT_DISPUTED": "ACCOUNT_DISPUTED",

  /**
   * value: "ADJUSTMENT"
   * @const
   */
  "ADJUSTMENT": "ADJUSTMENT",

  /**
   * value: "CHECKED"
   * @const
   */
  "CHECKED": "CHECKED",

  /**
   * value: "FINANCIAL_COUNSELOR"
   * @const
   */
  "FINANCIAL_COUNSELOR": "FINANCIAL_COUNSELOR",

  /**
   * value: "IN_BANKRUPTCY"
   * @const
   */
  "IN_BANKRUPTCY": "IN_BANKRUPTCY",

  /**
   * value: "NEW_LISTING"
   * @const
   */
  "NEW_LISTING": "NEW_LISTING",

  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER",

  /**
   * value: "PAID"
   * @const
   */
  "PAID": "PAID",

  /**
   * value: "PAYMENT"
   * @const
   */
  "PAYMENT": "PAYMENT",

  /**
   * value: "SETTLED"
   * @const
   */
  "SETTLED": "SETTLED",

  /**
   * value: "STATUS_UNKNOWN"
   * @const
   */
  "STATUS_UNKNOWN": "STATUS_UNKNOWN",

  /**
   * value: "SUPPRESS_COLLECTION"
   * @const
   */
  "SUPPRESS_COLLECTION": "SUPPRESS_COLLECTION",

  /**
   * value: "UNPAID"
   * @const
   */
  "UNPAID": "UNPAID",

  /**
   * value: "UNSETTLED"
   * @const
   */
  "UNSETTLED": "UNSETTLED",

  /**
   * value: "WAGE_EARNER"
   * @const
   */
  "WAGE_EARNER": "WAGE_EARNER"
};
var _default = CollectionItemReport;
exports["default"] = _default;