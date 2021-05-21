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
import ApplicationContextClassLoaderParentUnnamedModule from './ApplicationContextClassLoaderParentUnnamedModule';
import ApplicationContextClassLoaderParentUnnamedModuleClassLoaderDefinedPackages from './ApplicationContextClassLoaderParentUnnamedModuleClassLoaderDefinedPackages';

/**
 * The ApplicationContextClassLoaderParent model module.
 * @module model/ApplicationContextClassLoaderParent
 * @version 1.0.0
 */
class ApplicationContextClassLoaderParent {
    /**
     * Constructs a new <code>ApplicationContextClassLoaderParent</code>.
     * @alias module:model/ApplicationContextClassLoaderParent
     */
    constructor() { 
        
        ApplicationContextClassLoaderParent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationContextClassLoaderParent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationContextClassLoaderParent} obj Optional instance to populate.
     * @return {module:model/ApplicationContextClassLoaderParent} The populated <code>ApplicationContextClassLoaderParent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationContextClassLoaderParent();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unnamedModule')) {
                obj['unnamedModule'] = ApplicationContextClassLoaderParentUnnamedModule.constructFromObject(data['unnamedModule']);
            }
            if (data.hasOwnProperty('defaultAssertionStatus')) {
                obj['defaultAssertionStatus'] = ApiClient.convertToType(data['defaultAssertionStatus'], 'Boolean');
            }
            if (data.hasOwnProperty('registeredAsParallelCapable')) {
                obj['registeredAsParallelCapable'] = ApiClient.convertToType(data['registeredAsParallelCapable'], 'Boolean');
            }
            if (data.hasOwnProperty('definedPackages')) {
                obj['definedPackages'] = ApiClient.convertToType(data['definedPackages'], [ApplicationContextClassLoaderParentUnnamedModuleClassLoaderDefinedPackages]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ApplicationContextClassLoaderParent.prototype['name'] = undefined;

/**
 * @member {module:model/ApplicationContextClassLoaderParentUnnamedModule} unnamedModule
 */
ApplicationContextClassLoaderParent.prototype['unnamedModule'] = undefined;

/**
 * @member {Boolean} defaultAssertionStatus
 */
ApplicationContextClassLoaderParent.prototype['defaultAssertionStatus'] = undefined;

/**
 * @member {Boolean} registeredAsParallelCapable
 */
ApplicationContextClassLoaderParent.prototype['registeredAsParallelCapable'] = undefined;

/**
 * @member {Array.<module:model/ApplicationContextClassLoaderParentUnnamedModuleClassLoaderDefinedPackages>} definedPackages
 */
ApplicationContextClassLoaderParent.prototype['definedPackages'] = undefined;






export default ApplicationContextClassLoaderParent;

