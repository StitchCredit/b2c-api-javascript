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
import TrendedDataYearReport from './TrendedDataYearReport';

/**
 * The TrendedDataReport model module.
 * @module model/TrendedDataReport
 * @version 1.0.3
 */
class TrendedDataReport {
    /**
     * Constructs a new <code>TrendedDataReport</code>.
     * @alias module:model/TrendedDataReport
     */
    constructor() { 
        
        TrendedDataReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TrendedDataReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrendedDataReport} obj Optional instance to populate.
     * @return {module:model/TrendedDataReport} The populated <code>TrendedDataReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrendedDataReport();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('years')) {
                obj['years'] = ApiClient.convertToType(data['years'], [TrendedDataYearReport]);
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
TrendedDataReport.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/TrendedDataYearReport>} years
 */
TrendedDataReport.prototype['years'] = undefined;

/**
 * @member {Array.<String>} labels
 */
TrendedDataReport.prototype['labels'] = undefined;






export default TrendedDataReport;

