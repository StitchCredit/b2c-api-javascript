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
 * The CodeDescriptionReport model module.
 * @module model/CodeDescriptionReport
 * @version 1.0.1
 */
class CodeDescriptionReport {
    /**
     * Constructs a new <code>CodeDescriptionReport</code>.
     * @alias module:model/CodeDescriptionReport
     */
    constructor() { 
        
        CodeDescriptionReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CodeDescriptionReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeDescriptionReport} obj Optional instance to populate.
     * @return {module:model/CodeDescriptionReport} The populated <code>CodeDescriptionReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeDescriptionReport();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
CodeDescriptionReport.prototype['code'] = undefined;

/**
 * @member {String} description
 */
CodeDescriptionReport.prototype['description'] = undefined;






export default CodeDescriptionReport;

