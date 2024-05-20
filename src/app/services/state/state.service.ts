import { Injectable } from '@angular/core';
import { Job } from '../../models/jobs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  addJobToFavorites(jobId: number): void {
    let jobsId = this.getFavoriteJobs();
    const index = jobsId.indexOf(jobId, 0);
    if (index > -1) {
      jobsId.splice(index, 1);
      localStorage.setItem('job-ids', JSON.stringify(jobsId));
    } else {
      jobsId.push(jobId);
      localStorage.setItem('job-ids', JSON.stringify(jobsId));
    }
  }

  getFavoriteJobs(): Array<number> {
    let jobIds = localStorage.getItem('job-ids');
    if (jobIds) {
      return JSON.parse(jobIds) as Array<number>;
    }
    return [];
  }

  isAddedToFavorites(jobId: number): boolean {
    const jobsId = this.getFavoriteJobs();
    return jobsId.indexOf(jobId, 0) > -1;
  }
}
