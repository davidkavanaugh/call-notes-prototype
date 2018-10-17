import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavebtnComponent } from './savebtn.component';

describe('SavebtnComponent', () => {
  let component: SavebtnComponent;
  let fixture: ComponentFixture<SavebtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavebtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
