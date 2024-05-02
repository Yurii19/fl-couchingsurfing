import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchRequestsComponent } from './couch-requests.component';

describe('CouchRequestsComponent', () => {
  let component: CouchRequestsComponent;
  let fixture: ComponentFixture<CouchRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouchRequestsComponent]
    });
    fixture = TestBed.createComponent(CouchRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
