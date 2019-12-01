import {Component, OnInit} from '@angular/core';
import {BackendApiService} from "../../shared/services/backend-api.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public feeds: any = []
    public view: string = 'grid'

    constructor(private backendAPI: BackendApiService) {
    }

    /**
     * Show fetched feeds
     * @param feeds
     * @param view
     */
    public showFeeds(feeds: any, view: string = 'grid') {
        this.feeds = feeds
        this.view = view
    }

    /**
     * Fetch public feeds
     */
    public getFeeds() {
        this.backendAPI.getFlickrPublicFeeds()
            .subscribe((response: any) => {
                console.log('feeds', response)
                this.showFeeds(response.data)
            })
    }

    ngOnInit() {
        this.getFeeds()
    }

}
