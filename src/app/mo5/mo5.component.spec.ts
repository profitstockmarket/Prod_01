import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mo5Component } from './mo5.component';

describe('Mo5Component', () => {
  let component: Mo5Component;
  let fixture: ComponentFixture<Mo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
