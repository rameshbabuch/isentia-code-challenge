import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

/**
 * Common backend service class
 */
export class BackendApiService {
    public apiUrl: string;

    /**
     * Constructor
     * @param http http client
     */
    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    /**
     * Fetch flicker public feeds
     * @param params query params string
     */
    getFlickrPublicFeeds(params = '') {
        return this.http.get(`${this.apiUrl}/feeds?${params}`);
    }
}
