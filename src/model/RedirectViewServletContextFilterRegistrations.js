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
 * The RedirectViewServletContextFilterRegistrations model module.
 * @module model/RedirectViewServletContextFilterRegistrations
 * @version 1.0.0
 */
class RedirectViewServletContextFilterRegistrations {
    /**
     * Constructs a new <code>RedirectViewServletContextFilterRegistrations</code>.
     * @alias module:model/RedirectViewServletContextFilterRegistrations
     */
    constructor() { 
        
        RedirectViewServletContextFilterRegistrations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RedirectViewServletContextFilterRegistrations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedirectViewServletContextFilterRegistrations} obj Optional instance to populate.
     * @return {module:model/RedirectViewServletContextFilterRegistrations} The populated <code>RedirectViewServletContextFilterRegistrations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedirectViewServletContextFilterRegistrations();

            if (data.hasOwnProperty('servletNameMappings')) {
                obj['servletNameMappings'] = ApiClient.convertToType(data['servletNameMappings'], ['String']);
            }
            if (data.hasOwnProperty('urlPatternMappings')) {
                obj['urlPatternMappings'] = ApiClient.convertToType(data['urlPatternMappings'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('className')) {
                obj['className'] = ApiClient.convertToType(data['className'], 'String');
            }
            if (data.hasOwnProperty('initParameters')) {
                obj['initParameters'] = ApiClient.convertToType(data['initParameters'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} servletNameMappings
 */
RedirectViewServletContextFilterRegistrations.prototype['servletNameMappings'] = undefined;

/**
 * @member {Array.<String>} urlPatternMappings
 */
RedirectViewServletContextFilterRegistrations.prototype['urlPatternMappings'] = undefined;

/**
 * @member {String} name
 */
RedirectViewServletContextFilterRegistrations.prototype['name'] = undefined;

/**
 * @member {String} className
 */
RedirectViewServletContextFilterRegistrations.prototype['className'] = undefined;

/**
 * @member {Object.<String, String>} initParameters
 */
RedirectViewServletContextFilterRegistrations.prototype['initParameters'] = undefined;






export default RedirectViewServletContextFilterRegistrations;

