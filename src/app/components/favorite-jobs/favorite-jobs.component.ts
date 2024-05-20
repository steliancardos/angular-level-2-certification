import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { StateService } from '../../services/state/state.service';
import { JobsService } from '../../services/jobs/jobs.service';
import { JobComponent } from '../job/job.component';

import { Job } from '../../models/jobs';

import { map } from 'rxjs';

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [NgFor, JobComponent],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css',
})
export class FavoriteJobsComponent {
  jobs: Array<Job> = [];

  constructor(
    private sateService: StateService,
    private jobService: JobsService
  ) {}

  ngOnInit() {
    let favoriteJobs = this.sateService.getFavoriteJobs();
    this.jobService
      .getJobs()
      .pipe(
        map((item) => item.filter((f) => favoriteJobs.indexOf(f.id, 0) > -1))
      )
      .subscribe((data) => (this.jobs = data));
  }
}
