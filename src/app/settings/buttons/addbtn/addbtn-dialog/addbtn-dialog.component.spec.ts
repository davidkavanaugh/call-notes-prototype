import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbtnDialogComponent } from './addbtn-dialog.component';

describe('AddbtnDialogComponent', () => {
  let component: AddbtnDialogComponent;
  let fixture: ComponentFixture<AddbtnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbtnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbtnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
