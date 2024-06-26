import { Routes } from "@angular/router";
import {NuevoIngresoComponent} from './nuevo-ingreso/nuevo-ingreso.component'
import {RegularComponent} from './regular/regular.component'
import {LayoutComponent} from './layout/layout.component'
import {UpdateComponent} from './update/update.component'
//import {IndexCardComponent} from './index-card/index-card.component'
import {NotasComponent} from './notas/notas.component'
import {StudentLayoutComponent} from './student-layout/student-layout.component'

//import {guardCheckGuard} from './auth/service/guard-check.guard'
//import { AuthGuard } from './auth/service/' //'./auth/service/auth.guard';



export const STUDENT_ROUTES: Routes = [
    {
        //path: '', component: LayoutComponent, children: [
        path: '', component: StudentLayoutComponent, children: [
            { path: 'nuevo-ingreso', component: NuevoIngresoComponent },
            { path: 'regular', component: RegularComponent },
            { path: 'actualizar', component: UpdateComponent },
            { path: 'notas', component: NotasComponent },
            { path: '', redirectTo: 'nuevo-ingreso', pathMatch: 'full' }
        ]
    }
];

