import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopybtnComponent } from './copybtn.component';

describe('CopybtnComponent', () => {
  let component: CopybtnComponent;
  let fixture: ComponentFixture<CopybtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopybtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopybtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
