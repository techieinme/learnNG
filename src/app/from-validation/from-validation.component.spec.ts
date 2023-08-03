import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromValidationComponent } from './from-validation.component';

describe('FromValidationComponent', () => {
  let component: FromValidationComponent;
  let fixture: ComponentFixture<FromValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromValidationComponent]
    });
    fixture = TestBed.createComponent(FromValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
