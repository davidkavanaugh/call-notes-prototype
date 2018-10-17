import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorebtnDialogComponent } from './restorebtn-dialog.component';

describe('RestorebtnDialogComponent', () => {
  let component: RestorebtnDialogComponent;
  let fixture: ComponentFixture<RestorebtnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorebtnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorebtnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
