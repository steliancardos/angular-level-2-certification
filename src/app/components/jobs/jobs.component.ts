import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';
import { Job } from '../../models/jobs';
import { NgFor } from '@angular/common';
import { JobComponent } from '../job/job.component';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor, JobComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {
  jobs: Array<Job> = [];

  constructor(private jobsService: JobsService) {
    this.jobsService.getJobs().subscribe((data) => (this.jobs = data));
  }
}
