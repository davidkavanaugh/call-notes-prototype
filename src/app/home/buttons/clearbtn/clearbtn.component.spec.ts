import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearbtnComponent } from './clearbtn.component';

describe('ClearbtnComponent', () => {
  let component: ClearbtnComponent;
  let fixture: ComponentFixture<ClearbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
