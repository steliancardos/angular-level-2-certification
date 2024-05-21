import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  /**
   * Add a job to state when is flaged as favorite
   * @param jobId The job id
   */
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

  /**
   * Get id-s of the jobs from state ( localStorage)
   * @returns Array of numbers containg the id-s of the jobs marked as favorite, or empty if there are non
   */
  getFavoriteJobs(): Array<number> {
    let jobIds = localStorage.getItem('job-ids');
    if (jobIds) {
      return JSON.parse(jobIds) as Array<number>;
    }
    return Array<number>();
  }

  /**
   * Check if a job is marked as favorite
   * @param jobId Id of the job
   * @returns True if job is added to favorite, else false
   */
  isAddedToFavorites(jobId: number): boolean {
    const jobsId = this.getFavoriteJobs();
    return jobsId.indexOf(jobId, 0) > -1;
  }
}
