import { Tiers } from '../domain/tiers.domain';
import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { RaphaelEnum } from '../../common/enums/raphael.enum';

@Component({
    selector: 'rpl-tiers-form',
    templateUrl: '../views/tiers-form.component.html',
    styleUrls: ['../views/tiers-form.component.css']
})
export class TiersFormComponent implements OnInit {

    @Input() tiers:     Tiers;
    @Input() isUpdMode: boolean;
    @Output() emitter:  EventEmitter<any>;

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
     * When Submit Btn Clicked
     */
    private whenSubmit(): void {
        ((!this.isUpdMode) ?
            this.emitter.emit({ action: RaphaelEnum.SAVE_ACTION, data: this.tiers })
            :
            this.emitter.emit({ action: RaphaelEnum.UPDATE_ACTION, data: this.tiers }))
        ;
    }

    /**
     * When Reset Btn Clicked
     * @param event
     */
    private whenReset(event: any): void {
        this.emitter.emit({ action: RaphaelEnum.RESET_ACTION });
    }
}
