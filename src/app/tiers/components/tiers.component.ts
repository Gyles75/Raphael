import { Tiers } from '../domain/tiers.domain';
import { Component, OnInit } from '@angular/core';
import { TiersService } from '../services/tiers.service';
import { RaphaelEnum } from '../../common/enums/raphael.enum';

@Component({
    selector: 'rpl-tiers',
    templateUrl: '../views/tiers.component.html',
    styleUrls: ['../views/tiers.component.css']
})
export class TiersComponent implements OnInit {

    tiers:      Tiers;
    tiersItems: Array<Tiers>;
    isUpdMode:  boolean;
    error:      any;

    /**
     * Construcror
     * @param tiersService
     */
    constructor(private tiersService: TiersService) {
    }

    /**
     * OnInit
     */
    public ngOnInit(): void {
        this.clear();
    }

    /**
     * Dispatch Received Events
     * @param event
     */
    public dispatchReceivedEvents(event: any): void {
        this.error = null;

        switch (event.action) {
            case RaphaelEnum.SAVE_ACTION:
                this.doSave(event.data);
                break;

            case RaphaelEnum.UPDATE_ACTION:
                this.doUpdate(event.data);
                break;

            case RaphaelEnum.DELETE_ACTION:
                this.doDelete(event.data);
                break;

            case RaphaelEnum.UPD_MODE_ACTION:
                this.doUpdMode(event.data);
                break;

            case RaphaelEnum.RESET_ACTION:
                this.doReset();
                break;

            default:
                break;
        }
    }

    /**
     * Find All Action
     */
    private doFindAll(): void {
        this.tiersService.findAll().subscribe(response => {
            console.log(response);
            this.tiersItems = response;
        }, (error) => {
            console.log(error);
            this.error = error;
        });
    }

    /**
     * Save Action
     * @param item
     */
    private doSave(item: Tiers): void {
        this.tiersService.save(item).subscribe(response => {
            console.log(response);
            this.clear();
        }, (error) => {
            console.log(error);
            this.error = error;
        });
    }

    /**
     * Update Action
     * @param item
     */
    private doUpdate(item: Tiers): void {
        this.tiersService.update(item).subscribe(response => {
            console.log(response);
            this.clear();
        }, (error) => {
            console.log(error);
            this.error = error;
        });
    }

    /**
     * Delete Action
     * @param raf
     */
    private doDelete(raf: string): void {
        this.tiersService.delete(raf).subscribe(response => {
            console.log(response);
            this.clear();
        }, (error) => {
            console.log(error);
            this.error = error;
        });
    }

    /**
     * Update Mode Action
     * @param item
     */
    private doUpdMode(item: Tiers): void {
        this.isUpdMode  = true;
        this.tiers      = new Tiers(item);
    }

    /**
     * Reset Action
     */
    private doReset(): void {
        this.isUpdMode  = false;
        this.tiers      = new Tiers({
            raf:        '0000001',
            name:       'Volkswagen SA',
            doubtful:   false,
            active:     true
        });
    }

    /**
     * Reset All Data
     */
    private clear(): void {
        this.isUpdMode  = false;
        this.error      = null;
        this.tiers      = new Tiers({
            raf:        '0000001',
            name:       'Volkswagen SA',
            doubtful:   false,
            active:     true
        });

        this.doFindAll();
    }

    /**
     * Handle Error
     * @param error
     */
    private handleError(error: any): string {
        switch (error.status) {
            case 401: return 'Action non autorisée';
            case 403: return 'Roles insuffisants';
            case 404: return 'Page introuvable';
            case 503: return 'Serveur indisponible';
        }
    }
}
