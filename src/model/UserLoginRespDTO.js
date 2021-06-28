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
 * The UserLoginRespDTO model module.
 * @module model/UserLoginRespDTO
 * @version 1.0.1
 */
class UserLoginRespDTO {
    /**
     * Constructs a new <code>UserLoginRespDTO</code>.
     * @alias module:model/UserLoginRespDTO
     */
    constructor() { 
        
        UserLoginRespDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserLoginRespDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserLoginRespDTO} obj Optional instance to populate.
     * @return {module:model/UserLoginRespDTO} The populated <code>UserLoginRespDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserLoginRespDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('fname')) {
                obj['fname'] = ApiClient.convertToType(data['fname'], 'String');
            }
            if (data.hasOwnProperty('lname')) {
                obj['lname'] = ApiClient.convertToType(data['lname'], 'String');
            }
            if (data.hasOwnProperty('idpass')) {
                obj['idpass'] = ApiClient.convertToType(data['idpass'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('smsMsg')) {
                obj['smsMsg'] = ApiClient.convertToType(data['smsMsg'], 'Boolean');
            }
            if (data.hasOwnProperty('emailMsg')) {
                obj['emailMsg'] = ApiClient.convertToType(data['emailMsg'], 'Boolean');
            }
            if (data.hasOwnProperty('pushMsg')) {
                obj['pushMsg'] = ApiClient.convertToType(data['pushMsg'], 'Boolean');
            }
            if (data.hasOwnProperty('flags')) {
                obj['flags'] = ApiClient.convertToType(data['flags'], 'Number');
            }
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
 * @member {String} id
 */
UserLoginRespDTO.prototype['id'] = undefined;

/**
 * @member {String} email
 */
UserLoginRespDTO.prototype['email'] = undefined;

/**
 * @member {String} fname
 */
UserLoginRespDTO.prototype['fname'] = undefined;

/**
 * @member {String} lname
 */
UserLoginRespDTO.prototype['lname'] = undefined;

/**
 * @member {Boolean} idpass
 */
UserLoginRespDTO.prototype['idpass'] = undefined;

/**
 * @member {Date} createdAt
 */
UserLoginRespDTO.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
UserLoginRespDTO.prototype['updatedAt'] = undefined;

/**
 * @member {Boolean} smsMsg
 */
UserLoginRespDTO.prototype['smsMsg'] = undefined;

/**
 * @member {Boolean} emailMsg
 */
UserLoginRespDTO.prototype['emailMsg'] = undefined;

/**
 * @member {Boolean} pushMsg
 */
UserLoginRespDTO.prototype['pushMsg'] = undefined;

/**
 * @member {Number} flags
 */
UserLoginRespDTO.prototype['flags'] = undefined;

/**
 * @member {String} token
 */
UserLoginRespDTO.prototype['token'] = undefined;

/**
 * @member {Number} expires
 */
UserLoginRespDTO.prototype['expires'] = undefined;

/**
 * @member {String} refresh
 */
UserLoginRespDTO.prototype['refresh'] = undefined;






export default UserLoginRespDTO;

