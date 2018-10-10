import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearBtnDialogComponent } from './clear-btn-dialog.component';

describe('ClearBtnDialogComponent', () => {
  let component: ClearBtnDialogComponent;
  let fixture: ComponentFixture<ClearBtnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearBtnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearBtnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
