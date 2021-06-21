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

/**
 * The CreditScoreHistoryProviderViewScore model module.
 * @module model/CreditScoreHistoryProviderViewScore
 * @version 1.0.0
 */
class CreditScoreHistoryProviderViewScore {
    /**
     * Constructs a new <code>CreditScoreHistoryProviderViewScore</code>.
     * @alias module:model/CreditScoreHistoryProviderViewScore
     */
    constructor() { 
        
        CreditScoreHistoryProviderViewScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditScoreHistoryProviderViewScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreHistoryProviderViewScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreHistoryProviderViewScore} The populated <code>CreditScoreHistoryProviderViewScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditScoreHistoryProviderViewScore();

            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} score
 */
CreditScoreHistoryProviderViewScore.prototype['score'] = undefined;

/**
 * @member {module:model/CreditScoreHistoryProviderViewScore.ProviderEnum} provider
 */
CreditScoreHistoryProviderViewScore.prototype['provider'] = undefined;





/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
CreditScoreHistoryProviderViewScore['ProviderEnum'] = {

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



export default CreditScoreHistoryProviderViewScore;
