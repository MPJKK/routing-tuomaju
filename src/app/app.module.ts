import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';
import { MapsComponent } from './maps/maps.component';
import {AgmCoreModule} from '@agm/core';
import { DirectionPipe } from './pipes/direction.pipe';
import { DestinationPipe } from './pipes/destination.pipe';



@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SetupComponent,
        RoutesComponent,
        MapsComponent,
        DirectionPipe,
        DestinationPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyDzzlp5j3dGrt5r9hDoHdoFhMnTXZ8YBBg'})
    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
