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
 * The ProviderScore model module.
 * @module model/ProviderScore
 * @version 1.0.0
 */
class ProviderScore {
    /**
     * Constructs a new <code>ProviderScore</code>.
     * @alias module:model/ProviderScore
     */
    constructor() { 
        
        ProviderScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProviderScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProviderScore} obj Optional instance to populate.
     * @return {module:model/ProviderScore} The populated <code>ProviderScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProviderScore();

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
ProviderScore.prototype['score'] = undefined;

/**
 * @member {String} provider
 */
ProviderScore.prototype['provider'] = undefined;






export default ProviderScore;
