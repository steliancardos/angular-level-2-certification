import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { JobsService } from './jobs.service';
import { HttpClient } from '@angular/common/http';
import { Job } from '../../models/jobs';

describe('JobsService', () => {
  let service: JobsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobsService],
    });

    service = TestBed.inject(JobsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of jobs', () => {
    const mockJobs: Job[] = [
      {
        id: 1,
        title: 'Software Engineer',
        companyName: 'Tech Innovators Inc.',
        companyLogo: 'https://example.com/logo.png',
        reference: 'REF123',
        location: 'San Francisco, CA',
        industries: 'Technology',
        types: 'Full-time',
        description: 'Develop and maintain software applications.',
        publishDate: new Date('2024-05-01'),
      },
      {
        id: 2,
        title: 'Software Engineer',
        companyName: 'Tech Innovators Inc.',
        companyLogo: 'https://example.com/logo.png',
        reference: 'REF123',
        location: 'San Francisco, CA',
        industries: 'Technology',
        types: 'Full-time',
        description: 'Develop and maintain software applications.',
        publishDate: new Date('2024-05-01'),
      },
      {
        id: 3,
        title: 'Software Engineer',
        companyName: 'Tech Innovators Inc.',
        companyLogo: 'https://example.com/logo.png',
        reference: 'REF123',
        location: 'San Francisco, CA',
        industries: 'Technology',
        types: 'Full-time',
        description: 'Develop and maintain software applications.',
        publishDate: new Date('2024-05-01'),
      },
    ];

    service.getJobs().subscribe((jobs) => {
      expect(jobs).toEqual(mockJobs);
    });

    const req = httpTestingController.expectOne('/jobs');
    expect(req.request.method).toBe('GET');

    req.flush(mockJobs);
  });
});
