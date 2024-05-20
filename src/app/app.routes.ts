import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { FavoriteJobsComponent } from './components/favorite-jobs/favorite-jobs.component';
import { ErrorComponent } from './components/error/error.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

export const routes: Routes = [
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
  { path: 'favorites', component: FavoriteJobsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'jobs' },
  { path: '**', component: ErrorComponent },
];
