import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvolvedComponent } from './get-involved.component';

describe('GetInvolvedComponent', () => {
  let component: GetInvolvedComponent;
  let fixture: ComponentFixture<GetInvolvedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetInvolvedComponent]
    });
    fixture = TestBed.createComponent(GetInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
