/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1ClaimSource } from './v1ClaimSource';

/**
* PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
*/
export class V1PodResourceClaim {
    /**
    * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
    */
    'name': string;
    'source'?: V1ClaimSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "V1ClaimSource"
        }    ];

    static getAttributeTypeMap() {
        return V1PodResourceClaim.attributeTypeMap;
    }
}

