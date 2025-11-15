import { Routes } from '@angular/router';
import { FullLayout } from './containers/full-layout/full-layout';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: FullLayout, children: [
        ]
    }
];
