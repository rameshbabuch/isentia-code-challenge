import {Component, OnInit} from '@angular/core';
import {BackendApiService} from '../../shared/services/backend-api.service';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public feeds: any = [];
    public searchForm: any;
    public loader: boolean;

    /**
     * Constructor
     * @param backendAPI BackendApiService
     * @param formBuilder FormBuilder
     */
    constructor(private backendAPI: BackendApiService, private formBuilder: FormBuilder) {
        this.searchForm = this.formBuilder.group({
            text: ''
        });
        this.loader = true;
    }

    /**
     * Search tag - called by submit form event
     * @param formData search form data
     */
    public searchTag(formData: any) {
        console.log('search tag', formData);
        const tags = formData.text.replace(/ /g, '');
        let params = `tags=${tags}`;

        if (!tags) {
            params = '';
        }


        this.toggleLoader();
        this.getFeeds(params);

        return false;
    }

    /**
     * Show fetched feeds
     * @param feeds feeds data
     */
    public showFeeds(feeds: any) {
        this.feeds = feeds;
    }

    /**
     * Fetch public feeds
     */
    public getFeeds(tags: string = '') {
        this.backendAPI.getFlickrPublicFeeds(tags)
            .subscribe((response: any) => {
                this.showFeeds(response.data);
                this.toggleLoader();
            });
    }

    /**
     * Toggle loader icon
     */
    toggleLoader() {
        this.loader = !this.loader;
    }

    /**
     * Init function
     */
    ngOnInit() {
        this.getFeeds();
    }

}
