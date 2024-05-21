import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './components/menu/menu.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule, MenuComponent],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
// it('should create the app', () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   const app = fixture.componentInstance;
//   expect(app).toBeTruthy();
// });

// it(`should have the 'ng-job-search' title`, () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   const app = fixture.componentInstance;
//   expect(app.title).toEqual('ng-job-search');
// });

// it('should render title', () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   fixture.detectChanges();
//   const compiled = fixture.nativeElement as HTMLElement;
//   expect(compiled.querySelector('h1')?.textContent).toContain(
//     'Hello, ng-job-search'
//   );
// });
