import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})

/**
 * Common backend service class
 */
export class BackendApiService {
    private apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    /**
     * Fetch flicker public feeds
     * @param params
     */
    getFlickrPublicFeeds(params = '') {
        let url = `${this.apiUrl}/feeds?${params}`;
        return this.http.get(url);
    }
}
