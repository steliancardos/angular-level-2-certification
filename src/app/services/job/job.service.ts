import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../models/jobs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns A list of available jobs
   */
  getJobs(jobId: number): Observable<Job> {
    return this.http.get<Job>('/jobs/' + jobId);
  }
}
