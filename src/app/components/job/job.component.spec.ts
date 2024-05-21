import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { JobComponent } from './job.component';
import { StateService } from '../../services/state/state.service';
import { Job } from '../../models/jobs';
import { of } from 'rxjs';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;
  let router: Router;
  let stateService: jasmine.SpyObj<StateService>;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    const stateSpy = jasmine.createSpyObj('StateService', [
      'isAddedToFavorites',
      'addJobToFavorites',
    ]);

    TestBed.configureTestingModule({
      imports: [JobComponent, RouterTestingModule.withRoutes([])],
      declarations: [],
      providers: [{ provide: StateService, useValue: stateSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    stateService = TestBed.inject(StateService) as jasmine.SpyObj<StateService>;
    activatedRoute = TestBed.inject(ActivatedRoute);

    // Mock job and inputs
    component.job = {
      id: 1,
      title: 'Software Engineer',
      companyName: 'Tech Innovators Inc.',
    } as Job;
    component.showFavorite = true;

    // Set up mock behavior for stateService
    stateService.isAddedToFavorites.and.returnValue(false);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize addedToFavorites property', () => {
    fixture.detectChanges();
    expect(component.addedToFavorites).toBeFalse();
  });

  it('should navigate to job details when jobClicked is called', () => {
    spyOn(router, 'navigate').and.stub();
    component.jobClicked(1);
    expect(router.navigate).toHaveBeenCalledWith(['/jobs', 1], {
      relativeTo: activatedRoute,
    });
  });

  it('should add job to favorites and update addedToFavorites property when addToFavorites is called', () => {
    stateService.isAddedToFavorites.and.returnValue(true);
    fixture.detectChanges();
    component.addToFavorites(1);
    expect(stateService.addJobToFavorites).toHaveBeenCalledWith(1);
    expect(component.addedToFavorites).toBeTrue();
  });
});
