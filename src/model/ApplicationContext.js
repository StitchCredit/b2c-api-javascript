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
import ApplicationContextClassLoader from './ApplicationContextClassLoader';
import Environment from './Environment';

/**
 * The ApplicationContext model module.
 * @module model/ApplicationContext
 * @version 1.0.0
 */
class ApplicationContext {
    /**
     * Constructs a new <code>ApplicationContext</code>.
     * @alias module:model/ApplicationContext
     */
    constructor() { 
        
        ApplicationContext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationContext} obj Optional instance to populate.
     * @return {module:model/ApplicationContext} The populated <code>ApplicationContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationContext();

            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApplicationContext.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('autowireCapableBeanFactory')) {
                obj['autowireCapableBeanFactory'] = ApiClient.convertToType(data['autowireCapableBeanFactory'], Object);
            }
            if (data.hasOwnProperty('startupDate')) {
                obj['startupDate'] = ApiClient.convertToType(data['startupDate'], 'Number');
            }
            if (data.hasOwnProperty('applicationName')) {
                obj['applicationName'] = ApiClient.convertToType(data['applicationName'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = Environment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('beanDefinitionCount')) {
                obj['beanDefinitionCount'] = ApiClient.convertToType(data['beanDefinitionCount'], 'Number');
            }
            if (data.hasOwnProperty('beanDefinitionNames')) {
                obj['beanDefinitionNames'] = ApiClient.convertToType(data['beanDefinitionNames'], ['String']);
            }
            if (data.hasOwnProperty('parentBeanFactory')) {
                obj['parentBeanFactory'] = ApiClient.convertToType(data['parentBeanFactory'], Object);
            }
            if (data.hasOwnProperty('classLoader')) {
                obj['classLoader'] = ApplicationContextClassLoader.constructFromObject(data['classLoader']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ApplicationContext} parent
 */
ApplicationContext.prototype['parent'] = undefined;

/**
 * @member {String} id
 */
ApplicationContext.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
ApplicationContext.prototype['displayName'] = undefined;

/**
 * @member {Object} autowireCapableBeanFactory
 */
ApplicationContext.prototype['autowireCapableBeanFactory'] = undefined;

/**
 * @member {Number} startupDate
 */
ApplicationContext.prototype['startupDate'] = undefined;

/**
 * @member {String} applicationName
 */
ApplicationContext.prototype['applicationName'] = undefined;

/**
 * @member {module:model/Environment} environment
 */
ApplicationContext.prototype['environment'] = undefined;

/**
 * @member {Number} beanDefinitionCount
 */
ApplicationContext.prototype['beanDefinitionCount'] = undefined;

/**
 * @member {Array.<String>} beanDefinitionNames
 */
ApplicationContext.prototype['beanDefinitionNames'] = undefined;

/**
 * @member {Object} parentBeanFactory
 */
ApplicationContext.prototype['parentBeanFactory'] = undefined;

/**
 * @member {module:model/ApplicationContextClassLoader} classLoader
 */
ApplicationContext.prototype['classLoader'] = undefined;






export default ApplicationContext;

