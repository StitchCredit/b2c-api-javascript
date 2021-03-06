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
 * The CreditScoreLoanRiskRangeReport model module.
 * @module model/CreditScoreLoanRiskRangeReport
 * @version 1.0.3
 */
class CreditScoreLoanRiskRangeReport {
    /**
     * Constructs a new <code>CreditScoreLoanRiskRangeReport</code>.
     * @alias module:model/CreditScoreLoanRiskRangeReport
     */
    constructor() { 
        
        CreditScoreLoanRiskRangeReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditScoreLoanRiskRangeReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditScoreLoanRiskRangeReport} obj Optional instance to populate.
     * @return {module:model/CreditScoreLoanRiskRangeReport} The populated <code>CreditScoreLoanRiskRangeReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditScoreLoanRiskRangeReport();

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
CreditScoreLoanRiskRangeReport.prototype['low'] = undefined;

/**
 * @member {Number} high
 */
CreditScoreLoanRiskRangeReport.prototype['high'] = undefined;

/**
 * @member {String} name
 */
CreditScoreLoanRiskRangeReport.prototype['name'] = undefined;






export default CreditScoreLoanRiskRangeReport;

