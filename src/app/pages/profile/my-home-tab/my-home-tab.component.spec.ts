import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeTabComponent } from './my-home-tab.component';

describe('MyHomeTabComponent', () => {
  let component: MyHomeTabComponent;
  let fixture: ComponentFixture<MyHomeTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyHomeTabComponent]
    });
    fixture = TestBed.createComponent(MyHomeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
