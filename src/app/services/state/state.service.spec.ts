import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
    localStorage.clear(); // Clear local storage before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add job ID to favorites', () => {
    service.addJobToFavorites(1);
    expect(service.getFavoriteJobs()).toEqual([1]);

    service.addJobToFavorites(2);
    expect(service.getFavoriteJobs()).toEqual([1, 2]);
  });

  it('should remove job ID from favorites', () => {
    service.addJobToFavorites(1);
    service.addJobToFavorites(2);

    service.addJobToFavorites(1);
    expect(service.getFavoriteJobs()).toEqual([2]);

    service.addJobToFavorites(2);
    expect(service.getFavoriteJobs()).toEqual([]);
  });

  it('should return favorite job IDs', () => {
    localStorage.setItem('job-ids', JSON.stringify([1, 2, 3]));

    expect(service.getFavoriteJobs()).toEqual([1, 2, 3]);
  });

  it('should return true if job ID is added to favorites', () => {
    service.addJobToFavorites(1);
    service.addJobToFavorites(2);

    expect(service.isAddedToFavorites(1)).toBeTrue();
    expect(service.isAddedToFavorites(2)).toBeTrue();
    expect(service.isAddedToFavorites(3)).toBeFalse();
  });
});
