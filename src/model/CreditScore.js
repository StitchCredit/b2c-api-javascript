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
 * The CreditScore model module.
 * @module model/CreditScore
 * @version 1.0.0
 */
class CreditScore {
    /**
     * Constructs a new <code>CreditScore</code>.
     * @alias module:model/CreditScore
     */
    constructor() { 
        
        CreditScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScore} obj Optional instance to populate.
     * @return {module:model/CreditScore} The populated <code>CreditScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditScore();

            if (data.hasOwnProperty('generatedDate')) {
                obj['generatedDate'] = ApiClient.convertToType(data['generatedDate'], 'Number');
            }
            if (data.hasOwnProperty('scoreType')) {
                obj['scoreType'] = ApiClient.convertToType(data['scoreType'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('creditReportId')) {
                obj['creditReportId'] = ApiClient.convertToType(data['creditReportId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} generatedDate
 */
CreditScore.prototype['generatedDate'] = undefined;

/**
 * @member {String} scoreType
 */
CreditScore.prototype['scoreType'] = undefined;

/**
 * @member {String} id
 */
CreditScore.prototype['id'] = undefined;

/**
 * @member {String} creditReportId
 */
CreditScore.prototype['creditReportId'] = undefined;






export default CreditScore;
