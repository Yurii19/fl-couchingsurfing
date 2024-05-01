import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainSectionComponent } from './profile-main-section.component';

describe('ProfileMainSectionComponent', () => {
  let component: ProfileMainSectionComponent;
  let fixture: ComponentFixture<ProfileMainSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileMainSectionComponent]
    });
    fixture = TestBed.createComponent(ProfileMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
