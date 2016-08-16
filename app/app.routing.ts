import { Routes, RouterModule } from '@angular/router';

import { DummyComponent }       from './dummy/dummy.component';
import { FooComponent }         from './foo/foo.component';
import { BazComponent }         from './baz/baz.component';

const appRoutes : Routes = [
    {
        path: '',
        redirectTo: '/dummy',
        pathMatch: 'full'
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