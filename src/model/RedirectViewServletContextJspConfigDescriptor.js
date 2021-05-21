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
import RedirectViewServletContextJspConfigDescriptorJspPropertyGroups from './RedirectViewServletContextJspConfigDescriptorJspPropertyGroups';
import RedirectViewServletContextJspConfigDescriptorTaglibs from './RedirectViewServletContextJspConfigDescriptorTaglibs';

/**
 * The RedirectViewServletContextJspConfigDescriptor model module.
 * @module model/RedirectViewServletContextJspConfigDescriptor
 * @version 1.0.0
 */
class RedirectViewServletContextJspConfigDescriptor {
    /**
     * Constructs a new <code>RedirectViewServletContextJspConfigDescriptor</code>.
     * @alias module:model/RedirectViewServletContextJspConfigDescriptor
     */
    constructor() { 
        
        RedirectViewServletContextJspConfigDescriptor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RedirectViewServletContextJspConfigDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedirectViewServletContextJspConfigDescriptor} obj Optional instance to populate.
     * @return {module:model/RedirectViewServletContextJspConfigDescriptor} The populated <code>RedirectViewServletContextJspConfigDescriptor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedirectViewServletContextJspConfigDescriptor();

            if (data.hasOwnProperty('jspPropertyGroups')) {
                obj['jspPropertyGroups'] = ApiClient.convertToType(data['jspPropertyGroups'], [RedirectViewServletContextJspConfigDescriptorJspPropertyGroups]);
            }
            if (data.hasOwnProperty('taglibs')) {
                obj['taglibs'] = ApiClient.convertToType(data['taglibs'], [RedirectViewServletContextJspConfigDescriptorTaglibs]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/RedirectViewServletContextJspConfigDescriptorJspPropertyGroups>} jspPropertyGroups
 */
RedirectViewServletContextJspConfigDescriptor.prototype['jspPropertyGroups'] = undefined;

/**
 * @member {Array.<module:model/RedirectViewServletContextJspConfigDescriptorTaglibs>} taglibs
 */
RedirectViewServletContextJspConfigDescriptor.prototype['taglibs'] = undefined;






export default RedirectViewServletContextJspConfigDescriptor;

