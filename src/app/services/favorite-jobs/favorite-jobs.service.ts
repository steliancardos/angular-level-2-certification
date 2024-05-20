import { Injectable } from '@angular/core';
import { StateService } from '../state/state.service';
import { JobsService } from '../jobs/jobs.service';

import { Observable, map } from 'rxjs';
import { Job } from '../../models/jobs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteJobsService {
  constructor(
    private sateService: StateService,
    private jobService: JobsService
  ) {}

  /**
   * Get the jobs marked as favorites
   * @returns Observable with Array of jobs, if any
   */
  getFavoriteJobs(): Observable<Array<Job>> {
    //Get the ids of the jobs marked as favorites
    let favoriteJobIds = this.sateService.getFavoriteJobs();

    //convert to pipe and use map with filter to return only the jobs marked as favorite
    return this.jobService
      .getJobs()
      .pipe(
        map((item) => item.filter((f) => favoriteJobIds.indexOf(f.id, 0) > -1))
      );
  }
}
