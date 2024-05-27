import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
        canActivate: [loggedGuard]
    },
    {
        path: 'estudiante', 
        loadChildren: () => import('./student-pages/student.routes').then(m => m.STUDENT_ROUTES)
    },
    /*{
        path: 'articles',
        loadChildren: () => import('./articles/articles.routes').then(m => m.ARTICLES_ROUTES)
    },*/
    {
        path: 'dashboard',
        loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    }
];