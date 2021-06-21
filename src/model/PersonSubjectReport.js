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
import EmployerReport from './EmployerReport';
import InternationalAddressReport from './InternationalAddressReport';
import InternationalPhoneReport from './InternationalPhoneReport';
import PersonNameReport from './PersonNameReport';

/**
 * The PersonSubjectReport model module.
 * @module model/PersonSubjectReport
 * @version 1.0.0
 */
class PersonSubjectReport {
    /**
     * Constructs a new <code>PersonSubjectReport</code>.
     * @alias module:model/PersonSubjectReport
     */
    constructor() { 
        
        PersonSubjectReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonSubjectReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonSubjectReport} obj Optional instance to populate.
     * @return {module:model/PersonSubjectReport} The populated <code>PersonSubjectReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonSubjectReport();

            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('currentName')) {
                obj['currentName'] = PersonNameReport.constructFromObject(data['currentName']);
            }
            if (data.hasOwnProperty('aliases')) {
                obj['aliases'] = ApiClient.convertToType(data['aliases'], [PersonNameReport]);
            }
            if (data.hasOwnProperty('currentAddress')) {
                obj['currentAddress'] = InternationalAddressReport.constructFromObject(data['currentAddress']);
            }
            if (data.hasOwnProperty('previousAddresses')) {
                obj['previousAddresses'] = ApiClient.convertToType(data['previousAddresses'], [InternationalAddressReport]);
            }
            if (data.hasOwnProperty('homePhone')) {
                obj['homePhone'] = InternationalPhoneReport.constructFromObject(data['homePhone']);
            }
            if (data.hasOwnProperty('mobilePhone')) {
                obj['mobilePhone'] = InternationalPhoneReport.constructFromObject(data['mobilePhone']);
            }
            if (data.hasOwnProperty('nationalIdentifier')) {
                obj['nationalIdentifier'] = ApiClient.convertToType(data['nationalIdentifier'], 'String');
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'Date');
            }
            if (data.hasOwnProperty('dateOfDeath')) {
                obj['dateOfDeath'] = ApiClient.convertToType(data['dateOfDeath'], 'Date');
            }
            if (data.hasOwnProperty('employmentHistory')) {
                obj['employmentHistory'] = ApiClient.convertToType(data['employmentHistory'], [EmployerReport]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PersonSubjectReport.ProviderEnum} provider
 */
PersonSubjectReport.prototype['provider'] = undefined;

/**
 * @member {module:model/PersonNameReport} currentName
 */
PersonSubjectReport.prototype['currentName'] = undefined;

/**
 * @member {Array.<module:model/PersonNameReport>} aliases
 */
PersonSubjectReport.prototype['aliases'] = undefined;

/**
 * @member {module:model/InternationalAddressReport} currentAddress
 */
PersonSubjectReport.prototype['currentAddress'] = undefined;

/**
 * @member {Array.<module:model/InternationalAddressReport>} previousAddresses
 */
PersonSubjectReport.prototype['previousAddresses'] = undefined;

/**
 * @member {module:model/InternationalPhoneReport} homePhone
 */
PersonSubjectReport.prototype['homePhone'] = undefined;

/**
 * @member {module:model/InternationalPhoneReport} mobilePhone
 */
PersonSubjectReport.prototype['mobilePhone'] = undefined;

/**
 * @member {String} nationalIdentifier
 */
PersonSubjectReport.prototype['nationalIdentifier'] = undefined;

/**
 * @member {Date} dateOfBirth
 */
PersonSubjectReport.prototype['dateOfBirth'] = undefined;

/**
 * @member {Date} dateOfDeath
 */
PersonSubjectReport.prototype['dateOfDeath'] = undefined;

/**
 * @member {Array.<module:model/EmployerReport>} employmentHistory
 */
PersonSubjectReport.prototype['employmentHistory'] = undefined;





/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
PersonSubjectReport['ProviderEnum'] = {

    /**
     * value: "EFX"
     * @const
     */
    "EFX": "EFX",

    /**
     * value: "TU"
     * @const
     */
    "TU": "TU",

    /**
     * value: "EXP"
     * @const
     */
    "EXP": "EXP",

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"
};



export default PersonSubjectReport;

