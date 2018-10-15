import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsbtnDialogComponent } from './settingsbtn-dialog.component';

describe('SettingsbtnDialogComponent', () => {
  let component: SettingsbtnDialogComponent;
  let fixture: ComponentFixture<SettingsbtnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsbtnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsbtnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
