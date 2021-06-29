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
 * The CreditScoreRangeScore model module.
 * @module model/CreditScoreRangeScore
 * @version 1.0.3
 */
class CreditScoreRangeScore {
    /**
     * Constructs a new <code>CreditScoreRangeScore</code>.
     * @alias module:model/CreditScoreRangeScore
     */
    constructor() { 
        
        CreditScoreRangeScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditScoreRangeScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreRangeScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreRangeScore} The populated <code>CreditScoreRangeScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditScoreRangeScore();

            if (data.hasOwnProperty('low')) {
                obj['low'] = ApiClient.convertToType(data['low'], 'Number');
            }
            if (data.hasOwnProperty('high')) {
                obj['high'] = ApiClient.convertToType(data['high'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} low
 */
CreditScoreRangeScore.prototype['low'] = undefined;

/**
 * @member {Number} high
 */
CreditScoreRangeScore.prototype['high'] = undefined;

/**
 * @member {String} name
 */
CreditScoreRangeScore.prototype['name'] = undefined;






export default CreditScoreRangeScore;

