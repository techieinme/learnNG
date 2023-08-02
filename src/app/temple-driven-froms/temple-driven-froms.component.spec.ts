import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDrivenFromsComponent } from './temple-driven-froms.component';

describe('TempleDrivenFromsComponent', () => {
  let component: TempleDrivenFromsComponent;
  let fixture: ComponentFixture<TempleDrivenFromsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempleDrivenFromsComponent]
    });
    fixture = TestBed.createComponent(TempleDrivenFromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
