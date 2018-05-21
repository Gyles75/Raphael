import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tiers } from '../domain/tiers.domain';
import { RaphaelApi } from '../../common/services/raphael-api.service';

/**
 * @author Ghiles MAHRANE
 */
@Injectable()
export class TiersService {

    private path = 'tiers';

    /**
     * Constructor
     * @param raphaelApi
     */
    constructor(private raphaelApi: RaphaelApi) {
    }

    /**
     * Find All
     */
    public findAll(): Observable<Array<Tiers>> {
        return this.raphaelApi.get(`${this.path}`);
    }

    /**
     * Find By ID
     * @param raf
     */
    public findById(raf: string): Observable<Tiers> {
        return this.raphaelApi.get(`${this.path}/searchById/${raf}`);
    }

    /**
     * Find By Name
     * @param name
     */
    public findByName(name: string): Observable<Array<Tiers>> {
        return this.raphaelApi.get(`${this.path}/searchByName/${name}`);
    }

    /**
     * Find By Doubtful
     * @param doubtful
     */
    public findByDoubtful(doubtful: boolean): Observable<Array<Tiers>> {
        return this.raphaelApi.get(`${this.path}/searchByDoubtful/${doubtful}`);
    }

    /**
     * Find By Active
     * @param active
     */
    public findByActive(active: boolean): Observable<Array<Tiers>> {
        return this.raphaelApi.get(`${this.path}/searchByActive/${active}`);
    }

    /**
     * Save
     * @param tiers
     */
    public save(tiers: Tiers): Observable<Tiers> {
        return this.raphaelApi.post(`${this.path}`, tiers);
    }

    /**
     * Update
     * @param tiers
     */
    public update(tiers: Tiers): Observable<Tiers> {
        return this.raphaelApi.put(`${this.path}`, tiers);
    }

    /**
     * Delete
     * @param raf
     */
    public delete(raf: string): Observable<boolean> {
        return this.raphaelApi.delete(`${this.path}/${raf}`);
    }
}
