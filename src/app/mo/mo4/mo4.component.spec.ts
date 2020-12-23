import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mo4Component } from './mo4.component';

describe('Mo4Component', () => {
  let component: Mo4Component;
  let fixture: ComponentFixture<Mo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
