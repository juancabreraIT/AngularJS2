import { Routes, RouterModule } from '@angular/router';

import { DummyComponent }       from './dummy/dummy.component';
import { FooComponent }         from './foo/foo.component';
import { BazComponent }         from './baz/baz.component';
import { HomeComponent }        from './home/home.component';
import { AthleteFormComponent } from './sample_form/athlete-form.component';
import { CitiesComponent }		from './cities/cities.component';

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
    },
    {
        path: 'athleteForm',
        component: AthleteFormComponent
    },
    {
        path: 'cities',
        component: CitiesComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);