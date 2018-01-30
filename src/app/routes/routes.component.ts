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


    ngOnInit() {
        this.setRoutes();

    }

    setRoutes() {
        this.digitransitService.getRoutes().subscribe(response => {
            this.haku = response.data['stops'];
            this.digitransitService.setLatLng(response.data['stops'][0].lat, response.data['stops'][0].lon);
            this.digitransitService.setName(response.data['stops'][0].name);

        });
    }


}
