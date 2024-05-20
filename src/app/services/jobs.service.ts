import { Injectable } from '@angular/core';
import { Job } from '../models/jobs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

/**
 * 
 * @returns A list of available jobs
 */
  getJobs(): Observable<Array<Job>> {
    return this.http.get<Array<Job>>('/jobs');
  }

}
