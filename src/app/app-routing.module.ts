import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {MapsComponent} from './maps/maps.component';

const routes: Routes = [
    {
        path: '',
        component: SetupComponent
    },
    {
        path: 'setup',
        component: SetupComponent
    },
    {
        path: 'routes',
        component: RoutesComponent
    },
    {
        path: 'map',
        component: MapsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
