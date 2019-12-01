import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    // inputs: ['items']
})

export class GridComponent implements OnInit {
    @Input() feeds: any;

    ngOnInit() {
    }
}
