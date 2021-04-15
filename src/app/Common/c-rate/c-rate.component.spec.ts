import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRateComponent } from './c-rate.component';

describe('CRateComponent', () => {
  let component: CRateComponent;
  let fixture: ComponentFixture<CRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
