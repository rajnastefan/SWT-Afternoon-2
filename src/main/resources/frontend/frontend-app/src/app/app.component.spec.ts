import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;	
  let fixture: ComponentFixture<AppComponent>;	

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [	
        HttpClient,	
        HttpHandler	
      ],
    }).compileComponents();
  }));

  beforeEach(() => {	
    fixture = TestBed.createComponent(AppComponent);	
    component = fixture.componentInstance;	
    fixture.detectChanges;	
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => TestBed.resetTestingModule());
});
