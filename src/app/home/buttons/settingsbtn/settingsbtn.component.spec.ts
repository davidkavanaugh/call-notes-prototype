import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsbtnComponent } from './settingsbtn.component';

describe('SettingsbtnComponent', () => {
  let component: SettingsbtnComponent;
  let fixture: ComponentFixture<SettingsbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
