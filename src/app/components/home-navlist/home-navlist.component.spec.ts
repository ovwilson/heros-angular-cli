import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavlistComponent } from './home-navlist.component';

describe('HomeNavlistComponent', () => {
  let component: HomeNavlistComponent;
  let fixture: ComponentFixture<HomeNavlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNavlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
