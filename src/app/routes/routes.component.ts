import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';


@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

    constructor(public digitransitService: DigitransitService) {
    }

    haku: any;

    lat: number;
    lon: number;

    ngOnInit() {
        this.setRoutes();

    }

    setRoutes() {
        this.digitransitService.getRoutes().subscribe(response => {
            this.haku = response.data['stops'];
            this.lat = response.data['stops'][0].lat;

            this.lon = response.data['stops'][0].lon;

            console.log(this.lat , this.lon);

        });
    }

}
