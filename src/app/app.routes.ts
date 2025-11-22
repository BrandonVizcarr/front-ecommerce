import { Routes } from '@angular/router';
import { FullLayout } from './containers/full-layout/full-layout';
import { Dashboard } from './features/dashboard/dashboard';
import { Products } from './features/products/products';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: FullLayout, children: [
            {path:'home', component:Dashboard},
            {path:'products',component:Products}
        ]
    }
];
