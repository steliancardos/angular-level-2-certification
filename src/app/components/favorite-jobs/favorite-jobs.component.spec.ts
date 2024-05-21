import { TestBed } from '@angular/core/testing';
import { FavoriteJobsComponent } from './favorite-jobs.component';
import { FavoriteJobsService } from '../../services/favorite-jobs/favorite-jobs.service';
import { of } from 'rxjs';
import { Job } from '../../models/jobs';
import { JobComponent } from '../job/job.component';
import { NgForOf } from '@angular/common';

describe('FavoriteJobsComponent', () => {
  let component: FavoriteJobsComponent;
  let favoriteJobsService: jasmine.SpyObj<FavoriteJobsService>;

  beforeEach(async () => {
    const favoriteJobsServiceSpy = jasmine.createSpyObj('FavoriteJobsService', [
      'getFavoriteJobs',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        FavoriteJobsComponent,
        JobComponent,
        NgForOf, // Import NgForOf since NgFor is deprecated
      ],
      providers: [
        { provide: FavoriteJobsService, useValue: favoriteJobsServiceSpy },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(FavoriteJobsComponent);
    component = fixture.componentInstance;
    favoriteJobsService = TestBed.inject(
      FavoriteJobsService
    ) as jasmine.SpyObj<FavoriteJobsService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch favorite jobs on ngOnInit', () => {
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
    favoriteJobsService.getFavoriteJobs.and.returnValue(of(mockJobs));

    component.ngOnInit();

    expect(favoriteJobsService.getFavoriteJobs).toHaveBeenCalled();
    expect(component.jobs).toEqual(mockJobs);
  });
});
