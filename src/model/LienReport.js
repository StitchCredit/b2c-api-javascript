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
import MoneyReport from './MoneyReport';

/**
 * The LienReport model module.
 * @module model/LienReport
 * @version 1.0.0
 */
class LienReport {
    /**
     * Constructs a new <code>LienReport</code>.
     * @alias module:model/LienReport
     */
    constructor() { 
        
        LienReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LienReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LienReport} obj Optional instance to populate.
     * @return {module:model/LienReport} The populated <code>LienReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LienReport();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('filedDate')) {
                obj['filedDate'] = ApiClient.convertToType(data['filedDate'], 'Date');
            }
            if (data.hasOwnProperty('reportedDate')) {
                obj['reportedDate'] = ApiClient.convertToType(data['reportedDate'], 'Date');
            }
            if (data.hasOwnProperty('courtName')) {
                obj['courtName'] = ApiClient.convertToType(data['courtName'], 'String');
            }
            if (data.hasOwnProperty('caseDocumentNumber')) {
                obj['caseDocumentNumber'] = ApiClient.convertToType(data['caseDocumentNumber'], 'String');
            }
            if (data.hasOwnProperty('lienAmount')) {
                obj['lienAmount'] = MoneyReport.constructFromObject(data['lienAmount']);
            }
            if (data.hasOwnProperty('verifiedDate')) {
                obj['verifiedDate'] = ApiClient.convertToType(data['verifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
LienReport.prototype['id'] = undefined;

/**
 * @member {Date} filedDate
 */
LienReport.prototype['filedDate'] = undefined;

/**
 * @member {Date} reportedDate
 */
LienReport.prototype['reportedDate'] = undefined;

/**
 * @member {String} courtName
 */
LienReport.prototype['courtName'] = undefined;

/**
 * @member {String} caseDocumentNumber
 */
LienReport.prototype['caseDocumentNumber'] = undefined;

/**
 * @member {module:model/MoneyReport} lienAmount
 */
LienReport.prototype['lienAmount'] = undefined;

/**
 * @member {Date} verifiedDate
 */
LienReport.prototype['verifiedDate'] = undefined;

/**
 * @member {String} status
 */
LienReport.prototype['status'] = undefined;






export default LienReport;

