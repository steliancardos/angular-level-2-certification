import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { JobService } from './job.service';
import { HttpClient } from '@angular/common/http';
import { Job } from '../../models/jobs';

describe('JobService', () => {
  let service: JobService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobService],
    });

    service = TestBed.inject(JobService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return job by ID', () => {
    const mockJobId = 123;
    const mockJob: Job = {
      id: mockJobId,
      title: 'Software Engineer',
      companyName: 'Tech Innovators Inc.',
      companyLogo: 'https://example.com/logo.png',
      reference: 'REF123',
      location: 'San Francisco, CA',
      industries: 'Technology',
      types: 'Full-time',
      description: 'Develop and maintain software applications.',
      publishDate: new Date('2024-05-01'),
    };

    service.getJob(mockJobId).subscribe((job) => {
      expect(job).toEqual(mockJob);
    });

    const req = httpTestingController.expectOne('/jobs/' + mockJobId);
    expect(req.request.method).toBe('GET');

    req.flush(mockJob);
  });
});
