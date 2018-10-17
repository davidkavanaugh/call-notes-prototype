import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavebtnDialogComponent } from './savebtn-dialog.component';

describe('SavebtnDialogComponent', () => {
  let component: SavebtnDialogComponent;
  let fixture: ComponentFixture<SavebtnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavebtnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavebtnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
