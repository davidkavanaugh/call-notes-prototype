import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorebtnComponent } from './restorebtn.component';

describe('RestorebtnComponent', () => {
  let component: RestorebtnComponent;
  let fixture: ComponentFixture<RestorebtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorebtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
