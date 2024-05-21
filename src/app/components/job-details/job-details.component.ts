import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/jobs';
import { JobService } from '../../services/job/job.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent {
  job!: Job;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.jobService
        .getJob(Number(params.get('id')))
        .subscribe((data) => (this.job = data));
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
