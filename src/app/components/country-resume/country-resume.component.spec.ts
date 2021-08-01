import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryResumeComponent } from './country-resume.component';

describe('CountryResumeComponent', () => {
  let component: CountryResumeComponent;
  let fixture: ComponentFixture<CountryResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
