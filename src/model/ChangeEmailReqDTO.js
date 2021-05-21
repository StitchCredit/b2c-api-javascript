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
 * The ChangeEmailReqDTO model module.
 * @module model/ChangeEmailReqDTO
 * @version 1.0.0
 */
class ChangeEmailReqDTO {
    /**
     * Constructs a new <code>ChangeEmailReqDTO</code>.
     * @alias module:model/ChangeEmailReqDTO
     * @param email {String} 
     * @param recoveryAnswer {String} 
     * @param token {String} 
     */
    constructor(email, recoveryAnswer, token) { 
        
        ChangeEmailReqDTO.initialize(this, email, recoveryAnswer, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, recoveryAnswer, token) { 
        obj['email'] = email;
        obj['recoveryAnswer'] = recoveryAnswer;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>ChangeEmailReqDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeEmailReqDTO} obj Optional instance to populate.
     * @return {module:model/ChangeEmailReqDTO} The populated <code>ChangeEmailReqDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeEmailReqDTO();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('recoveryAnswer')) {
                obj['recoveryAnswer'] = ApiClient.convertToType(data['recoveryAnswer'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
ChangeEmailReqDTO.prototype['email'] = undefined;

/**
 * @member {String} recoveryAnswer
 */
ChangeEmailReqDTO.prototype['recoveryAnswer'] = undefined;

/**
 * @member {String} token
 */
ChangeEmailReqDTO.prototype['token'] = undefined;






export default ChangeEmailReqDTO;

