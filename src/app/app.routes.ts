import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';


import {guardCheckGuard} from './auth/services/guard-check.guard'
import { AuthGuard } from './auth/services/auth.guard';


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'estudiante', 
        loadChildren: () => import('./student-pages/student.routes').then(m => m.STUDENT_ROUTES),
        canActivate: [AuthGuard]
    },
    /*{
        path: 'articles',
        loadChildren: () => import('./articles/articles.routes').then(m => m.ARTICLES_ROUTES)
    },*/
    {
        path: 'dashboard',
        loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
        canActivate: [AuthGuard]
    }
];