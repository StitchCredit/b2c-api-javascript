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
 * The TrendedDataYearReport model module.
 * @module model/TrendedDataYearReport
 * @version 1.0.3
 */
class TrendedDataYearReport {
    /**
     * Constructs a new <code>TrendedDataYearReport</code>.
     * @alias module:model/TrendedDataYearReport
     */
    constructor() { 
        
        TrendedDataYearReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TrendedDataYearReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrendedDataYearReport} obj Optional instance to populate.
     * @return {module:model/TrendedDataYearReport} The populated <code>TrendedDataYearReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrendedDataYearReport();

            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'String');
            }
            if (data.hasOwnProperty('monthData')) {
                obj['monthData'] = ApiClient.convertToType(data['monthData'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} year
 */
TrendedDataYearReport.prototype['year'] = undefined;

/**
 * @member {Array.<String>} monthData
 */
TrendedDataYearReport.prototype['monthData'] = undefined;






export default TrendedDataYearReport;

