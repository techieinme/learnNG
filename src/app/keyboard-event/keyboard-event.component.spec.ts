import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardEventComponent } from './keyboard-event.component';

describe('KeyboardEventComponent', () => {
  let component: KeyboardEventComponent;
  let fixture: ComponentFixture<KeyboardEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyboardEventComponent]
    });
    fixture = TestBed.createComponent(KeyboardEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
