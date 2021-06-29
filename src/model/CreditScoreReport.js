/**
 * StitchCredit API
 * StitchCredit API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreditScoreLoanRiskRangeReport from './CreditScoreLoanRiskRangeReport';
import CreditScoreRangeReport from './CreditScoreRangeReport';
import CreditScoreReasonReport from './CreditScoreReasonReport';

/**
 * The CreditScoreReport model module.
 * @module model/CreditScoreReport
 * @version 1.0.3
 */
class CreditScoreReport {
    /**
     * Constructs a new <code>CreditScoreReport</code>.
     * @alias module:model/CreditScoreReport
     */
    constructor() { 
        
        CreditScoreReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditScoreReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreReport} obj Optional instance to populate.
     * @return {module:model/CreditScoreReport} The populated <code>CreditScoreReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditScoreReport();

            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('scoreRanges')) {
                obj['scoreRanges'] = ApiClient.convertToType(data['scoreRanges'], [CreditScoreRangeReport]);
            }
            if (data.hasOwnProperty('loanRiskRanges')) {
                obj['loanRiskRanges'] = ApiClient.convertToType(data['loanRiskRanges'], [CreditScoreLoanRiskRangeReport]);
            }
            if (data.hasOwnProperty('scoreReasons')) {
                obj['scoreReasons'] = ApiClient.convertToType(data['scoreReasons'], [CreditScoreReasonReport]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} score
 */
CreditScoreReport.prototype['score'] = undefined;

/**
 * @member {module:model/CreditScoreReport.ProviderEnum} provider
 */
CreditScoreReport.prototype['provider'] = undefined;

/**
 * @member {Array.<module:model/CreditScoreRangeReport>} scoreRanges
 */
CreditScoreReport.prototype['scoreRanges'] = undefined;

/**
 * @member {Array.<module:model/CreditScoreLoanRiskRangeReport>} loanRiskRanges
 */
CreditScoreReport.prototype['loanRiskRanges'] = undefined;

/**
 * @member {Array.<module:model/CreditScoreReasonReport>} scoreReasons
 */
CreditScoreReport.prototype['scoreReasons'] = undefined;





/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
CreditScoreReport['ProviderEnum'] = {

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



export default CreditScoreReport;

