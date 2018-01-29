import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {



    constructor( public digitransitService: DigitransitService ) {
    }

    ngOnInit() {
    }

}
