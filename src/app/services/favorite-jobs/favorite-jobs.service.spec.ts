import { TestBed } from '@angular/core/testing';

import { FavoriteJobsService } from './favorite-jobs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StateService } from '../state/state.service';
import { JobsService } from '../jobs/jobs.service';
import { Job } from '../../models/jobs';
import { of } from 'rxjs';

describe('FavoriteJobsService', () => {
  let service: FavoriteJobsService;
  let stateService: jasmine.SpyObj<StateService>;
  let jobsService: jasmine.SpyObj<JobsService>;

  beforeEach(() => {
    const stateSpy = jasmine.createSpyObj('StateService', ['getFavoriteJobs']);
    const jobsSpy = jasmine.createSpyObj('JobsService', ['getJobs']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FavoriteJobsService,
        { provide: StateService, useValue: stateSpy },
        { provide: JobsService, useValue: jobsSpy },
      ],
    });
    service = TestBed.inject(FavoriteJobsService);
    stateService = TestBed.inject(StateService) as jasmine.SpyObj<StateService>;
    jobsService = TestBed.inject(JobsService) as jasmine.SpyObj<JobsService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return favorite jobs', () => {
    const favoriteJobIds = [1, 2];
    stateService.getFavoriteJobs.and.returnValue(favoriteJobIds);
    const mockJobs: Job[] = [
      {
        id: 1,
        companyName: 'Tech Innovators Inc.',
        title: 'Software Engineer',
        companyLogo: 'https://example.com/logos/tech-innovators.png',
        reference: 'REF12345',
        location: 'San Francisco, CA',
        industries: 'Technology',
        types: 'Full-time',
        description: 'Develop and maintain software applications.',
        publishDate: new Date('2024-05-01'),
      },
      {
        id: 2,
        companyName: 'Green Solutions Ltd.',
        title: 'Environmental Scientist',
        companyLogo: 'https://example.com/logos/green-solutions.png',
        reference: 'REF67890',
        location: 'Seattle, WA',
        industries: 'Environmental Services',
        types: 'Part-time',
        description: 'Conduct research and analyze environmental data.',
        publishDate: new Date('2024-05-10'),
      },
    ];
    jobsService.getJobs.and.returnValue(of(mockJobs));

    service.getFavoriteJobs().subscribe((jobs) => {
      expect(jobs).toEqual(mockJobs);
    });
  });
});
