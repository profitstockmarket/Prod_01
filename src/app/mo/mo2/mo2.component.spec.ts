import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mo2Component } from './mo2.component';

describe('Mo2Component', () => {
  let component: Mo2Component;
  let fixture: ComponentFixture<Mo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
