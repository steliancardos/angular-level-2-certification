import { Component } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { JobService } from '../../services/job/job.service';
import { JobsService } from '../../services/jobs/jobs.service';
import { map } from 'rxjs';
import { Job } from '../../models/jobs';
import { NgFor } from '@angular/common';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [NgFor, JobComponent],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css',
})
export class FavoriteJobsComponent {
  jobs!: Array<Job>;
  constructor(
    private sateService: StateService,
    private jobService: JobsService
  ) {}
  ngOnInit() {
    let job = this.sateService.getFavoriteJobs();
    this.jobService
      .getJobs()
      .pipe(map((item) => item.filter((f) => job.indexOf(f.id, 0) > -1)))
      .subscribe((data) => (this.jobs = data));
  }
}
