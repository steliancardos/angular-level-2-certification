import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobsComponent } from './jobs.component';
import { JobsService } from '../../services/jobs/jobs.service';
import { of } from 'rxjs';
import { Job } from '../../models/jobs';
import { RouterModule } from '@angular/router';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;
  let jobsService: jasmine.SpyObj<JobsService>;

  beforeEach(() => {
    const jobsServiceSpy = jasmine.createSpyObj('JobsService', ['getJobs']);

    TestBed.configureTestingModule({
      imports: [JobsComponent, RouterModule.forRoot([])],
      providers: [{ provide: JobsService, useValue: jobsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    jobsService = TestBed.inject(JobsService) as jasmine.SpyObj<JobsService>;
  });

  it('should create the component', () => {
    expect(true).toBeTruthy();
  });

  it('should fetch jobs on initialization', () => {
    const mockJobs: Job[] = [
      {
        id: 1,
        title: 'Software Engineer',
        companyName: 'Tech Innovators Inc.',
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
        title: 'Data Scientist',
        companyName: 'Data Analytics Co.',
        companyLogo: 'https://example.com/logos/tech-innovators.png',
        reference: 'REF12345',
        location: 'San Francisco, CA',
        industries: 'Technology',
        types: 'Full-time',
        description: 'Develop and maintain software applications.',
        publishDate: new Date('2024-05-01'),
      },
    ];
    jobsService.getJobs.and.returnValue(of(mockJobs));

    fixture.detectChanges();

    expect(jobsService.getJobs).toHaveBeenCalled();
    expect(component.jobs).toEqual(mockJobs);
  });
});
