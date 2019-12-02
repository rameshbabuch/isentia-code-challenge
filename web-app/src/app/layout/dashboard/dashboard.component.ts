import {Component, OnInit} from '@angular/core';
import {BackendApiService} from '../../shared/services/backend-api.service';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public feeds: any = {};
    public searchForm: any;
    public loader: boolean;
    public errorMessage: string;

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
        this.errorMessage = '';
    }

    /**
     * Prepare form data to be query string
     * @param formData form data object
     */
    static prepareFormData(formData) {
        if (!formData.text) {
            return '';
        }

        const tags = formData.text.replace(/ /g, '');
        let params = `tags=${tags}`;

        if (!tags) {
            params = '';
        }

        return params;
    }

    /**
     * Search tag - called by submit form event
     * @param formData search form data
     */
    public searchTag(formData: any) {
        const params = DashboardComponent.prepareFormData(formData);
        this.toggleLoader();
        this.getFeeds(params);

        return false;
    }

    /**
     * Show fetched feeds
     * @param response feeds data
     */
    public showFeeds(response: any) {
        if (!response.status) {
            return false;
        }

        this.feeds = response.data;
    }

    /**
     * Fetch public feeds
     */
    public getFeeds(tags: string = '') {
        this.backendAPI.getFlickrPublicFeeds(tags)
            .subscribe((response: any) => {
                this.errorMessage = '';
                this.showFeeds(response);
                this.toggleLoader();
            }, (error: any) => {
                this.errorMessage = error.message;
                this.toggleLoader();
            });

    }

    /**
     * Toggle loader icon
     */
    public toggleLoader() {
        this.loader = !this.loader;
    }

    /**
     * Init function
     */
    public ngOnInit() {
        this.getFeeds();
    }


}
