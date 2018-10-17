import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbtnDialogComponent } from './editbtn-dialog.component';

describe('EditbtnDialogComponent', () => {
  let component: EditbtnDialogComponent;
  let fixture: ComponentFixture<EditbtnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbtnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbtnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
