import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTabComponent } from './about-tab.component';

describe('AboutTabComponent', () => {
  let component: AboutTabComponent;
  let fixture: ComponentFixture<AboutTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTabComponent]
    });
    fixture = TestBed.createComponent(AboutTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
