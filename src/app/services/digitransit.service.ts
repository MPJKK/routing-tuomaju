import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

    digitransitUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql ';

    routeSearch = 'Gransinmäki';

    googleApiKey = 'AIzaSyDzzlp5j3dGrt5r9hDoHdoFhMnTXZ8YBBg';

    mapLat = 60.1849;
    mapLng = 24.96053;
    pysakkiName = 'Gransinmäki';

    constructor(private http: HttpClient) {
    }

    getRoutes() {
        const body =
            `{
              stops(name: "${this.routeSearch}") {
                name
                lon
                lat
                patterns {
                  name
                  route {
                    shortName
                    longName
                    mode
                  }
                  directionId
                }
              }
            }`;

        const headers = {
            headers: new HttpHeaders().set('Content-Type', 'application/graphql')
        };

        interface ReittiData {
            data: object;
        }

        return this.http.post<ReittiData>(this.digitransitUrl, body, headers);
    }

    setLatLng(lat, lng) {
        this.mapLat = lat;
        this.mapLng = lng;
    }

    setName(name) {
        this.pysakkiName = name;
    }

}
