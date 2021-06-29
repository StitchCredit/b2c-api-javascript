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
 * The UserRespDTO model module.
 * @module model/UserRespDTO
 * @version 1.0.3
 */
class UserRespDTO {
    /**
     * Constructs a new <code>UserRespDTO</code>.
     * @alias module:model/UserRespDTO
     */
    constructor() { 
        
        UserRespDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserRespDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserRespDTO} obj Optional instance to populate.
     * @return {module:model/UserRespDTO} The populated <code>UserRespDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserRespDTO();

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
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
UserRespDTO.prototype['id'] = undefined;

/**
 * @member {String} email
 */
UserRespDTO.prototype['email'] = undefined;

/**
 * @member {String} fname
 */
UserRespDTO.prototype['fname'] = undefined;

/**
 * @member {String} lname
 */
UserRespDTO.prototype['lname'] = undefined;

/**
 * @member {Boolean} idpass
 */
UserRespDTO.prototype['idpass'] = undefined;

/**
 * @member {Date} createdAt
 */
UserRespDTO.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
UserRespDTO.prototype['updatedAt'] = undefined;

/**
 * @member {Boolean} smsMsg
 */
UserRespDTO.prototype['smsMsg'] = undefined;

/**
 * @member {Boolean} emailMsg
 */
UserRespDTO.prototype['emailMsg'] = undefined;

/**
 * @member {Boolean} pushMsg
 */
UserRespDTO.prototype['pushMsg'] = undefined;

/**
 * @member {Number} flags
 */
UserRespDTO.prototype['flags'] = undefined;






export default UserRespDTO;

