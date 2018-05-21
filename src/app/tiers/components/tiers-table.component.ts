import { Tiers } from '../domain/tiers.domain';
import { RaphaelEnum } from '../../common/enums/raphael.enum';
import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rpl-tiers-table',
    templateUrl: '../views/tiers-table.component.html',
    styleUrls: ['../views/tiers-table.component.css']
})
export class TiersTableComponent implements OnInit {

    @Input() tiersItems:    Array<Tiers>;
    @Input() isUpdMode:     boolean;
    @Output() emitter:      EventEmitter<any>;

    /**
     * Constructor
     */
    constructor() {
        this.emitter = new EventEmitter();
    }

    /**
     * OnInit
     */
    public ngOnInit(): void {
    }

    /**
     * When Update Btn Clicked
     * @param item
     */
    private whenUpdMode(item: Tiers): void {
        this.emitter.emit({ action: RaphaelEnum.UPD_MODE_ACTION, data: item });
    }

    /**
     * When Delete Btn Clicked
     * @param raf
     */
    private whenDelete(raf: string): void {
        this.emitter.emit({ action: RaphaelEnum.DELETE_ACTION, data: raf });
    }

    /**
     * Decode Status
     * @param doubtful
     */
    private decodeBucket(doubtful: boolean): string {
        return ((doubtful === true) ? 'Douteux' : 'Sain');
    }

    /**
     * Decode Status
     * @param doubtful
     */
    private decodeStatus(active: boolean): string {
        return ((active === true) ? 'Actif' : 'Inactif');
    }
}
