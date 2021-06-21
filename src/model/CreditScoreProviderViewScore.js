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
import CreditScoreLoanRiskRangeScore from './CreditScoreLoanRiskRangeScore';
import CreditScoreRangeScore from './CreditScoreRangeScore';
import CreditScoreReasonScore from './CreditScoreReasonScore';

/**
 * The CreditScoreProviderViewScore model module.
 * @module model/CreditScoreProviderViewScore
 * @version 1.0.0
 */
class CreditScoreProviderViewScore {
    /**
     * Constructs a new <code>CreditScoreProviderViewScore</code>.
     * @alias module:model/CreditScoreProviderViewScore
     */
    constructor() { 
        
        CreditScoreProviderViewScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditScoreProviderViewScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreProviderViewScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreProviderViewScore} The populated <code>CreditScoreProviderViewScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditScoreProviderViewScore();

            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('scoreRanges')) {
                obj['scoreRanges'] = ApiClient.convertToType(data['scoreRanges'], [CreditScoreRangeScore]);
            }
            if (data.hasOwnProperty('loanRiskRanges')) {
                obj['loanRiskRanges'] = ApiClient.convertToType(data['loanRiskRanges'], [CreditScoreLoanRiskRangeScore]);
            }
            if (data.hasOwnProperty('scoreReasons')) {
                obj['scoreReasons'] = ApiClient.convertToType(data['scoreReasons'], [CreditScoreReasonScore]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreditScoreProviderViewScore.ProviderEnum} provider
 */
CreditScoreProviderViewScore.prototype['provider'] = undefined;

/**
 * @member {Number} score
 */
CreditScoreProviderViewScore.prototype['score'] = undefined;

/**
 * @member {Array.<module:model/CreditScoreRangeScore>} scoreRanges
 */
CreditScoreProviderViewScore.prototype['scoreRanges'] = undefined;

/**
 * @member {Array.<module:model/CreditScoreLoanRiskRangeScore>} loanRiskRanges
 */
CreditScoreProviderViewScore.prototype['loanRiskRanges'] = undefined;

/**
 * @member {Array.<module:model/CreditScoreReasonScore>} scoreReasons
 */
CreditScoreProviderViewScore.prototype['scoreReasons'] = undefined;





/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
CreditScoreProviderViewScore['ProviderEnum'] = {

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



export default CreditScoreProviderViewScore;
