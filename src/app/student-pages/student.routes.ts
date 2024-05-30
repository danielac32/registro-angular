import { Routes } from "@angular/router";
import {NuevoIngresoComponent} from './nuevo-ingreso/nuevo-ingreso.component'
import {RegularComponent} from './regular/regular.component'
import {LayoutComponent} from './layout/layout.component'
import {UpdateComponent} from './update/update.component'
//import {IndexCardComponent} from './index-card/index-card.component'


export const STUDENT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: 'nuevo-ingreso', component: NuevoIngresoComponent },
            { path: 'regular', component: RegularComponent },
            { path: 'actualizar', component: UpdateComponent },
            //{ path: 'index-card', component: IndexCardComponent },
            { path: '', redirectTo: 'nuevo-ingreso', pathMatch: 'full' }
        ]
    }
];

