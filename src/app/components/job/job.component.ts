import { Component, Input } from '@angular/core';
import { Job } from '../../models/jobs';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../services/state/state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent {
  //The job to be displayed
  @Input('job') job!: Job;
  //show favorite button
  @Input('showFavorite') showFavorite!: boolean;
  addedToFavorites: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sateService: StateService
  ) {}

  ngOnInit() {
    this.addedToFavorites = this.sateService.isAddedToFavorites(this.job.id);
  }

  jobClicked(jobID: number) {
    this.router.navigate(['/jobs', jobID], { relativeTo: this.route });
  }

  addToFavorites(jobId: number) {
    this.sateService.addJobToFavorites(jobId);
    this.addedToFavorites = this.sateService.isAddedToFavorites(this.job.id);
  }
}
