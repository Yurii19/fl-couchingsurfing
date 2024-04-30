import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileAsideComponent } from './edit-profile-aside.component';

describe('EditProfileAsideComponent', () => {
  let component: EditProfileAsideComponent;
  let fixture: ComponentFixture<EditProfileAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileAsideComponent]
    });
    fixture = TestBed.createComponent(EditProfileAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
