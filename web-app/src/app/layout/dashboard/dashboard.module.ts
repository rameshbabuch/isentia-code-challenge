import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbCarouselModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {GridComponent} from './grid/grid.component';
import {TablesComponent} from './tables/tables.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent,
        GridComponent,
        TablesComponent
    ]
})
export class DashboardModule {
}
