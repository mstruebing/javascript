/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ObjectReference } from './V1ObjectReference';
import { HttpFile } from '../http/http';

/**
* Represents a StorageOS persistent volume resource.
*/
export class V1StorageOSPersistentVolumeSource {
    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
    */
    'fsType'?: string;
    /**
    * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef'?: V1ObjectReference;
    /**
    * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
    */
    'volumeName'?: string;
    /**
    * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
    */
    'volumeNamespace'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1ObjectReference",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeNamespace",
            "baseName": "volumeNamespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1StorageOSPersistentVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}
