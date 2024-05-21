import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { Job } from '../../models/jobs';
import { JobComponent } from '../job/job.component';
import { FavoriteJobsService } from '../../services/favorite-jobs/favorite-jobs.service';

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [NgFor, JobComponent],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css',
})
export class FavoriteJobsComponent {
  /**
   * Jobs marked as favorite
   */
  jobs: Array<Job> = Array<Job>();

  /**
   * Show no favorite jobs available text
   */
  showNoFavoriteText: boolean = false;

  constructor(private favoriteJobsService: FavoriteJobsService) {}

  ngOnInit() {
    //Get jobs marked as favorite
    this.favoriteJobsService.getFavoriteJobs().subscribe((data) => {
      this.jobs = data;
      this.showNoFavoriteText = this.jobs.length <= 0;
    });
  }
}
