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
 * The DirectLoginReqDTO model module.
 * @module model/DirectLoginReqDTO
 * @version 1.0.0
 */
class DirectLoginReqDTO {
    /**
     * Constructs a new <code>DirectLoginReqDTO</code>.
     * @alias module:model/DirectLoginReqDTO
     * @param apikey {String} 
     * @param secret {String} 
     */
    constructor(apikey, secret) { 
        
        DirectLoginReqDTO.initialize(this, apikey, secret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apikey, secret) { 
        obj['apikey'] = apikey;
        obj['secret'] = secret;
    }

    /**
     * Constructs a <code>DirectLoginReqDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectLoginReqDTO} obj Optional instance to populate.
     * @return {module:model/DirectLoginReqDTO} The populated <code>DirectLoginReqDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DirectLoginReqDTO();

            if (data.hasOwnProperty('apikey')) {
                obj['apikey'] = ApiClient.convertToType(data['apikey'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} apikey
 */
DirectLoginReqDTO.prototype['apikey'] = undefined;

/**
 * @member {String} secret
 */
DirectLoginReqDTO.prototype['secret'] = undefined;






export default DirectLoginReqDTO;
