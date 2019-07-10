import { NbAclOptions, NbAccessControl } from '../security.options';
/**
 * Common acl service.
 */
export declare class NbAclService {
    protected settings: NbAclOptions;
    private static readonly ANY_RESOURCE;
    private state;
    constructor(settings?: NbAclOptions);
    /**
     * Set/Reset ACL list
     * @param {NbAccessControl} list
     */
    setAccessControl(list: NbAccessControl): void;
    /**
     * Register a new role with a list of abilities (permission/resources combinations)
     * @param {string} role
     * @param {string} parent
     * @param {[permission: string]: string|string[]} abilities
     */
    register(role: string, parent?: string, abilities?: {
        [permission: string]: string | string[];
    }): void;
    /**
     * Allow a permission for specific resources to a role
     * @param {string} role
     * @param {string} permission
     * @param {string | string[]} resource
     */
    allow(role: string, permission: string, resource: string | string[]): void;
    /**
     * Check whether the role has a permission to a resource
     * @param {string} role
     * @param {string} permission
     * @param {string} resource
     * @returns {boolean}
     */
    can(role: string, permission: string, resource: string): any;
    private getRole;
    private validateRole;
    private validateResource;
    private exactCan;
    private getRoleResources;
    private getRoleAbilities;
    private getRoleParent;
}
