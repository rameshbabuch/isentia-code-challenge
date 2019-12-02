import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {GridComponent} from './grid.component';
import {DashboardModule} from '../dashboard.module';

describe('GridComponent', () => {
    let component: GridComponent;
    let fixture: ComponentFixture<GridComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [],
            imports: [
                DashboardModule,
                RouterTestingModule,
                BrowserAnimationsModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GridComponent);
        component = fixture.componentInstance;
        component.feeds = {items: []};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('returns empty array from empty string', () => {
        expect(component.getTags('')).toEqual(['']);
    });

    it('returns tags array from string - one item', () => {
        expect(component.getTags('nikon')).toEqual(['nikon']);
    });

    it('returns tags array from string - multiple', () => {
        expect(component.getTags('nikon nature')).toEqual(['nikon', 'nature']);
    });

});
