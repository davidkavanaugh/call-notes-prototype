import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextInputComponent } from './add-text-input.component';

describe('AddTextInputComponent', () => {
  let component: AddTextInputComponent;
  let fixture: ComponentFixture<AddTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
