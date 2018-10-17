import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebtnDialogComponent } from './deletebtn-dialog.component';

describe('DeletebtnDialogComponent', () => {
  let component: DeletebtnDialogComponent;
  let fixture: ComponentFixture<DeletebtnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletebtnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebtnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
