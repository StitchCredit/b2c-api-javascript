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
 * The ChangePasswordReqDTO model module.
 * @module model/ChangePasswordReqDTO
 * @version 1.0.0
 */
class ChangePasswordReqDTO {
    /**
     * Constructs a new <code>ChangePasswordReqDTO</code>.
     * @alias module:model/ChangePasswordReqDTO
     * @param username {String} 
     * @param oldPassword {String} 
     * @param newPassword {String} 
     */
    constructor(username, oldPassword, newPassword) { 
        
        ChangePasswordReqDTO.initialize(this, username, oldPassword, newPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, oldPassword, newPassword) { 
        obj['username'] = username;
        obj['oldPassword'] = oldPassword;
        obj['newPassword'] = newPassword;
    }

    /**
     * Constructs a <code>ChangePasswordReqDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangePasswordReqDTO} obj Optional instance to populate.
     * @return {module:model/ChangePasswordReqDTO} The populated <code>ChangePasswordReqDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangePasswordReqDTO();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('oldPassword')) {
                obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
ChangePasswordReqDTO.prototype['username'] = undefined;

/**
 * @member {String} oldPassword
 */
ChangePasswordReqDTO.prototype['oldPassword'] = undefined;

/**
 * @member {String} newPassword
 */
ChangePasswordReqDTO.prototype['newPassword'] = undefined;






export default ChangePasswordReqDTO;

