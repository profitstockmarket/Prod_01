import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitQueryComponent } from './profit-query.component';

describe('ProfitQueryComponent', () => {
  let component: ProfitQueryComponent;
  let fixture: ComponentFixture<ProfitQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
