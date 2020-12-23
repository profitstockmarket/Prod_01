import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mo3Component } from './mo3.component';

describe('Mo3Component', () => {
  let component: Mo3Component;
  let fixture: ComponentFixture<Mo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
