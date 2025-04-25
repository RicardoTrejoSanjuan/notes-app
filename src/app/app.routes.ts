import { Routes } from '@angular/router';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { TaskComponent } from './pages/task/task.component';
// import { AboutComponent } from './pages/about/about.component';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'task',
        loadComponent: () =>
          import('./pages/task/task.component').then((m) => m.TaskComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
