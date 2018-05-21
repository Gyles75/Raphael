/**
 * @author Ghiles MAHRANE
 */
export class Tiers {
    raf:        string;
    name:       string;
    doubtful:   boolean;
    active:     boolean;

    /**
     * Constructor
     * @param data
     */
    constructor(data: any) {
        this.raf        = data.raf;
        this.name       = data.name;
        this.doubtful   = data.doubtful;
        this.active     = data.active;
    }
}
