import { Routes, RouterModule } from '@angular/router';

import { DummyComponent }       from './dummy/dummy.component';
import { FooComponent }         from './foo/foo.component';
import { BazComponent }         from './baz/baz.component';
import { HomeComponent }        from './home/home.component';

const appRoutes : Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dummy',
        component: DummyComponent
    }, 
    {
        path: 'foo',
        component: FooComponent
    }, 
    {
        path: 'baz',
        component: BazComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);