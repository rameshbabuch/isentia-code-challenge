import {BackendApiService} from './backend-api.service';
import {environment} from '../../../environments/environment';
import {EmptyError, of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

describe('BackendApiService', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let backendApiService: BackendApiService;
    const mockResponse = {
        status: true,
        message: 'public feeds fetched',
        data: {
            title: 'Recent Uploads',
            items: [
                {
                    title: '1977 Volkswagen Bus Wagon USA',
                    link: 'https://www.flickr.com/photos/aussie-car-adverts/49136987132/'
                }
            ]
        }
    };

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        backendApiService = new BackendApiService(<any> httpClientSpy);
    });

    it('should be created', () => {
        expect(backendApiService).toBeTruthy();
    });

    it('check api url is set', () => {
        expect(backendApiService.apiUrl).toBe(environment.apiUrl);
    });

    it('get flickr feeds - returns success data', () => {
        httpClientSpy.get.and.returnValue(of(mockResponse));

        backendApiService.getFlickrPublicFeeds('tags=nikon')
            .subscribe((response: any) => {
                expect(response.status).toBe(true);
                expect(response.data.items.length).toBeGreaterThan(0);
            });
    });

    it('get flickr feeds - returns a 404', () => {
        const errorResponse = new HttpErrorResponse({
            error: '404 error',
            status: 404, statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(of(errorResponse));

        backendApiService.getFlickrPublicFeeds().subscribe(
            (feeds) => {
            },
            (error) => {
                expect(error.message).toContain('test 404 error');
            }
        );
    });

});
