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
 * The IdentityReqDTO model module.
 * @module model/IdentityReqDTO
 * @version 1.0.0
 */
class IdentityReqDTO {
    /**
     * Constructs a new <code>IdentityReqDTO</code>.
     * @alias module:model/IdentityReqDTO
     * @param ssn {String} 
     * @param street1 {String} 
     * @param city {String} 
     * @param state {String} 
     * @param zip {String} 
     */
    constructor(ssn, street1, city, state, zip) { 
        
        IdentityReqDTO.initialize(this, ssn, street1, city, state, zip);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ssn, street1, city, state, zip) { 
        obj['ssn'] = ssn;
        obj['street1'] = street1;
        obj['city'] = city;
        obj['state'] = state;
        obj['zip'] = zip;
    }

    /**
     * Constructs a <code>IdentityReqDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityReqDTO} obj Optional instance to populate.
     * @return {module:model/IdentityReqDTO} The populated <code>IdentityReqDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityReqDTO();

            if (data.hasOwnProperty('dob')) {
                obj['dob'] = ApiClient.convertToType(data['dob'], 'Date');
            }
            if (data.hasOwnProperty('mobile')) {
                obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
            }
            if (data.hasOwnProperty('ssn')) {
                obj['ssn'] = ApiClient.convertToType(data['ssn'], 'String');
            }
            if (data.hasOwnProperty('street1')) {
                obj['street1'] = ApiClient.convertToType(data['street1'], 'String');
            }
            if (data.hasOwnProperty('street2')) {
                obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} dob
 */
IdentityReqDTO.prototype['dob'] = undefined;

/**
 * @member {String} mobile
 */
IdentityReqDTO.prototype['mobile'] = undefined;

/**
 * @member {String} ssn
 */
IdentityReqDTO.prototype['ssn'] = undefined;

/**
 * @member {String} street1
 */
IdentityReqDTO.prototype['street1'] = undefined;

/**
 * @member {String} street2
 */
IdentityReqDTO.prototype['street2'] = undefined;

/**
 * @member {String} city
 */
IdentityReqDTO.prototype['city'] = undefined;

/**
 * @member {String} state
 */
IdentityReqDTO.prototype['state'] = undefined;

/**
 * @member {String} zip
 */
IdentityReqDTO.prototype['zip'] = undefined;

/**
 * @member {String} country
 */
IdentityReqDTO.prototype['country'] = undefined;






export default IdentityReqDTO;

