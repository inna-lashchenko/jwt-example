import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { NewsListComponent, NewsComponent } from './news/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent /*, canActivate: [AuthGuard] */},
    { path: 'news', /* canActivate: [AuthGuard] */
        children: [
            { path: '', component: NewsListComponent },
            { path: ':id', component: NewsComponent },
        ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);