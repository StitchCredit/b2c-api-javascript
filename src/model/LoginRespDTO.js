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
 * The LoginRespDTO model module.
 * @module model/LoginRespDTO
 * @version 1.0.1
 */
class LoginRespDTO {
    /**
     * Constructs a new <code>LoginRespDTO</code>.
     * @alias module:model/LoginRespDTO
     */
    constructor() { 
        
        LoginRespDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginRespDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginRespDTO} obj Optional instance to populate.
     * @return {module:model/LoginRespDTO} The populated <code>LoginRespDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginRespDTO();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('expires')) {
                obj['expires'] = ApiClient.convertToType(data['expires'], 'Number');
            }
            if (data.hasOwnProperty('refresh')) {
                obj['refresh'] = ApiClient.convertToType(data['refresh'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
LoginRespDTO.prototype['token'] = undefined;

/**
 * @member {Number} expires
 */
LoginRespDTO.prototype['expires'] = undefined;

/**
 * @member {String} refresh
 */
LoginRespDTO.prototype['refresh'] = undefined;






export default LoginRespDTO;

