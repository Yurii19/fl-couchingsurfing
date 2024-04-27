import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPlansComponent } from './travel-plans.component';

describe('TravelPlansComponent', () => {
  let component: TravelPlansComponent;
  let fixture: ComponentFixture<TravelPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelPlansComponent]
    });
    fixture = TestBed.createComponent(TravelPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
