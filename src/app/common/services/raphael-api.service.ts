import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @author Ghiles MAHRANE
 */
@Injectable()
export class RaphaelApi {

    private baseUrl: string;

    /**
     * Constructor
     * @param _httpClient
     */
    constructor(private _httpClient: HttpClient) {
        this.baseUrl = '/api/v1';
    }

    /**
     * GET
     * @param path
     */
    public get(path: string): Observable<any> {
        return this._httpClient.get<any>(`${this.baseUrl}/${path}`);
    }

    /**
     * POST
     * @param path
     * @param body
     */
    public post(path: string, body: any): Observable<any> {
        return this._httpClient.post<any>(`${this.baseUrl}/${path}`, body);
    }

    /**
     * PUT
     * @param path
     * @param body
     */
    public put(path: string, body: any): Observable<any> {
        return this._httpClient.put<any>(`${this.baseUrl}/${path}`, body);
    }

    /**
     * DELETE
     * @param path
     */
    public delete(path: string): Observable<any> {
        return this._httpClient.delete<any>(`${this.baseUrl}/${path}`);
    }

    /**
     * PATCH
     * @param path
     * @param body
     */
    public patch(path: string, body: any): Observable<any> {
        return this._httpClient.patch<any>(`${this.baseUrl}/${path}`, body);
    }

    /**
     * OPTIONS
     * @param path
     * @param body
     */
    public options(path: string, body: any): Observable<any> {
        return this._httpClient.options(`${this.baseUrl}/${path}`, body);
    }
}
