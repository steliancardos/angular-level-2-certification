import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobDetailsComponent } from './job-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job/job.service';

describe('JobDetailsComponent', () => {
  let component: JobDetailsComponent;
  let fixture: ComponentFixture<JobDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let jobService: jasmine.SpyObj<JobService>;

  beforeEach(async () => {
    const jobServiceSpy = jasmine.createSpyObj('JobService', ['getJob']);
    const paramMap = new Map();
    paramMap.set('id', '1');
    const activatedRouteSpy = {
      snapshot: {
        paramMap: paramMap,
      },
    };
    await TestBed.configureTestingModule({
      imports: [JobDetailsComponent, RouterTestingModule],
      declarations: [],
      providers: [
        { provide: JobService, useValue: jobServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JobDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    jobService = TestBed.inject(JobService) as jasmine.SpyObj<JobService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the root route when goBack is called', () => {
    spyOn(router, 'navigate').and.stub();
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });
});
