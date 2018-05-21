/**
 * @author Ghiles MAHRANE
 */
export class User {
    username:   string;
    password:   string;
    roles:      any;
    enabled:    boolean;

    constructor(data: any) {
        this.username   = data.username;
        this.password   = data.password;
        this.roles      = data.roles;
        this.enabled    = data.enabled;
    }
}
