import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/job/job.component';
import { FavoriteJobsComponent } from './components/favorite-jobs/favorite-jobs.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path:'jobs', component: JobsComponent},
    {path:'job/:id', component: JobComponent},
    {path:'favorites', component: FavoriteJobsComponent},
    {path: '',pathMatch:'full', redirectTo:'jobs'},
    {path:'**', component: ErrorComponent}
];
