import { Routes } from "@angular/router";
import {NuevoIngresoComponent} from './nuevo-ingreso/nuevo-ingreso.component'
import {RegularComponent} from './regular/regular.component'
import {LayoutComponent} from './layout/layout.component'


export const STUDENT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: 'nuevo-ingreso', component: NuevoIngresoComponent },
            { path: 'regular', component: RegularComponent },
            { path: '', redirectTo: 'nuevo-ingreso', pathMatch: 'full' }
        ]
    }
];

