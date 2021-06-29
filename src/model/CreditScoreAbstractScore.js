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
 * The CreditScoreAbstractScore model module.
 * @module model/CreditScoreAbstractScore
 * @version 1.0.0
 */
class CreditScoreAbstractScore {
    /**
     * Constructs a new <code>CreditScoreAbstractScore</code>.
     * @alias module:model/CreditScoreAbstractScore
     */
    constructor() { 
        
        CreditScoreAbstractScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditScoreAbstractScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreAbstractScore} obj Optional instance to populate.
     * @return {module:model/CreditScoreAbstractScore} The populated <code>CreditScoreAbstractScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditScoreAbstractScore();

            if (data.hasOwnProperty('generatedDate')) {
                obj['generatedDate'] = ApiClient.convertToType(data['generatedDate'], 'Date');
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
 * @member {Date} generatedDate
 */
CreditScoreAbstractScore.prototype['generatedDate'] = undefined;

/**
 * @member {module:model/CreditScoreAbstractScore.ScoreTypeEnum} scoreType
 */
CreditScoreAbstractScore.prototype['scoreType'] = undefined;

/**
 * @member {String} id
 */
CreditScoreAbstractScore.prototype['id'] = undefined;

/**
 * @member {String} creditReportId
 */
CreditScoreAbstractScore.prototype['creditReportId'] = undefined;





/**
 * Allowed values for the <code>scoreType</code> property.
 * @enum {String}
 * @readonly
 */
CreditScoreAbstractScore['ScoreTypeEnum'] = {

    /**
     * value: "US_EFX"
     * @const
     */
    "EFX": "US_EFX",

    /**
     * value: "US_3B"
     * @const
     */
    "3B": "US_3B"
};



export default CreditScoreAbstractScore;

