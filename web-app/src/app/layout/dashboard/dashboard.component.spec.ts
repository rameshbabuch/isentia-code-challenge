import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DashboardComponent} from './dashboard.component';
import {DashboardModule} from './dashboard.module';
import {BackendApiService} from '../../shared/services/backend-api.service';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BackendApiService,
                FormBuilder
            ],
            imports: [
                DashboardModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                HttpClientTestingModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('search form submit method - all ways returns false', () => {
        expect(component.searchTag({})).toEqual(false);
    });

    it('show feeds should return false', () => {
        expect(component.showFeeds({status: false, message: '', data: {}})).toEqual(false);
    });

    it('show feeds should set feeds variable', () => {
        const data = {status: true, message: '', data: {title: '', items: []}};
        component.showFeeds(data);

        expect(component.feeds).toEqual(data.data);
    });


    // it('get feeds should set the feeds variable', () => {
    //     const data = '';
    //     component.getFeeds(data);
    //
    //     expect(component.feeds.status).toBe(true)
    // });

    it('should toggel the loader value', () => {
        const loaderValOld = component.loader;
        component.toggleLoader();
        const loaderValNew = component.loader;

        expect(loaderValOld).toBe(!loaderValNew);
    });

    it('prepare form data - should return empty', () => {
        expect(DashboardComponent.prepareFormData({text: ''})).toEqual('');
    });

    it('prepare form data - should return query string', () => {
        expect(DashboardComponent.prepareFormData({text: 'nature'})).toEqual('tags=nature');
    });

    it('prepare form data - should return query string without space', () => {
        expect(DashboardComponent.prepareFormData({text: 'nature, nikon'})).toEqual('tags=nature,nikon');
    });

});
