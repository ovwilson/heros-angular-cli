import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDatepickerComponent } from './home-datepicker.component';

describe('HomeDatepickerComponent', () => {
  let component: HomeDatepickerComponent;
  let fixture: ComponentFixture<HomeDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
