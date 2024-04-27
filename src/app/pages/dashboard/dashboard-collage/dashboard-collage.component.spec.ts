import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCollageComponent } from './dashboard-collage.component';

describe('DashboardCollageComponent', () => {
  let component: DashboardCollageComponent;
  let fixture: ComponentFixture<DashboardCollageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCollageComponent]
    });
    fixture = TestBed.createComponent(DashboardCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
