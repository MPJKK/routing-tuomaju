import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(public digitransitService: DigitransitService) { }

  ngOnInit() {
  }

}
