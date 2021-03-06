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
import InternationalAddressReport from './InternationalAddressReport';

/**
 * The EmployerReport model module.
 * @module model/EmployerReport
 * @version 1.0.3
 */
class EmployerReport {
    /**
     * Constructs a new <code>EmployerReport</code>.
     * @alias module:model/EmployerReport
     */
    constructor() { 
        
        EmployerReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmployerReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployerReport} obj Optional instance to populate.
     * @return {module:model/EmployerReport} The populated <code>EmployerReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmployerReport();

            if (data.hasOwnProperty('employerName')) {
                obj['employerName'] = ApiClient.convertToType(data['employerName'], 'String');
            }
            if (data.hasOwnProperty('employeeTitle')) {
                obj['employeeTitle'] = ApiClient.convertToType(data['employeeTitle'], 'String');
            }
            if (data.hasOwnProperty('currentEmployer')) {
                obj['currentEmployer'] = ApiClient.convertToType(data['currentEmployer'], 'Boolean');
            }
            if (data.hasOwnProperty('ordinal')) {
                obj['ordinal'] = ApiClient.convertToType(data['ordinal'], 'Number');
            }
            if (data.hasOwnProperty('dateOfEmployment')) {
                obj['dateOfEmployment'] = ApiClient.convertToType(data['dateOfEmployment'], 'Date');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = InternationalAddressReport.constructFromObject(data['address']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} employerName
 */
EmployerReport.prototype['employerName'] = undefined;

/**
 * @member {String} employeeTitle
 */
EmployerReport.prototype['employeeTitle'] = undefined;

/**
 * @member {Boolean} currentEmployer
 */
EmployerReport.prototype['currentEmployer'] = undefined;

/**
 * @member {Number} ordinal
 */
EmployerReport.prototype['ordinal'] = undefined;

/**
 * @member {Date} dateOfEmployment
 */
EmployerReport.prototype['dateOfEmployment'] = undefined;

/**
 * @member {module:model/InternationalAddressReport} address
 */
EmployerReport.prototype['address'] = undefined;






export default EmployerReport;

