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
import ProviderView from './ProviderView';

/**
 * The LatestScore model module.
 * @module model/LatestScore
 * @version 1.0.0
 */
class LatestScore {
    /**
     * Constructs a new <code>LatestScore</code>.
     * @alias module:model/LatestScore
     */
    constructor() { 
        
        LatestScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LatestScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LatestScore} obj Optional instance to populate.
     * @return {module:model/LatestScore} The populated <code>LatestScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LatestScore();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('scoreType')) {
                obj['scoreType'] = ApiClient.convertToType(data['scoreType'], 'String');
            }
            if (data.hasOwnProperty('scoreModel')) {
                obj['scoreModel'] = ApiClient.convertToType(data['scoreModel'], 'String');
            }
            if (data.hasOwnProperty('generatedDate')) {
                obj['generatedDate'] = ApiClient.convertToType(data['generatedDate'], 'Number');
            }
            if (data.hasOwnProperty('providerViews')) {
                obj['providerViews'] = ApiClient.convertToType(data['providerViews'], [ProviderView]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
LatestScore.prototype['id'] = undefined;

/**
 * @member {String} scoreType
 */
LatestScore.prototype['scoreType'] = undefined;

/**
 * @member {String} scoreModel
 */
LatestScore.prototype['scoreModel'] = undefined;

/**
 * @member {Number} generatedDate
 */
LatestScore.prototype['generatedDate'] = undefined;

/**
 * @member {Array.<module:model/ProviderView>} providerViews
 */
LatestScore.prototype['providerViews'] = undefined;






export default LatestScore;
